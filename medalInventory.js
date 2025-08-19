// medalInventory.js
class MedalInventory {
  constructor(database, currentUser, medalsData) {
    this.database = database;
    this.currentUser = currentUser;
    this.medalsData = medalsData;
    this.userMedals = { owned: [], equipped: [] };
    this.userCurrency = { coins: 0, gems: 0 };
  }

  // 載入用戶資料
  async loadUserData() {
    try {
      // 載入勳章資料
      const medalSnapshot = await this.database.ref(`users/${this.currentUser}/medals`).once('value');
      const medalData = medalSnapshot.val() || { owned: [], equipped: [] };
      this.userMedals = medalData;

      // 載入貨幣資料
      const currencySnapshot = await this.database.ref(`users/${this.currentUser}/currency`).once('value');
      const currencyData = currencySnapshot.val() || { coins: 0, gems: 0 };
      this.userCurrency = currencyData;

      console.log('✅ 用戶勳章和貨幣資料已載入', this.userMedals, this.userCurrency);
    } catch (err) {
      console.error('載入用戶資料失敗:', err);
      // 提供預設值
      this.userMedals = { owned: [], equipped: [] };
      this.userCurrency = { coins: 0, gems: 0 };
    }
  }

  // 更新貨幣顯示
  updateCurrencyDisplay(coinsElementId, gemsElementId) {
    const coinsElement = document.getElementById(coinsElementId);
    const gemsElement = document.getElementById(gemsElementId);
    
    if (coinsElement) coinsElement.textContent = this.userCurrency.coins;
    if (gemsElement) gemsElement.textContent = this.userCurrency.gems;
  }

  // 更新勳章顯示
  updateMedalDisplay(medalsElementId) {
    const medalsElement = document.getElementById(medalsElementId);
    if (!medalsElement) return;
    
    // 清空現有勳章
    medalsElement.innerHTML = '';
    
    // 只顯示已裝備的勳章
    this.userMedals.equipped.forEach(medalId => {
      const medal = this.medalsData.medals[medalId];
      if (!medal) return;
      
      const medalElement = document.createElement('div');
      medalElement.className = `medal-icon ${medal.rarity}`;
      medalElement.style.borderColor = medal.color;
      medalElement.title = `${medal.name}: ${medal.description}`;
      
      // 檢查圖標是否為URL
      if (medal.icon.startsWith('http')) {
        const img = document.createElement('img');
        img.src = medal.icon;
        img.alt = medal.name;
        medalElement.appendChild(img);
      } else {
        medalElement.innerHTML = medal.icon;
      }
      
      medalsElement.appendChild(medalElement);
    });
  }

// 保存用戶勳章資料
async saveUserMedals() {
  try {
    await this.database.ref(`users/${this.currentUser}/medals`).set(this.userMedals);
    console.log('✅ 用戶勳章資料已保存');
  } catch (err) {
    console.error('保存用戶勳章資料失敗:', err);
    alert('保存勳章資料失敗，請檢查網路連線');
  }
}

// 保存勳章資料 (作為 saveUserMedals 的別名，確保兼容性)
async saveMedalData() {
  return await this.saveUserMedals();
}

  // 保存用戶貨幣資料
  async saveCurrencyData() {
    try {
      await this.database.ref(`users/${this.currentUser}/currency`).set(this.userCurrency);
      console.log('✅ 用戶貨幣資料已保存');
    } catch (err) {
      console.error('保存用戶貨幣資料失敗:', err);
      alert('保存貨幣資料失敗，請檢查網路連線');
    }
  }

  // 渲染背包
  async renderInventory(gridElementId) {
    const inventoryGrid = document.getElementById(gridElementId);
    if (!inventoryGrid) return;
    
    inventoryGrid.innerHTML = '<div class="loading"><div class="loading-spinner"></div>載入背包中...</div>';
    
    try {
      // 確保用戶資料已載入
      if (!this.userMedals.owned) {
        await this.loadUserData();
      }
      
      if (this.userMedals.owned.length === 0) {
        inventoryGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--text-secondary);">你還沒有任何勳章</p>';
        return;
      }
      
      // 清空並重新渲染
      inventoryGrid.innerHTML = '';
      
      this.userMedals.owned.forEach(medalId => {
        const medal = this.medalsData.medals[medalId];
        if (!medal) return;
        
        const isEquipped = this.userMedals.equipped.includes(medalId);
        
        const iconContent = medal.icon.startsWith('http') ? 
          `<img src="${medal.icon}" alt="${medal.name}" style="width: 32px; height: 32px; object-fit: contain;">` : 
          medal.icon;
        
        const itemElement = document.createElement('div');
        itemElement.className = `inventory-item ${isEquipped ? 'equipped' : ''}`;
        itemElement.onclick = () => this.toggleMedalEquip(medalId, gridElementId);
        
        itemElement.innerHTML = `
          <div class="inventory-medal-icon" style="border-color: ${medal.color};">${iconContent}</div>
          <div class="inventory-medal-name">${medal.name}</div>
        `;
        
        inventoryGrid.appendChild(itemElement);
      });
      
    } catch (err) {
      console.error('渲染背包失敗:', err);
      inventoryGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--danger);">載入背包失敗，請重試</p>';
    }
  }

  // 切換勳章裝備狀態
  async toggleMedalEquip(medalId, gridElementId) {
    try {
      const medal = this.medalsData.medals[medalId];
      if (!medal) {
        alert('找不到此勳章');
        return;
      }
      
      const isEquipped = this.userMedals.equipped.includes(medalId);
      
      if (isEquipped) {
        // 卸下勳章
        this.userMedals.equipped = this.userMedals.equipped.filter(id => id !== medalId);
        console.log(`🔽 已卸下勳章: ${medal.name}`);
      } else {
        // 檢查是否超過最大裝備數量
        if (this.userMedals.equipped.length >= this.medalsData.maxEquippedMedals) {
          alert(`最多只能裝備 ${this.medalsData.maxEquippedMedals} 個勳章`);
          return;
        }
        
        // 裝備勳章
        this.userMedals.equipped.push(medalId);
        console.log(`🔼 已裝備勳章: ${medal.name}`);
      }
      
      // 保存更新
      await this.saveUserMedals();
      
      // 更新UI
      this.updateMedalDisplay('userMedals');
      await this.renderInventory(gridElementId);
      
    } catch (err) {
      console.error('切換勳章裝備狀態失敗:', err);
      alert('操作失敗，請重試');
    }
  }
}

// 導出模組
window.MedalInventory = MedalInventory;
