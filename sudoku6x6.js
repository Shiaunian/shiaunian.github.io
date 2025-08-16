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
    if (Math.random() > 0.5) {
      for (let r = 0; r < this.size; r++) {
        [result[r], result[r + this.subgridRows]] = [result[r + this.subgridRows], result[r]];
      }
    }
    
    // 隨機交換整個列區塊
    if (Math.random() > 0.5) {
      for (let r = 0; r < this.size; r++) {
        for (let c = 0; c < this.subgridCols; c++) {
          [result[r][c], result[r][c + this.subgridCols]] = [result[r][c + this.subgridCols], result[r][c]];
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
    
