class Sudoku6x6 {
  constructor(containerId, onComplete) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error("Container element not found");
    }
    
    this.onComplete = onComplete; // 完成後的回調函數
    this.startTime = Date.now(); // 開始時間
    this.size = 6;
    this.subgridRows = 2;
    this.subgridCols = 3;
    this.mistakes = 0; // 記錄錯誤次數
    this.completed = false; // 是否完成
    this.difficulty = "medium"; // 固定難度為中等
    this.timerInterval = null; // 計時器間隔
    
    // 生成隨機數獨題目和解答
    this.generateRandomPuzzle();
    
    // 創建界面
    this.createBoard();
    
    // 開始計時
    this.startTimer();
  }

  // 生成隨機數獨題目和解答
  generateRandomPuzzle() {
    // 先生成一個有效的完整數獨解答
    const solution = this.generateRandomSolution();
    this.solution = solution;
    
    // 根據難度從解答中移除一些數字來創建題目
    this.puzzle = this.createPuzzleFromSolution(solution, this.difficulty);
  }

  // 生成隨機的完整數獨解答
  generateRandomSolution() {
    // 基本解答模板
    const baseGrid = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6, 1, 2, 3],
      [2, 3, 1, 6, 4, 5],
      [5, 6, 4, 3, 1, 2],
      [3, 1, 2, 5, 6, 4],
      [6, 4, 5, 2, 3, 1]
    ];
    
    // 隨機打亂行和列，但保持數獨規則有效
    const shuffledGrid = this.shuffleGrid(baseGrid);
    return shuffledGrid;
  }

  // 打亂數獨網格但保持有效性
  shuffleGrid(grid) {
    const result = JSON.parse(JSON.stringify(grid));
    
    // 隨機交換行（在同一個區塊內）
    for (let block = 0; block < this.subgridRows; block++) {
      const startRow = block * this.subgridRows;
      for (let i = 0; i < 5; i++) { // 多次交換以增加隨機性
        const r1 = startRow + Math.floor(Math.random() * this.subgridRows);
        const r2 = startRow + Math.floor(Math.random() * this.subgridRows);
        if (r1 !== r2) {
          [result[r1], result[r2]] = [result[r2], result[r1]];
        }
      }
    }
    
    // 隨機交換列（在同一個區塊內）
    for (let block = 0; block < this.subgridCols; block++) {
      const startCol = block * this.subgridCols;
      for (let i = 0; i < 5; i++) { // 多次交換以增加隨機性
        const c1 = startCol + Math.floor(Math.random() * this.subgridCols);
        const c2 = startCol + Math.floor(Math.random() * this.subgridCols);
        if (c1 !== c2) {
          // 交換列
          for (let r = 0; r < this.size; r++) {
            [result[r][c1], result[r][c2]] = [result[r][c2], result[r][c1]];
          }
        }
      }
    }
    
    // 隨機交換整個行區塊
    if (Math.random() > 0.5 && this.subgridRows > 1) {
      const block1 = Math.floor(Math.random() * this.subgridRows);
      const block2 = Math.floor(Math.random() * this.subgridRows);
      if (block1 !== block2) {
        for (let i = 0; i < this.subgridRows; i++) {
          const r1 = block1 * this.subgridRows + i;
          const r2 = block2 * this.subgridRows + i;
          [result[r1], result[r2]] = [result[r2], result[r1]];
        }
      }
    }
    
    // 隨機交換整個列區塊
    if (Math.random() > 0.5 && this.subgridCols > 1) {
      const block1 = Math.floor(Math.random() * this.subgridCols);
      const block2 = Math.floor(Math.random() * this.subgridCols);
      if (block1 !== block2) {
        for (let r = 0; r < this.size; r++) {
          for (let i = 0; i < this.subgridCols; i++) {
            const c1 = block1 * this.subgridCols + i;
            const c2 = block2 * this.subgridCols + i;
            [result[r][c1], result[r][c2]] = [result[r][c2], result[r][c1]];
          }
        }
      }
    }
    
    return result;
  }

  // 從解答中創建題目（通過移除一些數字）
  createPuzzleFromSolution(solution, difficulty) {
    const puzzle = JSON.parse(JSON.stringify(solution));
    
    // 根據難度決定要移除的數字數量
    let cellsToRemove;
    switch (difficulty) {
      case "easy":
        cellsToRemove = 20; // 約55%的格子為空
        break;
      case "medium":
        cellsToRemove = 25; // 約70%的格子為空
        break;
      case "hard":
        cellsToRemove = 30; // 約83%的格子為空
        break;
      default:
        cellsToRemove = 25;
    }
    
    // 隨機移除數字
    let removed = 0;
    while (removed < cellsToRemove) {
      const r = Math.floor(Math.random() * this.size);
      const c = Math.floor(Math.random() * this.size);
      
      if (puzzle[r][c] !== 0) {
        puzzle[r][c] = 0;
        removed++;
      }
    }
    
    return puzzle;
  }

  createBoard() {
    this.container.innerHTML = '';
    
    // 創建狀態區域
    const statusDiv = document.createElement('div');
    statusDiv.className = 'status-container';
    statusDiv.style.marginBottom = '10px';
    statusDiv.style.display = 'flex';
    statusDiv.style.justifyContent = 'space-between';
    
    // 計時器顯示
    this.timerDisplay = document.createElement('div');
    this.timerDisplay.className = 'timer';
    this.timerDisplay.textContent = '時間: 00:00';
    this.timerDisplay.style.fontSize = '18px';
    
    // 錯誤計數顯示
    this.mistakesDisplay = document.createElement('div');
    this.mistakesDisplay.className = 'mistakes';
    this.mistakesDisplay.textContent = '錯誤: 0';
    this.mistakesDisplay.style.fontSize = '18px';
    
    statusDiv.appendChild(this.timerDisplay);
    statusDiv.appendChild(this.mistakesDisplay);
    this.container.appendChild(statusDiv);
    
    // 創建數獨表格
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.margin = '10px auto';
    table.style.userSelect = 'none';

    for (let r = 0; r < this.size; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < this.size; c++) {
        const td = document.createElement('td');
        td.style.border = '1px solid #333';
        td.style.width = '40px';
        td.style.height = '40px';
        td.style.textAlign = 'center';
        td.style.verticalAlign = 'middle';
        td.style.fontSize = '20px';
        td.style.fontWeight = 'bold';
        td.style.position = 'relative';

        // 加粗區塊邊框
        if ((c+1) % this.subgridCols === 0 && c !== this.size -1) {
          td.style.borderRight = '3px solid #000';
        }
        if ((r+1) % this.subgridRows === 0 && r !== this.size -1) {
          td.style.borderBottom = '3px solid #000';
        }

        if (this.puzzle[r][c] !== 0) {
          td.textContent = this.puzzle[r][c];
          td.style.color = '#000';
          td.style.backgroundColor = '#ddd';
        } else {
          const input = document.createElement('input');
          input.type = 'text';
          input.maxLength = 1;
          input.style.width = '100%';
          input.style.height = '100%';
          input.style.border = 'none';
          input.style.textAlign = 'center';
          input.style.fontSize = '20px';
          input.style.fontWeight = 'bold';
          input.style.backgroundColor = '#fff';
          input.style.outline = 'none';
          input.dataset.row = r;
          input.dataset.col = c;
          
          // 即時驗證輸入
          input.addEventListener('input', (e) => {
            const val = e.target.value;
            if (!/^[1-6]$/.test(val)) {
              e.target.value = '';
              return;
            }
            
            // 檢查是否正確
            const row = parseInt(e.target.dataset.row);
            const col = parseInt(e.target.dataset.col);
            const num = parseInt(val);
            
            if (num !== this.solution[row][col]) {
              // 錯誤
              e.target.style.color = 'red';
              this.mistakes++;
              this.updateMistakesDisplay();
              
              // 震動效果
              e.target.style.animation = 'shake 0.5s';
              setTimeout(() => {
                e.target.style.animation = '';
              }, 500);
            } else {
              // 正確
              e.target.style.color = 'green';
              e.target.style.fontWeight = 'bold';
              
              // 檢查是否完成
              if (this.checkCompletion()) {
                this.finishGame();
              }
            }
          });
          
          td.appendChild(input);
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    this.container.appendChild(table);

    // 建立按鈕區
    const btnContainer = document.createElement('div');
    btnContainer.style.marginTop = '15px';
    btnContainer.style.textAlign = 'center';
    
    const btnCheck = document.createElement('button');
    btnCheck.textContent = '檢查答案';
    btnCheck.className = 'btn btn-primary';
    btnCheck.style.marginRight = '10px';
    btnCheck.style.padding = '8px 16px';
    btnCheck.style.backgroundColor = '#007bff';
    btnCheck.style.color = 'white';
    btnCheck.style.border = 'none';
    btnCheck.style.borderRadius = '4px';
    btnCheck.style.cursor = 'pointer';
    
    btnCheck.addEventListener('click', () => {
      this.checkAllAnswers();
    });
    
    const btnHint = document.createElement('button');
    btnHint.textContent = '提示';
    btnHint.className = 'btn btn-secondary';
    btnHint.style.marginRight = '10px';
    btnHint.style.padding = '8px 16px';
    btnHint.style.backgroundColor = '#6c757d';
    btnHint.style.color = 'white';
    btnHint.style.border = 'none';
    btnHint.style.borderRadius = '4px';
    btnHint.style.cursor = 'pointer';
    
    btnHint.addEventListener('click', () => {
      this.giveHint();
    });
    
    const btnNew = document.createElement('button');
    btnNew.textContent = '新遊戲';
    btnNew.className = 'btn btn-success';
    btnNew.style.padding = '8px 16px';
    btnNew.style.backgroundColor = '#28a745';
    btnNew.style.color = 'white';
    btnNew.style.border = 'none';
    btnNew.style.borderRadius = '4px';
    btnNew.style.cursor = 'pointer';
    
    btnNew.addEventListener('click', () => {
      this.newGame();
    });
    
    btnContainer.appendChild(btnCheck);
    btnContainer.appendChild(btnHint);
    btnContainer.appendChild(btnNew);
    this.container.appendChild(btnContainer);
    
    // 添加CSS動畫
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
      
      @keyframes highlight {
        0% { background-color: #ffff99; }
        100% { background-color: #fff; }
      }
    `;
    document.head.appendChild(style);
  }
  
  // 開始計時器
  startTimer() {
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
      const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
      const seconds = (elapsedTime % 60).toString().padStart(2, '0');
      this.timerDisplay.textContent = `時間: ${minutes}:${seconds}`;
    }, 1000);
  }
  
  // 更新錯誤顯示
  updateMistakesDisplay() {
    this.mistakesDisplay.textContent = `錯誤: ${this.mistakes}`;
  }
  
  // 檢查是否完成
  checkCompletion() {
    const inputs = this.container.querySelectorAll('input');
    for (const input of inputs) {
      if (!input.value) return false;
      
      const row = parseInt(input.dataset.row);
      const col = parseInt(input.dataset.col);
      const num = parseInt(input.value);
      
      if (num !== this.solution[row][col]) return false;
    }
    return true;
  }
  
  // 檢查所有答案
  checkAllAnswers() {
    const inputs = this.container.querySelectorAll('input');
    let allCorrect = true;
    
    for (const input of inputs) {
      if (!input.value) {
        allCorrect = false;
        continue;
      }
      
      const row = parseInt(input.dataset.row);
      const col = parseInt(input.dataset.col);
      const num = parseInt(input.value);
      
      if (num !== this.solution[row][col]) {
        input.style.color = 'red';
        allCorrect = false;
      } else {
        input.style.color = 'green';
      }
    }
    
    if (allCorrect && this.checkCompletion()) {
      this.finishGame();
    }
  }
  
  // 提供提示
  giveHint() {
    // 找到一個空白或錯誤的格子
    const inputs = Array.from(this.container.querySelectorAll('input'));
    const emptyOrWrongInputs = inputs.filter(input => {
      if (!input.value) return true;
      
      const row = parseInt(input.dataset.row);
      const col = parseInt(input.dataset.col);
      return parseInt(input.value) !== this.solution[row][col];
    });
    
    if (emptyOrWrongInputs.length === 0) return;
    
    // 隨機選擇一個格子提供提示
    const randomInput = emptyOrWrongInputs[Math.floor(Math.random() * emptyOrWrongInputs.length)];
    const row = parseInt(randomInput.dataset.row);
    const col = parseInt(randomInput.dataset.col);
    
    randomInput.value = this.solution[row][col];
    randomInput.style.color = 'blue';
    randomInput.style.animation = 'highlight 1s';
    
    // 檢查是否完成
    if (this.checkCompletion()) {
      this.finishGame();
    }
  }
  
  // 完成遊戲
  finishGame() {
    if (this.completed) return;
    
    this.completed = true;
    clearInterval(this.timerInterval);
    
    const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    
    // 創建完成訊息
    const messageDiv = document.createElement('div');
    messageDiv.style.marginTop = '20px';
    messageDiv.style.padding = '15px';
    messageDiv.style.backgroundColor = '#d4edda';
    messageDiv.style.color = '#155724';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.fontSize = '18px';
    messageDiv.style.fontWeight = 'bold';
    
    messageDiv.textContent = `恭喜完成! 用時 ${minutes}分${seconds}秒, 錯誤次數: ${this.mistakes}`;
    this.container.appendChild(messageDiv);
    
    // 調用完成回調函數（如果有）
    if (typeof this.onComplete === 'function') {
      this.onComplete({
        time: elapsedTime,
        mistakes: this.mistakes
      });
    }
  }
  
  // 開始新遊戲
  newGame() {
    clearInterval(this.timerInterval);
    this.mistakes = 0;
    this.completed = false;
    this.generateRandomPuzzle();
    this.createBoard();
    this.startTimer();
  }
}
