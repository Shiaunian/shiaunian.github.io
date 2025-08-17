// shopModule.js
class ShopModule {
  constructor(database, currentUser, medalsData, medalInventory) {
    this.database = database;
    this.currentUser = currentUser;
    this.medalsData = medalsData;
    this.medalInventory = medalInventory; // 引用medalInventory實例以使用其方法
  }

  // 顯示商店
  async showShop() {
    document.getElementById('shopModal').style.display = 'flex';
    await this.renderShopItems();
  }

  // 隱藏商店
  hideShop() {
    document.getElementById('shopModal').style.display = 'none';
  }

  // 篩選商店物品
  filterShop(category, event) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
      event.target.classList.add('active');
    }
    this.renderShopItems(category);
  }

  // 渲染商店物品
  async renderShopItems(filter = 'all') {
    const shopItemsContainer = document.getElementById('shopItems');
    if (!shopItemsContainer) return;
    
    shopItemsContainer.innerHTML = '<div class="loading"><div class="loading-spinner"></div>載入商店物品中...</div>';
    
    try {
      // 確保medalInventory已經載入用戶資料
      if (!this.medalInventory.userMedals) {
        await this.medalInventory.loadUserData();
      }
      
      // 過濾勳章
      const filteredMedals = Object.entries(this.medalsData.medals)
        .filter(([id, medal]) => {
          if (filter === 'all') return true;
          return medal.rarity === filter;
        })
        .sort((a, b) => {
          // 排序：已擁有的排後面，按稀有度和價格排序
          const [idA, medalA] = a;
          const [idB, medalB] = b;
          
          const ownedA = this.medalInventory.userMedals.owned.includes(idA);
          const ownedB = this.medalInventory.userMedals.owned.includes(idB);
          
          if (ownedA && !ownedB) return 1;
          if (!ownedA && ownedB) return -1;
          
          // 稀有度排序
          const rarityOrder = { common: 1, rare: 2, epic: 3, legendary: 4, mythic: 5 };
          if (rarityOrder[medalA.rarity] !== rarityOrder[medalB.rarity]) {
            return rarityOrder[medalB.rarity] - rarityOrder[medalA.rarity];
          }
          
          // 價格排序
          return medalB.price - medalA.price;
        });
      
      if (filteredMedals.length === 0) {
        shopItemsContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--text-secondary);">此分類沒有可用的勳章</p>';
        return;
      }
      
      const shopItemsHtml = filteredMedals.map(([id, medal]) => {
        const isOwned = this.medalInventory.userMedals.owned.includes(id);
        const isEquipped = this.medalInventory.userMedals.equipped.includes(id);
        const canAfford = this.medalInventory.userCurrency.coins >= medal.price;
        
        const iconContent = medal.icon.startsWith('http') ? 
          `<img src="${medal.icon}" alt="${medal.name}" style="width: 24px; height: 24px; object-fit: contain;">` : 
          medal.icon;
        
        return `
          <div class="shop-item ${isOwned ? 'owned' : ''} ${isEquipped ? 'equipped' : ''}">
            <div class="medal-preview" style="border-color: ${medal.color};">${iconContent}</div>
            <div class="item-info">
              <div class="item-name">${medal.name}</div>
              <div class="item-description">${medal.description}</div>
              <div class="item-price">💰 ${medal.price} 金幣</div>
            </div>
            <div class="item-actions">
              ${isOwned ? 
                `<button class="btn btn-small btn-secondary" disabled>已擁有</button>` : 
                `<button class="btn btn-small ${canAfford ? 'btn-primary' : 'btn-danger'}" 
                         onclick="shopModule.buyMedal('${id}')" 
                         ${!canAfford ? 'disabled' : ''}>
                   ${canAfford ? '購買' : '金幣不足'}
                 </button>`
              }
            </div>
          </div>
        `;
      }).join('');
      
      shopItemsContainer.innerHTML = shopItemsHtml;
      
    } catch (err) {
      console.error('渲染商店物品失敗:', err);
      shopItemsContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--danger);">載入商店失敗，請重試</p>';
    }
  }

  // 購買勳章
  async buyMedal(medalId) {
    try {
      const medal = this.medalsData.medals[medalId];
      if (!medal) {
        alert('找不到此勳章');
        return;
      }
      
      // 檢查是否已擁有
      if (this.medalInventory.userMedals.owned.includes(medalId)) {
        alert(`你已經擁有 ${medal.name} 勳章`);
        return;
      }
      
      // 檢查金幣是否足夠
      if (this.medalInventory.userCurrency.coins < medal.price) {
        alert(`金幣不足！需要 ${medal.price} 金幣`);
        return;
      }
      
      // 確認購買
      if (!confirm(`確定要購買 ${medal.name} 勳章嗎？\n價格：${medal.price} 金幣`)) {
        return;
      }
      
      // 扣除金幣
      this.medalInventory.userCurrency.coins -= medal.price;
      
      // 添加勳章到用戶擁有列表
      this.medalInventory.userMedals.owned.push(medalId);
      
      // 如果用戶裝備的勳章少於最大數量，自動裝備
      if (this.medalInventory.userMedals.equipped.length < this.medalsData.maxEquippedMedals) {
        this.medalInventory.userMedals.equipped.push(medalId);
      }
      
      // 保存更新
      await this.medalInventory.saveUserMedals();
      await this.medalInventory.saveCurrencyData();
      
      // 更新UI
      this.medalInventory.updateCurrencyDisplay('userCoins', 'userGems');
      this.medalInventory.updateMedalDisplay('userMedals');
      
      // 重新渲染商店
      await this.renderShopItems();
      
      alert(`成功購買 ${medal.name} 勳章！`);
      
    } catch (err) {
      console.error('購買勳章失敗:', err);
      alert('購買勳章失敗，請重試');
    }
  }
}

// 導出模組
window.ShopModule = ShopModule;
