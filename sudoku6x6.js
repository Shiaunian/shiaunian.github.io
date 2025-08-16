// 修改後的 Sudoku6x6 類
class Sudoku6x6 {
  constructor(containerId, config, onComplete) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error("Container element not found");
    }
    
    this.config = config; // 從 exam-configs.json 獲取的配置
    this.onComplete = onComplete; // 完成後的回調函數
    this.startTime = Date.now(); // 開始時間
    this.size = 6;
    this.subgridRows = 2;
    this.subgridCols = 3;
    this.mistakes = 0; // 記錄錯誤次數
    this.completed = false; // 是否完成
    
    // 根據難度選擇不同的數獨題目
    this.puzzles = {
      easy: [
        [0, 0, 4, 0, 6, 0],
        [6, 0, 0, 0, 0, 3],
        [0, 1, 0, 0, 3, 0],
        [0, 0, 3, 0, 0, 1],
        [2, 0, 0, 0, 0, 5],
        [0, 6, 0, 3, 0, 0]
      ],
      medium: [
        [0, 0, 5, 0, 0, 0],
        [0, 2, 0, 4, 0, 1],
        [0, 0, 0, 0, 3, 5],
        [3, 1, 0, 0, 0, 0],
        [5, 0, 1, 0, 6, 0],
        [0, 0, 0, 3, 0, 0]
      ],
      hard: [
        [0, 0, 0, 0, 0, 3],
        [0, 0, 4, 0, 2, 0],
        [3, 0, 0, 0, 0, 6],
        [6, 0, 0, 0, 0, 1],
        [0, 5, 0, 2, 0, 0],
        [1, 0, 0, 0, 0, 0]
      ]
    };
    
    // 選擇難度
    this.difficulty = config.difficulty || "medium";
    this.puzzle = JSON.parse(JSON.stringify(this.puzzles[this.difficulty]));
    
    // 創建解答
    this.solution = this.generateSolution();
    
    // 創建界面
    this.createBoard();
    
    // 開始計時
    this.startTimer();
  }

  // 生成解答 (這裡簡化處理，實際應該有完整的數獨求解算法)
  generateSolution() {
    // 這裡應該有一個完整的數獨求解算法
    // 為了簡化，我們假設已經有了解答
    const solutions = {
      easy: [
        [3, 5, 4, 1, 6, 2],
        [6, 2, 1, 5, 4, 3],
        [4, 1, 5, 2, 3, 6],
        [5, 4, 3, 6, 2, 1],
        [2, 3, 6, 4, 1, 5],
        [1, 6, 2, 3, 5, 4]
      ],
      medium: [
        [4, 3, 5, 1, 2, 6],
        [6, 2, 3, 4, 5, 1],
        [1, 4, 6, 2, 3, 5],
        [3, 1, 2, 5, 4, 6],
        [5, 7, 1, 6, 6, 3],
        [2, 6, 4, 3, 1, 5]
      ],
      hard: [
        [5, 2, 1, 6, 4, 3],
        [6, 3, 4, 1, 2, 5],
        [3, 4, 5, 2, 1, 6],
        [6, 5, 3, 4, 2, 1],
        [4, 5, 6, 2, 3, 7],
        [1, 6, 2, 5, 3, 4]
      ]
    };
    
    return solutions[this.difficulty];
  }

  createBoard() {
    this.container.innerHTML = '';
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
    btnCheck.addEventListener('click', () => this.checkSolution());

    const btnReset = document.createElement('button');
    btnReset.textContent = '重置';
    btnReset.className = 'btn btn-secondary';
    btnReset.addEventListener('click', () => this.resetBoard());

    const btnHint = document.createElement('button');
    btnHint.textContent = '提示';
    btnHint.className = 'btn btn-shop';
    btnHint.style.marginLeft = '10px';
    btnHint.addEventListener('click', () => this.giveHint());

    btnContainer.appendChild(btnCheck);
    btnContainer.appendChild(btnReset);
    btnContainer.appendChild(btnHint);

    // 顯示計時器和錯誤計數
    const infoContainer = document.createElement('div');
    infoContainer.style.marginTop = '15px';
    infoContainer.style.display = 'flex';
    infoContainer.style.justifyContent = 'space-between';
    infoContainer.style.padding = '0 10px';
    
    const timerDiv = document.createElement('div');
    timerDiv.id = 'sudoku-timer';
    timerDiv.className = 'timer';
    timerDiv.textContent = '00:00';
    
    const mistakesDiv = document.createElement('div');
    mistakesDiv.id = 'sudoku-mistakes';
    mistakesDiv.style.color = 'var(--danger)';
    mistakesDiv.textContent = '錯誤: 0';
    
    infoContainer.appendChild(timerDiv);
    infoContainer.appendChild(mistakesDiv);
    
    this.container.appendChild(infoContainer);
    this.container.appendChild(btnContainer);
    
    // 添加棄權按鈕
    const quitBtn = document.createElement('button');
    quitBtn.textContent = '棄 權';
    quitBtn.className = 'btn btn-danger';
    quitBtn.style.width = '100%';
    quitBtn.style.marginTop = '15px';
    quitBtn.addEventListener('click', () => this.quitGame());
    
    this.container.appendChild(quitBtn);
    
    // 添加震動動畫
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
    `;
    document.head.appendChild(style);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
      const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
      const seconds = (elapsedTime % 60).toString().padStart(2, '0');
      
      const timerElement = document.getElementById('sudoku-timer');
      if (timerElement) {
        timerElement.textContent = `${minutes}:${seconds}`;
      }
      
      // 更新錯誤計數
      const mistakesElement = document.getElementById('sudoku-mistakes');
      if (mistakesElement) {
        mistakesElement.textContent = `錯誤: ${this.mistakes}`;
      }
    }, 1000);
  }

  getCurrentBoard() {
    const board = [];
    const rows = this.container.querySelectorAll('table tr');
    rows.forEach((tr, r) => {
      const row = [];
      const cells = tr.querySelectorAll('td');
      cells.forEach((td, c) => {
        if (this.puzzle[r][c] !== 0) {
          row.push(this.puzzle[r][c]);
        } else {
          const input = td.querySelector('input');
          const val = input.value;
          row.push(val === '' ? 0 : parseInt(val));
        }
      });
      board.push(row);
    });
    return board;
  }

  checkSolution() {
    const board = this.getCurrentBoard();
    
    // 先簡單檢查空格是否填滿
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (board[r][c] === 0) {
          alert('還有空格沒填寫！');
          return false;
        }
      }
    }
    
    // 檢查是否與解答匹配
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (board[r][c] !== this.solution[r][c]) {
          alert('答案不正確，請檢查是否有錯誤！');
          return false;
        }
      }
    }
    
    // 答案正確，完成遊戲
    this.finishGame();
    return true;
  }

  isValidSudoku(board) {
    // 檢查行
    for (let r = 0; r < this.size; r++) {
      const seen = new Set();
      for (let c = 0; c < this.size; c++) {
        const val = board[r][c];
        if (val !== 0) {
          if (seen.has(val)) return false;
          seen.add(val);
        }
      }
    }
    // 檢查列
    for (let c = 0; c < this.size; c++) {
      const seen = new Set();
      for (let r = 0; r < this.size; r++) {
        const val = board[r][c];
        if (val !== 0) {
          if (seen.has(val)) return false;
          seen.add(val);
        }
      }
    }
    // 檢查區塊
    for (let br = 0; br < this.size; br += this.subgridRows) {
      for (let bc = 0; bc < this.size; bc += this.subgridCols) {
        const seen = new Set();
        for (let r = 0; r < this.subgridRows; r++) {
          for (let c = 0; c < this.subgridCols; c++) {
            const val = board[br + r][bc + c];
            if (val !== 0) {
              if (seen.has(val)) return false;
              seen.add(val);
            }
          }
        }
      }
    }
    return true;
  }

  resetBoard() {
    const rows = this.container.querySelectorAll('table tr');
    rows.forEach((tr, r) => {
      const cells = tr.querySelectorAll('td');
      cells.forEach((td, c) => {
        if (this.puzzle[r][c] === 0) {
          const input = td.querySelector('input');
          input.value = '';
          input.style.color = '';
        }
      });
    });
  }
  
  giveHint() {
    // 找到一個空格並填入正確答案
    const emptyInputs = [];
    const rows = this.container.querySelectorAll('table tr');
    
    rows.forEach((tr, r) => {
      const cells = tr.querySelectorAll('td');
      cells.forEach((td, c) => {
        if (this.puzzle[r][c] === 0) {
          const input = td.querySelector('input');
          if (!input.value) {
            emptyInputs.push({ input, row: r, col: c });
          }
        }
      });
    });
    
    if (emptyInputs.length === 0) {
      alert('沒有空格需要提示！');
      return;
    }
    
    // 隨機選擇一個空格
    const randomIndex = Math.floor(Math.random() * emptyInputs.length);
    const { input, row, col } = emptyInputs[randomIndex];
    
    // 填入正確答案
    input.value = this.solution[row][col];
    input.style.color = 'blue';
    input.style.fontWeight = 'bold';
    
    // 檢查是否完成
    if (this.checkCompletion()) {
      this.finishGame();
    }
  }
  
  checkCompletion() {
    const board = this.getCurrentBoard();
    
    // 檢查是否所有格子都已填寫
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (board[r][c] === 0) {
          return false;
        }
      }
    }
    
    // 檢查是否與解答匹配
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (board[r][c] !== this.solution[r][c]) {
          return false;
        }
      }
    }
    
    return true;
  }
  
  finishGame() {
    if (this.completed) return; // 防止重複完成
    
    this.completed = true;
    clearInterval(this.timerInterval);
    
    const totalTime = (Date.now() - this.startTime) / 1000;
    
    // 計算分數
    // 基礎分數 100
    // 每個錯誤 -5 分
    // 時間獎勵：根據難度和時間計算
    let score = 100;
    score -= this.mistakes * 5;
    
    // 時間獎勵
    let timeBonus = 0;
    const timeThresholds = {
      easy: 120, // 2分鐘
      medium: 180, // 3分鐘
      hard: 300 // 5分鐘
    };
    
    if (totalTime < timeThresholds[this.difficulty]) {
      // 時間越短，獎勵越多
      timeBonus = Math.floor((timeThresholds[this.difficulty] - totalTime) / 10);
    }
    
    score += timeBonus;
    
    // 確保分數不低於0
    score = Math.max(0, score);
    
    // 調用完成回調
    if (typeof this.onComplete === 'function') {
      this.onComplete({
        score,
        totalTime,
        mistakes: this.mistakes,
        difficulty: this.difficulty,
        timeBonus
      });
    }
  }
  
  quitGame() {
    if (confirm('確定要棄權嗎？棄權將不會獲得任何分數。')) {
      clearInterval(this.timerInterval);
      
      // 調用完成回調，但分數為0
      if (typeof this.onComplete === 'function') {
        this.onComplete({
          score: 0,
          totalTime: (Date.now() - this.startTime) / 1000,
          mistakes: this.mistakes,
          difficulty: this.difficulty,
          forfeit: true
        });
      }
    }
  }
}
