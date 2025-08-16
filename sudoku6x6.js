export class Sudoku6x6 {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error("Container element not found");
    }
    this.size = 6;
    this.subgridRows = 2;
    this.subgridCols = 3;
    // 固定中級題目，0 表示空格
    this.puzzle = [
      [0, 0, 4, 0, 6, 0],
      [6, 0, 0, 0, 0, 3],
      [0, 1, 0, 0, 3, 0],
      [0, 0, 3, 0, 0, 1],
      [2, 0, 0, 0, 0, 5],
      [0, 6, 0, 3, 0, 0]
    ];
    this.createBoard();
  }

  createBoard() {
    this.container.innerHTML = '';
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.margin = '10px 0';
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
          input.addEventListener('input', (e) => {
            const val = e.target.value;
            if (!/^[1-6]$/.test(val)) {
              e.target.value = '';
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
    const btnCheck = document.createElement('button');
    btnCheck.textContent = '檢查答案';
    btnCheck.style.marginRight = '10px';
    btnCheck.addEventListener('click', () => this.checkSolution());

    const btnReset = document.createElement('button');
    btnReset.textContent = '重置';
    btnReset.addEventListener('click', () => this.resetBoard());

    const btnContainer = document.createElement('div');
    btnContainer.style.marginTop = '10px';
    btnContainer.appendChild(btnCheck);
    btnContainer.appendChild(btnReset);

    this.container.appendChild(btnContainer);
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
    // 檢查行、列、區塊是否有重複
    if (!this.isValidSudoku(board)) {
      alert('答案不正確，請檢查是否有重複數字！');
      return false;
    }
    alert('恭喜！答案正確！');
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
        }
      });
    });
  }
}
