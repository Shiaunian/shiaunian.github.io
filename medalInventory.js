// medalInventory.js - 勳章背包系統模組

class MedalInventory {
  constructor(database, userId, medalsData) {
    this.database = database;
    this.userId = userId;
    this.medalsData = medalsData;
    this.userMedals = { owned: [], equipped: [] };
    this.userCurrency = { coins: 0, gems: 0 };
  }

  // 載入用戶勳章和貨幣資料
  async loadUserData() {
    try {
      const snapshot = await this.database.ref(`users/${this.userId}/medals`).once('value');
      const medalSnapshot = snapshot.val() || {};
      this.userMedals = {
        owned: medalSnapshot.owned || [],
        equipped: medalSnapshot.equipped || []
      };

      const currencySnapshot = await this.database.ref(`users/${this.userId}/currency`).once('value');
      this.userCurrency = currencySnapshot.val() || { coins: 0, gems: 0 };

      return {
        medals: this.userMedals,
        currency: this.userCurrency
      };
    } catch (err) {
      console.error('載入用戶勳章資料失敗:', err);
      return {
        medals: this.userMedals,
        currency: this.userCurrency
      };
    }
  }

  // 更新勳章顯示
  updateMedalDisplay(containerElementId) {
    const medalContainer = document.getElementById(containerElementId);
    medalContainer.innerHTML = '';

    this.userMedals.equipped.forEach(medalId => {
      const medal = this.medalsData.medals[medalId];
      if (medal) {
        const medalIcon = document.createElement('div');
        medalIcon.className = `medal-icon ${medal.rarity}`;
        medalIcon.style.borderColor = medal.color;
        
        if (medal.icon.startsWith('http')) {
          medalIcon.innerHTML = `<img src="${medal.icon}" alt="${medal.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
        } else {
          medalIcon.innerHTML = medal.icon;
        }
        
        medalIcon.title = `${medal.name}: ${medal.description}`;
        medalContainer.appendChild(medalIcon);
      }
    });
  }

  // 更新貨幣顯示
  updateCurrencyDisplay(coinsElementId, gemsElementId) {
    document.getElementById(coinsElementId).textContent = this.userCurrency.coins;
    document.getElementById(gemsElementId).textContent = this.userCurrency.gems;
  }

  // 保存勳章資料
  async saveMedalData() {
    try {
      await this.database.ref(`users/${this.userId}/medals`).set(this.userMedals);
      return true;
    } catch (err) {
      console.error('保存勳章資料失敗:', err);
      return false;
    }
  }

  // 保存貨幣資料
  async saveCurrencyData() {
    try {
      await this.database.ref(`users/${this.userId}/currency`).set(this.userCurrency);
      return true;
    } catch (err) {
      console.error('保存貨幣資料失敗:', err);
      return false;
    }
  }

  // 渲染背包
  async renderInventory(gridElementId) {
    const inventoryGrid = document.getElementById(gridElementId);
    inventoryGrid.innerHTML = '<div class="loading"><div class="loading-spinner"></div>載入背包中...</div>';

    const fragment = document.createDocumentFragment();

    this.userMedals.owned.forEach(medalId => {
      const medal = this.medalsData.medals[medalId];
      if (!medal) return;

      const isEquipped = this.userMedals.equipped.includes(medalId);
      const item = document.createElement('div');
      item.className = `inventory-item ${isEquipped ? 'equipped' : ''}`;
      
      // 使用閉包保存當前的medalId
      const currentMedalId = medalId;
      item.onclick = () => this.toggleMedalEquip(currentMedalId, gridElementId);

      const iconHtml = medal.icon.startsWith('http') ? 
        `<img src="${medal.icon}" alt="${medal.name}" style="width: 24px; height: 24px; object-fit: contain;">` : 
        medal.icon;

      item.innerHTML = `
        <div class="inventory-medal-icon" style="color: ${medal.color};">
          ${iconHtml}
        </div>
        <div class="inventory-medal-name">${medal.name}</div>
        ${isEquipped ? '<div style="font-size: 0.6rem; color: var(--gold);">已裝備</div>' : ''}
      `;

      fragment.appendChild(item);
    });

    if (this.userMedals.owned.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.className = 'empty-leaderboard';
      emptyMsg.innerHTML = '<p>🎒 背包空空如也</p><p>去商店購買一些勳章吧！</p>';
      fragment.appendChild(emptyMsg);
    }

    inventoryGrid.innerHTML = '';
    inventoryGrid.appendChild(fragment);
  }

  // 切換勳章裝備狀態
  async toggleMedalEquip(medalId, gridElementId) {
    const isEquipped = this.userMedals.equipped.includes(medalId);

    if (isEquipped) {
      // 卸下勳章
      this.userMedals.equipped = this.userMedals.equipped.filter(id => id !== medalId);
    } else {
      // 裝備勳章
      if (this.userMedals.equipped.length >= this.medalsData.maxEquippedMedals) {
        alert(`最多只能裝備 ${this.medalsData.maxEquippedMedals} 個勳章！`);
        return;
      }
      this.userMedals.equipped.push(medalId);
    }

    await this.saveMedalData();
    await this.renderInventory(gridElementId);
    this.updateMedalDisplay('userMedals');
  }

  // 渲染商店物品
  async renderShopItems(containerElementId, filter = 'all') {
    const shopContainer = document.getElementById(containerElementId);
    shopContainer.innerHTML = '<div class="loading"><div class="loading-spinner"></div>載入商店中...</div>';

    const medals = Object.values(this.medalsData.medals);
    const filteredMedals = filter === 'all' ? medals : medals.filter(medal => medal.rarity === filter);
    
    const fragment = document.createDocumentFragment();

    filteredMedals.forEach(medal => {
      const isOwned = this.userMedals.owned.includes(medal.id);
      const isEquipped = this.userMedals.equipped.includes(medal.id);
      
      // 獲取價格
      let coinPrice = 0;
      let gemPrice = 0;
      
      if (typeof medal.price === 'object') {
        coinPrice = medal.price.coins || 0;
        gemPrice = medal.price.gems || 0;
      } else {
        coinPrice = medal.price;
      }
      
      // 檢查是否能負擔
      const canAffordCoins = this.userCurrency.coins >= coinPrice;
      const canAffordGems = this.userCurrency.gems >= gemPrice;
      const canAfford = canAffordCoins && canAffordGems;

      const item = document.createElement('div');
      item.className = `shop-item ${isOwned ? 'owned' : ''} ${isEquipped ? 'equipped' : ''}`;

      // 判斷是 emoji 還是網址
      const medalIconContent = medal.icon.startsWith('http') ? 
        `<img src="${medal.icon}" alt="${medal.name}" style="width: 100%; height: 100%; object-fit: contain;">` : 
        medal.icon;

      // 構建價格顯示
      let priceDisplay = '';
      if (coinPrice > 0) priceDisplay += `💰 ${coinPrice} `;
      if (gemPrice > 0) priceDisplay += `💎 ${gemPrice}`;

      item.innerHTML = `
        <div class="medal-preview" style="border-color: ${medal.color};">
          ${medalIconContent}
        </div>
        <div class="item-info">
          <div class="item-name" style="color: ${medal.color};">${medal.name}</div>
          <div class="item-description">${medal.description}</div>
          <div class="item-price">${priceDisplay}</div>
        </div>
        <div class="item-actions">
          ${isOwned ? 
            '<span class="btn btn-small btn-secondary">已擁有</span>' :
            `<button class="btn btn-small btn-primary ${!canAfford ? 'disabled' : ''}" 
              onclick="medalInventory.buyMedal('${medal.id}')" ${!canAfford ? 'disabled' : ''}>
              購買
            </button>`
          }
        </div>
      `;

      fragment.appendChild(item);
    });

    shopContainer.innerHTML = '';
    shopContainer.appendChild(fragment);
  }

  // 購買勳章
  async buyMedal(medalId) {
    const medal = this.medalsData.medals[medalId];
    if (!medal || this.userMedals.owned.includes(medalId)) return;
    
    // 檢查價格結構
    let coinPrice = 0;
    let gemPrice = 0;
    
    if (typeof medal.price === 'object') {
      coinPrice = medal.price.coins || 0;
      gemPrice = medal.price.gems || 0;
    } else {
      coinPrice = medal.price;
    }
    
    // 檢查用戶是否有足夠的貨幣
    if (this.userCurrency.coins < coinPrice) {
      alert('💰 金幣不足！');
      return;
    }
    
    if (this.userCurrency.gems < gemPrice) {
      alert('💎 寶石不足！');
      return;
    }
    
    // 顯示確認對話框
    const iconDisplay = medal.icon.startsWith('http') ? '🖼️' : medal.icon;
    let confirmMessage = `確定要購買 ${iconDisplay} ${medal.name} 嗎？\n`;
    if (coinPrice > 0) confirmMessage += `金幣：💰 ${coinPrice}\n`;
    if (gemPrice > 0) confirmMessage += `寶石：💎 ${gemPrice}`;
    
    if (confirm(confirmMessage)) {
      // 扣除貨幣
      this.userCurrency.coins -= coinPrice;
      this.userCurrency.gems -= gemPrice;
      
      // 添加勳章到擁有列表
      this.userMedals.owned.push(medalId);
      
      // 保存數據
      await Promise.all([this.saveMedalData(), this.saveCurrencyData()]);
      await this.renderShopItems('shopItems');
      this.updateCurrencyDisplay('userCoins', 'userGems');
      
      // 顯示成功訊息
      alert(`🎉 成功購買 ${iconDisplay} ${medal.name}！`);
    }
  }

  // 獲取用戶勳章圖示 (用於排行榜)
  getUserMedalIcons(username, usersData) {
    const userData = usersData[username];
    if (!userData || !userData.medals || !userData.medals.equipped || userData.medals.equipped.length === 0) {
      return '';
    }

    return userData.medals.equipped.map(medalId => {
      const medal = this.medalsData.medals[medalId];
      if (medal) {
        const iconContent = medal.icon.startsWith('http') ? 
          `<img src="${medal.icon}" alt="${medal.name}" style="width: 24px; height: 24px; object-fit: contain; border-radius: 4px;">` : 
          medal.icon;
        return `<span class="leaderboard-medal" 
                  style="border-color: ${medal.color};" 
                  data-rarity="${medal.rarity}"
                  title="${medal.name}: ${medal.description}">
                  ${iconContent}
                </span>`;
      }
      return '';
    }).join('');
  }
}

// 導出模組
window.MedalInventory = MedalInventory;
