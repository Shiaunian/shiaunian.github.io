// challenge-questions.js
// ✔ 每題格式：
// { text: '題目', options: [...], answer: 0 }
// ✔ 有圖片題：{ text:'..', image:'圖片路徑', options:[...], answer:0 }
// ✔ 選項可含圖片：options:[ '<img src="..."> 選項文字', ... ]

window.QUESTION_BANK = {

  // ===========================
  // 📌 工作挑戰（示範）
  // ===========================

  // ===========================
  // 📌 前導考題
  // ===========================

  'work-pre': [
    {
      text: "下列何者不需要進X光機掃描？",
      options: ['行李箱', '隨身包', '電動車', '免稅袋'],
      answer: 2
    },
    {
      text: '下列何者不需要進X光機掃描?',
      options: ['行李箱', '嬰兒車', '護照', '免稅袋'],
      answer: 0
    },
    {
      text: '下列何者不需要進X光機掃描?',
      options: ['後背包', '蛋塔', '電腦包', '手提袋'],
      answer: 1
    },
    {
      text: '如碰到繫在皮帶上的腰包或是脫外套才能取下的包包，應如何應對?',
      options: ['請旅客拿下來', '請旅客打開，由前導檢查', '直接通過', '請旅客打開，由複查檢查'],
      answer: 3
    },
    {
      text: '如碰到旅客有「家人」，下列何者是正確的處理方法?',
      options: ['請旅客出示證明，由前導查看', '直接通過', '一樣要過X光機', '請旅客出示證明，由複查查看'],
      answer: 0
    },
    {
      text: '下列何者為行李箱的正確擺放方式?',
      options: ['拉桿手把朝X光', '拉桿手把朝旅客排隊方向', '立著放進X光', '直接通過即可'],
      answer: 0
    },
    {
      text: '請問如何區分不同旅客的行李?',
      options: ['等待3秒再放置下一位的行李', '放空盆', '不用區分', '間隔大一點就好'],
      answer: 1
    },
    {
      text: '如旅客攜帶電動行李箱，下列何者正確?',
      options: ['請旅客直接過X光', '請旅客關閉電源後過X光', '請旅客打開，由前導檢查', '請旅客打開，由複查檢查'],
      answer: 3
    },
    {
      text: '如旅客行李沒有拉鍊，下列何者正確?',
      options: ['怎麼放都可以', '開口一律朝旅客', '開口大的朝自己，小的朝X光', '請旅客手提，由複查檢查'],
      answer: 2
    },
    {
      text: '疫區機組走中間道時，下列何者為非?',
      options: ['接完6位旅客在接機組', '行李順序為大中小', '1.2線前導共同作業', '以1線前導為主'],
      answer: 3
    },
    {
      text: '請問拐拐旅客進入中間道時，等待人數應如何計算?',
      options: ['分流回報後，拐拐人數*3', '分流回報後，拐拐人數*6', '停在黃線後，拐拐人數*6', '停在黃線後，拐拐人數*3'],
      answer: 3
    },
    {
      text: '請問免稅袋是否需要過X光檢查?',
      options: ['如果只有免稅商品，只要確認就好，不用過X光', '一律過X光', '一律不過X光', '免稅袋有其餘私人物品才要'],
      answer: 1
    },
    {
      text: '為保護旅客安全，下列何者錯誤?',
      options: ['一次接一位旅客', '應將旅客控制在黃線後面', '一家人可以全部一起往前', '協助旅客搬行李'],
      answer: 2
    },
    {
      text: '下列何者需過X光機檢查?',
      options: ['手提的飲料杯', '後背包', '拿在手上的斗笠', '錢包'],
      answer: 1
    },
    {
      text: '下列何者需過X光機檢查?',
      options: ['手提的飲料杯', '文件袋', '行李箱', '電動行李箱'],
      answer: 2
    },
    {
      text: '下列何者需過X光機檢查?',
      options: ['手錶', '文件袋', '護照', '購物袋'],
      answer: 3
    },
    {
      text: '請問工作人員在有旅客時應該走哪線?',
      options: ['中間道或綠線', '4線', '1.2線', '3線'],
      answer: 0
    },
    {
      text: '旅客攜帶寵物時，下列何者為非?',
      options: ['若旅客有攜帶文件要確認', '請複查引導旅客至檢疫櫃檯', '告知X光', '直接通過即可'],
      answer: 3
    },
    {
      text: '只要有旅客下客，哪一線前導需播放大聲公宣導?',
      options: ['1線', '2線', '3線', '4線'],
      answer: 0
    },
    {
      text: '哪一線前導負責掌控中間線?',
      options: ['1線', '2線', '3線', '4線'],
      answer: 1
    },
    {
      text: '接完旅客後，哪一線前導需巡視花台?',
      options: ['1線', '2線', '3線', '4線'],
      answer: 3
    },
    {
      text: '早上勤教後，A哨哪一線前導要將手推車推到D區?',
      options: ['1線', '2線', '3線', '4線'],
      answer: 2
    },
    {
      text: '下班前哪一線前導需將電風扇歸位?',
      options: ['1線', '2線', '3線', '4線'],
      answer: 3
    },
    {
      text: '下班後清算盆子，正確數量為何?',
      options: ['65', '66', '67', '68'],
      answer: 0
    },
    {
      text: '若旅客表示行李有易碎品，不方便過X光，應如何應對?',
      options: ['強制旅客行李需過X光', '請旅客手提，由複查手檢', '直接通過即可', '在前導直接手檢'],
      answer: 1
    },
    {
      text: '若旅客來自非疫區並且持有識別卡，應如何應對?',
      options: ['不收卡片，行李過X光', '收回卡片，行李過X光', '收回卡片，直接通過', '不收卡片，直接通過'],
      answer: 2
    },
    {
      text: '若旅客攜帶玩具，應如何應對?',
      options: ['直接在前導確認', '告知X光，由複查手檢', '過X光機', '直接通過'],
      answer: 1
    },
    {
      text: '旅客推嬰兒車經過前導時，注意事項何者為非?',
      options: ['護著桌腳，避免小朋友撞到', '提醒旅客，斜坡需煞車', '確認嬰兒車上已清空', '小孩需下車'],
      answer: 3
    }
  ],

  // ===========================
  // 📌 複查考題
  // ===========================

  'work-review': [
    {
      text: '如旅客的隨身行李內有疑似檢疫物，並且不願意配合檢查，下列何者正確？',
      options: [
        '給予宣導單並口頭宣導',
        '打電話給航警局',
        '出示豬瘟疫區檢查公告',
        '請檢疫助理上樓協助'
      ],
      answer: 2
    },
    {
      text: '檢查時下列何者錯誤？',
      options: [
        '旅客及協勤一對一檢查',
        '第一時間詢問旅客是否方便檢查',
        '不同旅客的行李間保持距離',
        '一副手套檢查所有人'
      ],
      answer: 3
    },
    {
      text: '檢查旅客行李時下列哪一項錯誤？',
      options: [
        '不需要換手套',
        '提醒旅客是否有遺留物',
        '行李要仔細檢查',
        '旅客的物品輕拿輕放'
      ],
      answer: 0
    },
    {
      text: '查獲不確定或無法判斷的東西，何者為錯誤的處理方式？',
      options: [
        '詢問周遭的同事',
        '直接放行',
        '請旅客至檢疫櫃檯確認',
        '如旅客願意，可建議旅客拋棄'
      ],
      answer: 1
    },
    {
      text: '丟棄檢疫物時，下列何者正確？',
      options: [
        '確實分類',
        '不須破壞包裝',
        '別人要可以給他',
        '包裝完整可以帶走'
      ],
      answer: 0
    },
    {
      text: '如旅客的食品沒有標示成分，應如何處理？',
      options: [
        '剝開來看',
        '口頭與旅客確認成分',
        '請旅客現場吃一口',
        '強制旅客拋棄'
      ],
      answer: 1
    },
    {
      text: '有拐拐旅客時，下列何者正確？',
      options: [
        '行李3件以上由第二位複查接手',
        '過完X光，讓拐拐直接拿行李',
        '空盆留給下一位收',
        '不用注意旅客的遺留物'
      ],
      answer: 0
    },
    {
      text: '如剛打開旅客的行李，遇到電動車要通過，下列何者正確？',
      options: [
        '旅客優先',
        '請旅客迴避車輛，一邊檢查行李',
        '停止手邊動作，請旅客迴避車輛',
        '請旅客上車'
      ],
      answer: 2
    },
    {
      text: '如旅客行李檢查到一半，遇到電動車要通過，下列何者正確？',
      options: [
        '旅客優先',
        '請旅客迴避車輛，一邊檢查行李',
        '停止手邊動作，請旅客迴避車輛',
        '請旅客上車'
      ],
      answer: 0
    },
    {
      text: '如旅客主動提出申訴，應如何應對？',
      options: [
        '直接給他電話',
        '請他填寫意見單',
        '不理他',
        '直接引導至檢疫櫃檯'
      ],
      answer: 1
    },
    {
      text: '請問由哪位複查負責管理百寶袋？',
      options: ['1-2', '4-1', '2-1', '1-1'],
      answer: 3
    },
    {
      text: '請問由哪位複查負責上哨前點手機？',
      options: ['4-2', '2-2', '1-2', '1-1'],
      answer: 2
    },
    {
      text: '請問由哪位複查負責清運？',
      options: ['4-2', '4-1', '3-2', '3-1'],
      answer: 1
    },
    {
      text: '請問雙數30分由哪位複查負責噴消毒毯？',
      options: ['4-2', '1-1', '1-2', '3-2'],
      answer: 0
    },
    {
      text: '帶旅客去檢疫櫃檯，通過移民署時，旅客應該走哪個通道？',
      options: ['公務門', 'APEC通道', '一般通道', '不需通過移民署'],
      answer: 2
    },
    {
      text: '如X光旅客將宣導單放在盆子裡，應如何應對？',
      options: [
        '直接放進旅客的袋子',
        '只要拿給旅客就好',
        '口頭宣導',
        '口頭跟旅客確認沒有檢疫物並遞給旅客參考'
      ],
      answer: 3
    },
    {
      text: '4-2噴灑消毒毯時，何者錯誤？',
      options: [
        '靠近手檢區的地毯要噴溼點',
        '靠近發燒站的地毯要噴乾點',
        '面向旅客噴灑',
        '採水柱狀噴灑'
      ],
      answer: 3
    },
    {
      text: '複查排隊時，由哪一位負責搬盆？',
      options: ['分流', '檢查完的最後一位', '該線複一', '該線複二'],
      answer: 1
    },
    {
      text: '檢查時遇到任何問題第一時間應該向誰回報？',
      options: ['該線X光', '組長', '督導', '4線X光'],
      answer: 0
    },
    {
      text: '收音器該由誰配戴？',
      options: ['1-1/2-1', '1-2/2-2', '4X/4-2', '4X/3-2'],
      answer: 2
    }
  ],

  // ===========================
  // 📌 分流考題
  // ===========================


  'work-flow': [
    {
      text: '下列何者為非疫區?',
      options: ['宿霧', '慕尼黑', '新加坡', '清邁'],
      answer: 2
    },
    {
      text: '下列何者為非疫區?',
      options: ['宿霧', '巴黎', '金邊', '清邁'],
      answer: 1
    },
    {
      text: '下列何者為非疫區?',
      options: ['松山', '香港', '金邊', '清邁'],
      answer: 0
    },
    {
      text: '下列何者為非疫區?',
      options: ['仁川', '香港', '金邊', '杜拜'],
      answer: 3
    },
    {
      text: '下列何者不屬於二航的班機?',
      options: ['CI502', 'CX488', 'HX284', 'JX742'],
      answer: 1
    },
    {
      text: '如旅客搭乘CI 191來自釜山，且沒有托運行李應如何引導?',
      options: ['請旅客回一航從一航入境', '直接放行旅客', '禁止旅客入境', '請旅客走紅線手檢後入境'],
      answer: 3
    },
    {
      text: '如旅客搭乘CI 792來自河內，且有托運行李應如何引導?',
      options: ['請旅客回一航從一航入境', '直接放行旅客', '禁止旅客入境', '請旅客走紅線手檢後入境'],
      answer: 0
    },
    {
      text: '如旅客搭乘JX 871來自沖繩，且有托運行李應如何引導?',
      options: ['請旅客回一航從一航入境', '直接放行旅客', '禁止旅客入境', '請旅客走紅線手檢後入境'],
      answer: 0
    },
    {
      text: '如旅客搭乘JX 841來自福岡，且沒有托運行李應如何引導?',
      options: ['請旅客回一航從一航入境', '確認機票後請旅客走綠色通道', '禁止旅客入境', '請旅客走紅線手檢後入境'],
      answer: 1
    },
    {
      text: '旅客出示APEC卡片應如何引導?',
      options: ['直接通關', '根據來源國判斷收卡或手檢', '將旅客帶至航警局', '將旅客帶至轉機櫃檯'],
      answer: 1
    },
    {
      text: '非疫區旅客沒帶識別卡，下列何者正確?',
      options: ['請旅客走紅線手檢', '請旅客出示機票，確認起飛地', '請旅客原路返回，找地勤領取卡片', '直接讓旅客通過綠線'],
      answer: 1
    },
    {
      text: '如旅客持卡不走綠線，想走紅線，何者正確?',
      options: ['走紅線一樣要手檢', '走紅線直接從中間通過', '堅持旅客一定要走綠線', '直接帶旅客到海關'],
      answer: 0
    },
    {
      text: '下列哪一航班機組尖峰時段要抽查?',
      options: ['BR802', 'BR169', 'BR212', '機組全檢'],
      answer: 3
    },
    {
      text: '如未提前通知有貴賓禮遇，以下哪個單位需現場通報主管?',
      options: ['國安局', '航警局', '移民署', '外交部'],
      answer: 2
    },
    {
      text: '如未提前通知有貴賓禮遇，以下哪個單位可直接配合禮遇?',
      options: ['交通部', '移民署', '防檢署', '外交部'],
      answer: 3
    },
    {
      text: '如未提前通知有貴賓禮遇，以下哪個單位可直接配合禮遇?',
      options: ['交通部', '移民署', '防檢署', '國安局'],
      answer: 3
    },
    {
      text: '如未提前通知有貴賓禮遇，以下哪個單位可直接配合禮遇?',
      options: ['交通部', '移民署', '防檢署', '航警局'],
      answer: 3
    },
    {
      text: '請問旅客的行李推車應放行哪一線?',
      options: ['1、2線', '3線', '中間', '請旅客推回去放'],
      answer: 1
    },
    {
      text: '請問單人娃娃車應放行哪一線?',
      options: ['1、2線', '3線', '中間', '4線'],
      answer: 0
    },
    {
      text: '請問單人娃娃車應放行哪一線?',
      options: ['1、2線', '3線', '中間', '4線'],
      answer: 2
    },
    {
      text: '遇到轉機旅客應如何引導?',
      options: ['引導至相應區域的轉機安檢', '請旅客詢問轉機櫃檯', '請旅客詢問移民署', '引導旅客至最近的轉機安檢'],
      answer: 3
    },
    {
      text: '下列何者為「督導」的對講機代號?',
      options: ['洞夭', '洞兩', '洞八', '洞六'],
      answer: 2
    },
    {
      text: '下列何者為「組長」的對講機代號?',
      options: ['洞夭', '洞兩', '洞八', '洞六'],
      answer: 3
    },
    {
      text: '下列何者為「貴賓」的對講機代號?',
      options: ['六六六', '八八八', '兩九五', '拐拐'],
      answer: 1
    },
    {
      text: '下列何者為「中間道旅客」的對講機代號?',
      options: ['六六六', '八八八', '兩九五', '拐拐'],
      answer: 3
    },
    {
      text: '下列何者為「記者」的對講機代號?',
      options: ['六八二', '八八八', '兩九五', '拐拐'],
      answer: 0
    },
    {
      text: '下列何者需進入手檢區?',
      options: ['達克茂', '阿布達比', '阿姆斯特丹', '伊斯坦堡'],
      answer: 0
    },
    {
      text: '如有只有收卡的輪椅在排隊，應如何放行?',
      options: ['一台一台放中間', '全部一起放中間', '分散放123線', '放4線'],
      answer: 1
    },
    {
      text: '如有只有手檢的輪椅在排隊，應如何放行?',
      options: ['一台一台放中間', '全部一起放中間', '分散放123線', '放4線'],
      answer: 0
    },
    {
      text: '如有手檢及收卡的輪椅同時排隊，應如何放行?',
      options: ['一台一台放中間', '全部一起放中間', '分散放123線', '放4線'],
      answer: 0
    },
    {
      text: '如有機場員工帶領來自清邁的貴賓，應如何引導?',
      options: ['員工走綠線，貴賓走紅線', '員工跟貴賓一起走綠線並口頭宣導', '員工可陪同貴賓走紅線', '在分流直接檢查'],
      answer: 2
    },
    {
      text: '如遇到「不配合的拒檢旅客」，分流應如何回報?',
      options: ['旅客拒檢走綠色通道', '請支援帶檢', '請求分流2支援，自行帶檢', '請支援拒檢並說明旅客特徵'],
      answer: 3
    },
    {
      text: '如遇到「願意配合的拒檢旅客」，分流應如何回報?',
      options: ['旅客拒檢走綠色通道', '請支援帶檢', '請求分流2支援，自行帶檢', '請支援拒檢並說明旅客特徵'],
      answer: 1
    },
    {
      text: '分流引導旅客下列何者正確?',
      options: ['一條線塞滿再換一條', '先把3線塞滿再平均分配', '每一線都平均分配', '想分哪裡就分哪裡'],
      answer: 2
    },
    {
      text: '航空公司領卡，下列何者正確?',
      options: ['人來就能換，記得簽名就好', '請地勤自取', '親自點交，一盒空盒換一盒卡', '有空就送去轉機櫃檯'],
      answer: 2
    },
    {
      text: '東方航空的代號為何?',
      options: ['MU', 'MM', 'MF', 'CZ'],
      answer: 0
    },
    {
      text: '南方航空的代號為何?',
      options: ['CI', 'CZ', 'CA', 'ZH'],
      answer: 1
    },
    {
      text: '深圳航空的代號為何?',
      options: ['CI', 'CZ', 'CA', 'ZH'],
      answer: 3
    },
    {
      text: '中國國際航空的代號為何?',
      options: ['CI', 'CZ', 'CA', 'ZH'],
      answer: 2
    },
    {
      text: '山東航空的代號為何?',
      options: ['SQ', 'CZ', 'CA', 'SC'],
      answer: 3
    },
    {
      text: '如持卡旅客的卡片顏色不對，應如何引導?',
      options: ['卡片回收，直接放行旅客', '卡片回收，請旅客走紅線手檢', '卡片回收，請旅客出示機票確認起飛地', '請旅客找地勤換正確的卡片'],
      answer: 2
    },
    {
      text: '下列何者不是「分流二」的工作內容?',
      options: ['支援各線複查', '引導旅客', '協助確認機票', '幫忙攔行李推車'],
      answer: 3
    },
    {
      text: '請問持外交身分證的外交官員應如何引導?',
      options: ['4線', '中間', '紅線', '綠線'],
      answer: 3
    },
    {
      text: '請問已手檢完的旅客去免稅店後再次入境，應如何引導?',
      options: ['再手檢一次', '直接走綠線', '分流直接確認免稅袋', '回報是免稅，請旅客走中間'],
      answer: 1
    },
    {
      text: '分流手機使用方法，下列何者為非?',
      options: ['需與夜班確實交接', '公務機僅供打電話及提供網路給監視器', '分流機可用於查詢航班', '手機可隨意交換位置'],
      answer: 3
    },
    {
      text: '遇到需要走中間道的旅客，下列何者正確?',
      options: ['先開線再回報', '先回報再開線', '邊回報邊開線', '不回報直接開線'],
      answer: 1
    },
    {
      text: '機場員工路過動植物檢疫站，下列何者正確?',
      options: ['若沒開4線，員工可以從4線通過', '跟著旅客一起排隊通過', '自行走中間道或電走道', '走旅客少的線'],
      answer: 2
    },
    {
      text: '若旅客拒檢，下列何者為非?',
      options: ['立刻拍照並打電話給櫃檯告知旅客特徵', '用無線電告知特徵，請同仁跟監', '拒檢就算了，沒關係', '告知旅客應受告示'],
      answer: 2
    },
    {
      text: '什麼情況下屬於「拒檢」，需要同仁跟監?',
      options: ['旅客不想排隊受檢，且拒絕帶檢', '沒有拒檢，所有疫區旅客都要強制受檢', '旅客不想排隊受檢，且口頭確認無檢疫物', '旅客不想排隊受檢，且配合帶檢'],
      answer: 0
    },
    {
      text: '什麼情況下屬於「帶檢」，需要同仁帶檢?',
      options: ['旅客不想排隊受檢，且拒絕帶檢', '沒有拒檢，所有疫區旅客都要強制受檢', '旅客不想排隊受檢，且口頭確認無檢疫物', '旅客不想排隊受檢，且配合帶檢'],
      answer: 3
    },
    {
      text: '若旅客需要帶檢，下列何者為非?',
      options: ['紀錄旅客帶檢的人數', '請旅客稍等，並請同仁陪同旅客執行後續流程', '不願意檢查就算了，沒關係', '告知旅客應受告示'],
      answer: 2
    },
    {
      text: '遇到救護車時，下列何者正確?',
      options: ['遇到救護車一律優先通過', '救護車不可優先通過', '先確認是否有緊急業務，再決定是否優先通過', '遇到立刻通報61999'],
      answer: 2
    },
    {
      text: '下列何者是旅客受傷需通報的電話?',
      options: ['61996', '61997', '61998', '61999'],
      answer: 3
    },
    {
      text: '若旅客眾多，應如何通報檢疫櫃檯?',
      options: ['拍照並打給電話告知檢疫櫃檯：啟動666', '僅拍照給檢疫櫃檯：啟動666', '僅打電話給檢疫櫃檯：啟動666', '親自到檢疫櫃檯告知助理：啟動666'],
      answer: 0
    },
    {
      text: '以下電霸的哪個開關必須每天確認有開啟?',
      options: ['WC', 'RC', 'DC', 'AC'],
      answer: 2
    },
    {
      text: '請問遇到疫區機組應如何引導?',
      options: ['直接問4線', '直接走中間', '請機組走電走道', '先確認各線人數再決定問4線或走中間'],
      answer: 3
    },
    {
      text: '請問有收卡旅客時，免稅店的貨車應走哪線?',
      options: ['綠線', '4線', '紅線', '藍線'],
      answer: 3
    },
    {
      text: '下列何者不是分流換哨下哨應交接的項目?',
      options: ['錄音麥克風', '收到的識別卡', '白色檢疫桶', '有異動的航班'],
      answer: 2
    },
    {
      text: '請問遇到疫區機組拒絕檢查，應如何應對?',
      options: ['請帶檢人員將機組帶至檢疫櫃檯', '宣導完放行即可', '找三位外籍組員抽查', '強硬要求機組受檢'],
      answer: 0
    },
    {
      text: '下列何者是分流基地台的用途?',
      options: ['搜尋航班', '傳訊息給櫃檯', '提供網路給監視器', '查看雷達'],
      answer: 2
    }
  ],

  // ===========================
  // 📌 規定考題
  // ===========================


  'work-rule': [
    {
      text: '請問機場通行證的使用方式，下列何者錯誤?',
      options: [
        '進出公務門務必把門關好',
        '不可外借通行證',
        '應佩掛在腰部以上的明顯處',
        '出國不需繳交'
      ],
      answer: 3
    },
    {
      text: '請問資料繳交時間為何?',
      options: [
        '下午一點以前',
        '下午兩點以前',
        '下午三點以前',
        '下午四點以前'
      ],
      answer: 2
    },
    {
      text: '下列何者為正確的打卡時間?',
      options: [
        '一早來就打卡',
        '7:10',
        '7:13',
        '勤教過後'
      ],
      answer: 1
    },
    {
      text: '下列何者為勤教時間?',
      options: [
        '7:10',
        '7:11',
        '7:12',
        '7:13'
      ],
      answer: 3
    },
    {
      text: '若同仁臨時無法上班需支援出勤，何謂「預排假」需注意的事項?',
      options: [
        '隨時注意訊息',
        '手機關機',
        '拒絕出勤',
        '打電話不接'
      ],
      answer: 0
    },
    {
      text: '請問由哪一哨負責打掃備勤室?',
      options: [
        'A哨',
        'B哨',
        'C哨',
        '主管自己掃'
      ],
      answer: 1
    },
    {
      text: '離開備勤室時，下列何者錯誤?',
      options: [
        '私人物品勿隨意放置',
        '離開時桌面清空',
        '包包有空位就能放，不一定要放置物架',
        '椅子需歸位'
      ],
      answer: 2
    },
    {
      text: '下列何者不是置物櫃的使用規定?',
      options: [
        '可以按照自己喜好貼貼紙布置',
        '有人離職會調整',
        '給予姓名磁鐵(費用25元)',
        '應保持置物櫃內外整潔'
      ],
      answer: 0
    },
    {
      text: '使用微波爐時，下列何者錯誤?',
      options: [
        '用濕衛生紙覆蓋，避免濺射',
        '微波到一半就開門',
        '使用完不用關門',
        '使用微波的同仁眾多，需要排隊'
      ],
      answer: 1
    },
    {
      text: '王小明12/12將食物放進冰箱時，應如何署名?',
      options: [
        '王小明',
        '王 12/12',
        '小明12/12',
        '小明12/13'
      ],
      answer: 2
    },
    {
      text: '若冰箱物品為署名（未署名），下列何者正確?',
      options: [
        '晚上下班前再補上',
        '不會怎樣',
        '沒有名字可以隨便吃',
        '下班打掃同仁會直接拋棄'
      ],
      answer: 3
    },
    {
      text: '制服送洗時間為何?',
      options: [
        '每周一三五 11:00',
        '每周一三五 12:00',
        '每周二四六 11:00',
        '每周二四六 12:00'
      ],
      answer: 0
    },
    {
      text: '若錯過資料繳交時間，隔天休假應該怎麼做?',
      options: [
        '等上班再交',
        '請同仁代為繳交',
        '不用交',
        '超過時間也能交'
      ],
      answer: 1
    },
    {
      text: '哨上有任何異常狀況，應回報給誰?',
      options: [
        '自己解決，不用回報',
        '回報給對應單位',
        '直接打給主任',
        '回報給當日值班主管'
      ],
      answer: 3
    },
    {
      text: '若遲到，7:30以前才抵達，未趕上勤教，下列懲處何者正確?',
      options: [
        '取消次月必休2天',
        '取消次月必休2天選休2天',
        '取消次月必休2天選休4天',
        '取消次月必休2天選休6天'
      ],
      answer: 1
    },
    {
      text: '若遲到，8:00以前才抵達，未趕上勤教，下列懲處何者正確?',
      options: [
        '取消次月必休2天',
        '取消次月必休2天選休2天',
        '取消次月必休2天選休4天',
        '取消次月必休2天選休6天'
      ],
      answer: 2
    },
    {
      text: '若遲到，8:00以後才抵達，未趕上勤教，下列懲處何者正確?',
      options: [
        '取消次月必休2天',
        '取消次月必休2天選休2天',
        '取消次月必休2天選休4天',
        '取消次月必休2天選休6天'
      ],
      answer: 3
    },
    {
      text: '若應到班未到班，下列懲處何者正確?',
      options: [
        '輪值15天的A分流2或是清運，且2個月不得選假',
        '打掃備勤室7天',
        '輪值15天的A分流2或是清運',
        '2個月不得選假'
      ],
      answer: 0
    },
    {
      text: '若臨時無法到班，下列何者正確?',
      options: [
        '只要跟主管說一聲就可以不用到班',
        '直接不用上班就好',
        '自尋代班人員，不須回報',
        '自尋代班人員並回報給當天值班主管'
      ],
      answer: 3
    },
    {
      text: '若需要換假，應如何回報?',
      options: [
        '直接跟主管說哪天要換，讓主管去找人',
        '需要換的人回報',
        '雙方都要回報',
        '幫忙換的人回報'
      ],
      answer: null
    }
  ],


  // ===========================
  // 📌 語言挑戰（英文）
  // ===========================

    'lang-en-quarantine': [
    { text:'請問下列何者是入境的意思?', options:['arrival','airport','apply','arrange'], answer:0 },
    { text:'請問下列何者是轉機的意思?', options:['train','truck','transfer','teacher'], answer:2 },
    { text:'請問下列何者是機票的意思?', options:['passport','boarding pass','passing card','cellphone'], answer:1 },
    { text:'請問下列何者是護照的意思?', options:['bag','pork skin','pineapple','passport'], answer:3 },
    { text:'請問下列何者是手機的意思?', options:['pair','peach','record','phone'], answer:3 },
    { text:'請問下列何者是移民署的意思?', options:['luggage','immigration','important','impossible'], answer:1 },
    { text:'請問下列何者是海關的意思?', options:['customers','cute','custom','convenience'], answer:2 },
    { text:'請問下列何者是直走的意思?', options:['go straight','go out','go inside','google'], answer:0 },
    { text:'請問下列何者是登機門的意思?', options:['gay','guy','grape','gate'], answer:3 },
    { text:'請問下列何者是豬肉的意思?', options:['pork','beef','chicken','duck'], answer:0 },
    { text:'請問下列何者是牛肉的意思?', options:['bee','bag','beef','back'], answer:2 },
    { text:'請問下列何者是雞肉的意思?', options:['check','chicken','cookies','candy'], answer:1 },
    { text:'請問下列何者是肉乾的意思?', options:['juice','meat','sausage','jerky'], answer:3 },
    { text:'請問下列何者是肉鬆的意思?', options:['ham','meat','floss','jerky'], answer:2 },
    { text:'請問下列何者是半熟的意思?', options:['sofa boil','soso boil','sort boil','soft boil'], answer:3 },
    { text:'請問下列何者是全熟的意思?', options:['hard boil','hot boil','hoot boil','huge boil'], answer:0 },
    { text:'請問下列何者是香腸的意思?', options:['ham','jerky','sausage','meat floss'], answer:2 },
    { text:'請問下列何者是火腿的意思?', options:['ham','sausage','floss','jerky'], answer:0 },

    { text:'翻譯題：卡片回收', options:['Retry your card.','Revise your card.','Return your card.'], answer:2 },
    { text:'翻譯題：你可以拿著你的手機', options:[
        'You can keep your bag.',
        'You can keep your phone.',
        'You can keep your water.'
      ], answer:1 },
    { text:'翻譯題：請確認沒有肉製品、新鮮水果和蔬菜，謝謝', options:[
        'Please make sure no meat products, fresh fruits and vegetable. Thank you.',
        'Please make sure no computer, phone and chargers. Thank you.',
        'Please make sure no passing card and boarding pass. Thank you.'
      ], answer:0 },
    { text:'翻譯題：因為車來了，請到這邊稍等', options:[
        'Because car is coming, please keep going.',
        'Because car is coming, please wait here.',
        'Because car is coming, please go back.'
      ], answer:1 },
    { text:'翻譯題：請問哪裡需要幫忙嗎?', options:[
        'How old are you?',
        'How can I help you?',
        'How dare you are?'
      ], answer:1 },
    { text:'翻譯題：轉機還是入境?', options:[
        'Go in or go out?',
        'Taiwan or no Taiwan?',
        'Transfer or arrival?'
      ], answer:2 },
    { text:'翻譯題：直走到底左轉', options:[
        'Go straight and turn left.',
        'Go straight and turn right.',
        'Go straight and turn around.'
      ], answer:0 },
    { text:'翻譯題：直走到底右轉', options:[
        'Go straight and turn left.',
        'Go straight and turn right.',
        'Go straight and turn around.'
      ], answer:1 },
    { text:'翻譯題：May I check your boarding pass?', options:[
        '我可以確認你的行李嗎?',
        '我可以確認你的食物嗎?',
        '我可以確認你的機票嗎?'
      ], answer:2 },
    { text:'翻譯題：You can pick it up.', options:[
        '你可以往前了',
        '請打開',
        '你可以拿走了'
      ], answer:2 },
    { text:'翻譯題：No picture here, please delete the photos.', options:[
        '這裡不能拍照，請把照片刪除',
        '這裡不能睡覺，請你往前走',
        '這裡不能吃東西，請你往回走'
      ], answer:0 },
    { text:'翻譯題：Only one person stay here.', options:[
        '只要一個人留下來就好',
        '只要沒有肉就好',
        '只要包包留下就好'
      ], answer:0 },
    { text:'翻譯題：See the bank and turn left.', options:[
        '看到銀行右轉',
        '看到銀行左轉',
        '看到銀行直行'
      ], answer:1 },
    { text:'翻譯題：Do you need an ambulance?', options:[
        '請問需要幫忙嗎?',
        '請問需要擁抱嗎?',
        '請問需要救護車嗎?'
      ], answer:2 },
    { text:'翻譯題：Please wait behind the line.', options:[
        '請到登機門稍等',
        '請在線後稍等',
        '請在最後一張桌子稍等'
      ], answer:1 },
    { text:'翻譯題：Open please.', options:[
        '請安靜',
        '請往前',
        '請打開'
      ], answer:2 }
  ],
  
      'lang-en-beginner': [
    { text:'「狗」的英文單字，下列何者正確？', options:['dig','dog','dug','dag'], answer:1 },
    { text:'「貓」的英文單字，下列何者正確？', options:['cat','cut','cot','cap'], answer:0 },
    { text:'「蘋果」的英文單字，下列何者正確？', options:['apply','ample','apple','ape'], answer:2 },
    { text:'「老師」的英文單字，下列何者正確？', options:['teacher','teach','teaching','taught'], answer:0 },
    { text:'「學生」的英文單字，下列何者正確？', options:['study','student','studying','studied'], answer:1 },
    { text:'「桌子」的英文單字，下列何者正確？', options:['able','label','table','cable'], answer:2 },
    { text:'「椅子」的英文單字，下列何者正確？', options:['sit','city','sheet','chair'], answer:3 },
    { text:'「鞋子」的英文單字，下列何者正確？', options:['shoes','shoos','shows','shots'], answer:0 },
    { text:'「褲子」的英文單字，下列何者正確？', options:['shirt','pants','socks','skirt'], answer:1 },
    { text:'「眼睛」的英文單字，下列何者正確？', options:['ears','nose','eyes','face'], answer:2 },
    { text:'「嘴巴」的英文單字，下列何者正確？', options:['mouse','month','mount','mouth'], answer:3 },
    { text:'「耳朵」的英文單字，下列何者正確？', options:['ears','eyes','aems','hair'], answer:0 },
    { text:'「跑步」的英文單字，下列何者正確？', options:['rom','run','raw','red'], answer:1 },
    { text:'「游泳」的英文單字，下列何者正確？', options:['swing','swimming','stream','sweet'], answer:1 },
    { text:'「吃」的英文單字，下列何者正確？', options:['eat','wet','fat','bit'], answer:0 },
    { text:'「喝」的英文單字，下列何者正確？', options:['drank','drink','drunk','dream'], answer:1 },
    { text:'「睡覺」的英文單字，下列何者正確？', options:['swipe','slip','slape','sleep'], answer:3 },
    { text:'「早上」的英文單字，下列何者正確？', options:['morning','evening','night','noon'], answer:0 },
    { text:'「晚上」的英文單字，下列何者正確？', options:['noon','eveing','morning','night'], answer:3 },
    { text:'「紅色」的英文單字，下列何者正確？', options:['read','road','red','rid'], answer:2 },
    { text:'「藍色」的英文單字，下列何者正確？', options:['blue','blew','blow','blur'], answer:0 },
    { text:'「大的」的英文單字，下列何者正確？', options:['tall','long','fat','big'], answer:3 },
    { text:'「小的」的英文單字，下列何者正確？', options:['short','small','light','thin'], answer:1 },
    { text:'「快樂的」的英文單字，下列何者正確？', options:['happy','angry','hungry','heavy'], answer:0 },
    { text:'「生氣的」的英文單字，下列何者正確？', options:['sad','tired','angry','scary'], answer:2 },
    { text:'「餓的」的英文單字，下列何者正確？', options:['furry','dirty','thirsty','hungry'], answer:3 },
    { text:'「冷的」的英文單字，下列何者正確？', options:['cool','cold','warm','hot'], answer:1 },
    { text:'「熱的」的英文單字，下列何者正確？', options:['hot','hit','heat','hate'], answer:0 },
    { text:'「雨」的英文單字，下列何者正確？', options:['ran','wet','rain','snow'], answer:2 },
    { text:'「太陽」的英文單字，下列何者正確？', options:['son','soon','shine','sun'], answer:3 },
    { text:'「月亮」的英文單字，下列何者正確？', options:['moon','month','noon','mood'], answer:0 },
    { text:'「水」的英文單字，下列何者正確？', options:['wait','water','web','wave'], answer:1 },
    { text:'「牛奶」的英文單字，下列何者正確？', options:['meat','meet','milk','mike'], answer:2 },
    { text:'「飯」的英文單字，下列何者正確？', options:['rise','rose','race','rice'], answer:3 },
    { text:'「朋友」的英文單字，下列何者正確？', options:['friend','father','family','funny'], answer:0 },
    { text:'「家人」的英文單字，下列何者正確？', options:['home','house','family','friend'], answer:2 },
    { text:'「學校」的英文單字，下列何者正確？', options:['scoop','school','strike','scape'], answer:1 },
    { text:'「教室」的英文單字，下列何者正確？', options:['classic','classmate','clamp','classroom'], answer:3 },
    { text:'「作業」的英文單字，下列何者正確？', options:['homework','housework','work','job'], answer:0 },
    { text:'「星期一」的英文單字，下列何者正確？', options:['Sunday','Monday','Friday','May'], answer:1 },
    { text:'「今天」的英文單字，下列何者正確？', options:['tomorrow','yesterday','today','tonight'], answer:2 },
    { text:'「明天」的英文單字，下列何者正確？', options:['tomorrow','today','tonight','borrow'], answer:0 },
    { text:'「昨天」的英文單字，下列何者正確？', options:['today','tomorrow','tonight','yesterday'], answer:3 },
    { text:'「走路」的英文單字，下列何者正確？', options:['work','walk','wood','wake'], answer:1 },
    { text:'「開車」的英文單字，下列何者正確？', options:['ride','bike','drive','drop'], answer:2 },
    { text:'「看」的英文單字，下列何者正確？', options:['see','sea','seed','sod'], answer:0 },
    { text:'「聽」的英文單字，下列何者正確？', options:['stop','hard','speak','listen'], answer:3 },
    { text:'「說話」的英文單字，下列何者正確？', options:['tall','speak','saw','tool'], answer:1 },
    { text:'「寫」的英文單字，下列何者正確？', options:['read','draw','write','right'], answer:2 },
    { text:'「書」的英文單字，下列何者正確？', options:['look','boot','cook','book'], answer:3 },

    { text:'填空題：I am very ___. I want to eat lunch.', options:['tired','hungry','happy','tall'], answer:1 },
    { text:'填空題：My father goes to work by ___.', options:['bed','school','car','food'], answer:2 },
    { text:'填空題：The sun is in the ___.', options:['night','laughing','sky','water'], answer:2 },
    { text:'填空題：She drinks a glass of ___.', options:['rice','milk','bread','egg'], answer:1 },
    { text:'填空題：I do my homework at ___.', options:['home','park','zoo','shop'], answer:0 },
    { text:'填空題：A dog is an ___.', options:['fruit','animal','toy','color'], answer:1 },
    { text:'填空題：We go to school from Monday to ___.', options:['Sunday','Friday','Saturday','holiday'], answer:1 },
    { text:'填空題：It is very ___. Please wear a coat.', options:['hot','cold','fast','easy'], answer:1 },
    { text:'填空題：My sister is ten years ___.', options:['tall','old','big','young'], answer:1 },
    { text:'填空題：I like to play ___.', options:['basketball','breakfast','homework','window'], answer:0 },
    { text:'填空題：The boy has two ___.', options:['healthy','hands','healing','hear'], answer:1 },
    { text:'填空題：We eat dinner in the ___.', options:['morning','afternoon','evening','midnight'], answer:2 },
    { text:'填空題：She ___　music every day.', options:['listens','listens to','listen','listening'], answer:1 },
    { text:'填空題：I wear shoes on my ___.', options:['head','hands','feet','eyes'], answer:2 },
    { text:'填空題：My mother cooks in the ___.', options:['bedroom','bathroom','kitchen','classroom'], answer:2 },
    { text:'填空題：The apple is ___.', options:['sweet','swim','jump','run'], answer:0 },
    { text:'填空題：We use a ___ to write.', options:['chair','door','cup','pen'], answer:3 },
    { text:'填空題：He is my best ___.', options:['friend','food','bag','room'], answer:0 },
    { text:'填空題：I see with my ___.', options:['ears','eyes','nose','mouth'], answer:1 },
    { text:'填空題：Today is my birthday. I am very ___.', options:['sad','angry','happy','tired'], answer:2 },
    { text:'填空題：She ___ a student.', options:['am','is','are','do'], answer:1 },
    { text:'填空題：They ___ soccer after school.', options:['plays','play','played','playing'], answer:1 },
    { text:'填空題：I ___ TV now.', options:['watch','watches','am watching','watched'], answer:2 },
    { text:'填空題：He ___ to school every day.', options:['go','goes','going','went'], answer:1 },
    { text:'填空題：We ___ lunch at 12 a.m..', options:['eats','eat','eating','ate'], ansdower:1 },
    { text:'填空題：___ you like apples?', options:['Are','Do','Does','Did'], answer:1 },
    { text:'填空題：She ___ my sister.', options:['am','is','my','do'], answer:1 },
    { text:'填空題：Tom ___　a book yesterday.', options:['read','reads','is reading','reading'], answer:0 },
    { text:'填空題：My father ___ at home now.', options:['is','are','am','be'], answer:0 },
    { text:'填空題：I ___ like milk.', options:['am not','not','do not','does not'], answer:2 },
    { text:'填空題：They ___ in Taipei.', options:['lives','live','living','lived'], answer:1 },
    { text:'填空題：___ she your teacher?', options:['Am','Are','Is','Do'], answer:2 },
    { text:'填空題：I ___ my homework eveyday.', options:['do','did','does','doing'], answer:0 },
    { text:'填空題：We ___ to the park last Sunday.', options:['go','goes','went','going'], answer:2 },
    { text:'填空題：He ___ a pen in his bag.', options:['have','has','had','having'], answer:1 },
    { text:'填空題：She ___ happy today.', options:['look','looks','looking','looked'], answer:1 },
    { text:'填空題：___ you hungry?', options:['Is','Are','Do','Does'], answer:1 },
    { text:'填空題：My brother ___ nine years old.', options:['am','is','are','be'], answer:1 },
    { text:'填空題：I ___ English after school.', options:['study','studies','studying','studied'], answer:0 },
    { text:'填空題：They ___ friends.', options:['am','is','are','be'], answer:2 },
    { text:'填空題：I ___ a pencil in my bag.', options:['have','has','having','had'], answer:0 },
    { text:'填空題：She ___ to school by bus.', options:['go','goes','going','went'], answer:1 },
    { text:'填空題：We ___ English now.', options:['study','studies','are studying','studied'], answer:2 },
    { text:'填空題：Tom and I ___ classmates.', options:['am','is','are','be'], answer:2 },
    { text:'填空題：My mother ___ dinner every day.', options:['cook','cooks','cooking','cooked'], answer:1 },
    { text:'填空題：___ he like dogs?', options:['Do','Are','Does','Is'], answer:2 },
    { text:'填空題：I ___ to music after school.', options:['listen','listens','listening','listened'], answer:0 },
    { text:'填空題：She ___ my best friend.', options:['am','is','are','be'], answer:1 },
    { text:'填空題：They ___ TV last night.', options:['watch','watches','watching','watched'], answer:3 },
    { text:'填空題：We ___ breakfast at 7 a.m..', options:['eat','eats','eating','ate'], answer:0 },
    { text:'填空題：My father ___ at work now.', options:['is','are','am','be'], answer:0 },
    { text:'填空題：I ___ milk every morning.', options:['drink','drinks','drinking','drank'], answer:0 },
    { text:'填空題：___ you a student?', options:['Do','Are','Does','Is'], answer:1 },
    { text:'填空題：She ___ her homework in the evening.', options:['do','does','doing','did'], answer:1 },
    { text:'填空題：We ___ to the zoo yesterday.', options:['go','goes','went','going'], answer:2 },
    { text:'填空題：My brother ___ soccer after school.', options:['plays','play','playing','played'], answer:0 },
    { text:'填空題：I ___ happy today.', options:['feels','feeling','felt','feel'], answer:3 },
    { text:'填空題：They ___ in the classroom now.', options:['sit','sits','are sitting','sat'], answer:2 },
    { text:'填空題：She ___ a book before sleeping.', options:['read','reads','reading','readed'], answer:1 },
    { text:'填空題：We buy ice creams before ___ home.', options:['go','goes','gone','going'], answer:3 },
    { text:'填空題：I get up ___ 7:00.', options:['in','on','at','to'], answer:2 },
    { text:'填空題：The cat is ___ the table', options:['in','on','at','to'], answer:1 },
    { text:'填空題：I go to school ___ walk.', options:['by','with','on','at'], answer:0 },
    { text:'填空題：She is ___ the classroom.', options:['at','in','on','to'], answer:1 },
    { text:'填空題：We eat lunch ___ noon.', options:['in','on','at','to'], answer:2 },
    { text:'填空題：He sits ___ me.', options:['next','next to','near to ','close'], answer:1 },
    { text:'填空題：I like apples ___ bananas.', options:['but','because','and','so'], answer:2 },
    { text:'填空題：She is tired ___ she studies a lot.', options:['and','but','because','or'], answer:2 },
    { text:'填空題：He is ___ than me.', options:['tall','tller','tallest','more tall'], answer:1 },
    { text:'填空題：This book is ___ than that one.', options:['cheap','cheaper','cheapest','more cheap'], answer:1 }
  ],

    'lang-en-middle': [
    { text:'「感染的」的英文單字，下列何者正確？', options:['infecting','informative','inflation','innovational'], answer:0 },
    { text:'「有教育價值的」的英文單字，下列何者正確？', options:['illogical','informative','inappropriate','indicative'], answer:1 },
    { text:'「令人厭煩的」的英文單字，下列何者正確？', options:['absentminded','accountable','annoying','abrasive'], answer:2 },
    { text:'「車輛」的英文單字，下列何者正確？', options:['vendor','voucher','vessel','vehicle'], answer:3 },
    { text:'「預定」的英文單字，下列何者正確？', options:['renovation','reservation','revelation','representation'], answer:1 },
    { text:'「有限的」的英文單字，下列何者正確？', options:['restricted','revised','received','republic'], answer:0 },
    { text:'「犧牲的」的英文單字，下列何者正確？', options:['satisfied','suspended','selected','sacrificed'], answer:3 },
    { text:'「辯論」的英文單字，下列何者正確？', options:['debate','detector','defeat','duress'], answer:1 },
    { text:'「容量」的英文單字，下列何者正確？', options:['ability','responsibility','capacity','efficiency'], answer:2 },
    { text:'「勤勞的」的英文單字，下列何者正確？', options:['believable','generous','industrial','industrious'], answer:3 },
    { text:'「工業的」的英文單字，下列何者正確？', options:['industrial','industrious','international','inept'], answer:0 },
    { text:'「穀物」的英文單字，下列何者正確？', options:['gain','gossip','grain','grade'], answer:2 },
    { text:'「纖維」的英文單字，下列何者正確？', options:['fiction','fiber','fabrication','fascination'], answer:1 },
    { text:'「腸子」的英文單字，下列何者正確？', options:['bowl','bowel','blunder','bust'], answer:1 },
    { text:'「紀錄」的英文單字，下列何者正確？', options:['record','roller','revive','receive'], answer:0 },
    { text:'「時期」的英文單字，下列何者正確？', options:['promote','punctual','premises','period'], answer:3 },
    { text:'「不可缺的」的英文單字，下列何者正確？', options:['impossible','independent','indispensable','inwrapt'], answer:2 },
    { text:'「申請」的英文單字，下列何者正確？', options:['application','adoption','adaption','announcement'], answer:0 },
    { text:'「有禮貌的」的英文單字，下列何者正確？', options:['caesious','courteous','convenience','casual'], answer:1 },
    { text:'「熱烈的」的英文單字，下列何者正確？', options:['passionate','prohibition','pension','prominent'], answer:0 },
    { text:'「國境/邊境」的英文單字，下列何者正確？', options:['credibility','blur','boundary','frontier'], answer:3 },
    { text:'「和諧」的英文單字，下列何者正確？', options:['humidity','hesitation','harmony','heritage'], answer:2 },
    { text:'「嚴厲的/精確的」的英文單字，下列何者正確？', options:['stick','stick','strict','seminar'], answer:2 },
    { text:'「貢獻」的英文單字，下列何者正確？', options:['contribute','consider','conquer','connect'], answer:0 },
    { text:'「排練」的英文單字，下列何者正確？', options:['recurrence','refreshment','reference','rehearsal'], answer:3 },
    { text:'「比較」的英文單字，下列何者正確？', options:['competition','completion','construction','comparison'], answer:3 },
    { text:'「凝視」的英文單字，下列何者正確？', options:['start','stare','sculpt','spread'], answer:1 },
    { text:'「獎品」的英文單字，下列何者正確？', options:['award','forward','sword','swear'], answer:0 },
    { text:'「造反」的英文單字，下列何者正確？', options:['label','redfin','rebel','liquor'], answer:2 },
    { text:'「耐心」的英文單字，下列何者正確？', options:['passion','patience','paction','promotion'], answer:1 },
    { text:'「成分」的英文單字，下列何者正確？', options:['information','introduction','instruction','ingredient'], answer:3 },
    { text:'「分類」的英文單字，下列何者正確？', options:['classify','conference','consequence','consideration'], answer:0 },
    { text:'「冒犯的」的英文單字，下列何者正確？', options:['effective','offensive','defensive','infective'], answer:1 },
    { text:'「空閒的」的英文單字，下列何者正確？', options:['letter','later','leisure','lessen'], answer:2 },
    { text:'「適應」的英文單字，下列何者正確？', options:['announcement','apartment','additament','accommodation'], answer:3 },
    { text:'「臨時的」的英文單字，下列何者正確？', options:['temperature','atmosphere','temple','temporary'], answer:3 },
    { text:'「征服」的英文單字，下列何者正確？', options:['consequence','conquer','obey','condition'], answer:1 },
    { text:'「可疑的」的英文單字，下列何者正確？', options:['suspect','inspect','dissect','respect'], answer:0 },
    { text:'「繁榮的」的英文單字，下列何者正確？', options:['proposal','professional','prosperous','previous'], answer:2 },
    { text:'「環境」的英文單字，下列何者正確？', options:['equipment','environment','government','development'], answer:1 },
    { text:'「允許」的英文單字，下列何者正確？', options:['defecation','confutation','reaction','permission'], answer:3 },
    { text:'「詢問」的英文單字，下列何者正確？', options:['inquiry','injure','inject','indeed'], answer:0 },
    { text:'「緩和」的英文單字，下列何者正確？', options:['release','reduce','reject','relieve'], answer:3 },
    { text:'「得意」的英文單字，下列何者正確？', options:['pirate','price','pride','provide'], answer:2 },
    { text:'「基礎的」的英文單字，下列何者正確？', options:['additional','fundamental','declinational','recreational'], answer:1 },
    { text:'「擴展」的英文單字，下列何者正確？', options:['expansion','expansive','experience','expedition'], answer:0 },
    { text:'「淹沒」的英文單字，下列何者正確？', options:['drunk','draw','drown','down'], answer:2 },
    { text:'「賞識」的英文單字，下列何者正確？', options:['appreciation','appropriate','engagement','preparation'], answer:0 },
    { text:'「溫柔的」的英文單字，下列何者正確？', options:['gender','banner','folder','tender'], answer:3 },
    { text:'「素食的」的英文單字，下列何者正確？', options:['investor','vegetarian','phycologist','scientist'], answer:1 },


    { text:'填空題：My mother ___ to go back to the restaurant because of the waiter's rude manner.', options:['assumes','predicts','interrupts','refuses'], answer:3 },
    { text:'填空題：Cabbages were on sale, so I bought five. I paid one hundred dollars ___ .', options:['indeed','cetera','somehow','altogether'], answer:3 },
    { text:'填空題：Elle's parents are quite ___ with her pocket money, which is why she can afford an expensive cellphone.', options:['frequent','wealthy','generous','moderate'], answer:2 },
    { text:'填空題：Anyone wanting to climb Mount Jade has to obtain a ___ before they are allowed to enter the area.', options:['permit','request','charm','method'], answer:0 },
    { text:'填空題：Don't give up! Keep trying and you will ___ succeed.', options:['particularly','eventually','relatively','nearly'], answer:1 },
    { text:'填空題：A well-developed plot is always an ___ element of a great movie.', options:['amateur','essential','organic','equivalent'], answer:0 },
    { text:'填空題：Sore throats, headaches, fevers, and chills are common ___ of flu.', options:['symptoms','conditions','definitions','alternatives'], answer:0 },
    { text:'填空題：Liz has been studying ___ lately because she is thinking of applying for a scholarship.', options:['in a hurry','around the clock','out of order','at best'], answer:1 },
    { text:'填空題：William felt very excited when he ___ his favorite baseball player at a shopping mall yesterday.', options:['moved on','filled in','turned up','ran into'], answer:3 },
    { text:'填空題：Generally speaking, dogs ___ to new surroundings much faster than cats.', options:['intend','oppose','adapt','confine'], answer:2 },
    { text:'填空題：The first Sherlock Holmes story ___ by a doctor named Arthur Conan Doyle in 1886.', options:['wrote','written','was written','being written'], answer:2 },
    { text:'填空題：In the four years from 1989 to 1992, the gross national product ___ by an average of over 10% per year.', options:['falls','fell','is falling','will all'], answer:1 },
    { text:'填空題：The original frame, which was made of gold, was soon ___ a marble one before it could be stolen.', options:['put in','held on','replaced with','moved in'], answer:2 },
    { text:'填空題：The architect of the new five-star hotel received several awards of her ___ design.', options:['elegant','opposite','admiring','courteous'], answer:0 },
    { text:'填空題：Until recently it had been generally accepted that one of the greatest milestones in human history was the ___ of an agricultural lifestyle.', options:['excitement','interest','adoption','devotion'], answer:2 },
    { text:'填空題：Only by making fundamental changes will it ___ possible to bring the crisis to a close.', options:['but also','may be','then','be'], answer:3 },
    { text:'填空題：Even though the television networks claim there has been ___ in the number of children watching television, research shows that children are actually watching more than before.', options:['a decrease','a growth','an impact','a trend'], answer:0 },
    { text:'填空題：If you wanted to get students excited about the subject, you could take some time to plan some field trips that would really ___ .', options:['bring them up','turn them on','fill them out','make them up'], answer:1 },
    { text:'填空題：The pilot will stay away from work next week ___ a new agreement with the airline company can be signed.', options:['whether','except','once','unless'], answer:3 },
    { text:'填空題：___ someone oppose abortion for reasons of faith, he may be criticized for imposing his religious beliefs on others.', options:['Might','Could','Should','Would'], answer:2 },
    { text:'填空題：After the police arrive, they will begin to interview the people who ___ in the jewelry store at the time of the robbery.', options:['have been','will be','were','are'], answer:2 },
    { text:'填空題：The city government ___ to build a new sports stadium in preparation for the coming Olympics.', options:['is going to plan','which plans','is planning','planning'], answer:2 },
    { text:'填空題：New computer technology has ___ changed the way Hollywood movies are made.', options:['sincerely','dramatically','idly','greedily'], answer:1 },
    { text:'填空題：This proposal for a new high speed train ___ because the cost is too high.', options:['rejected','has rejected','had been rejected','will be rejected'], answer:3 },
    { text:'填空題：___ many desirable qualities which make it a commercially very useful metal.', options:['Aluminum has','That aluminum has','Aluminum having','Aluminum to have'], answer:0 },
    { text:'填空題：Ms. Chen ___ her position as the new conductor of the National Orchestra only a few weeks before the fall concert season began.', options:['picked out','bent over','took up','drove down'], answer:2 },
    { text:'填空題：So far this year four typhoons-two of them very strong ___ southern Taiwan.', options:['were striking','will strike','have been struck','have struck'], answer:3 },
    { text:'填空題：Depending on the ___ he is in, the boss will either thank you for our suggestion or fire you for criticizing his plan.', options:['emotion','behavior','mood','attitude'], answer:2 },
    { text:'填空題：If a typist wishes to type rapidly, he ___ develop a rhythmic movement of his fingers.', options:['used to','must','would','had to'], answer:1 },
    { text:'填空題：During the experiment, a constant temperature of 28°C was     while the amount of sunlight was gradually increased.', options:['maintained','performed','continued','expanded'], answer:0 }
  ],




  // ===========================
  // 📌 語言挑戰（韓文）
  // ===========================

  'lang-kr-quarantine': [
    { text:'다음 중 검역 대상은?', options:['물','과일','책','티켓'], answer:1 },
    { text:'이 물건은 허용됩니까?', image:'images/sample-meat.jpg', options:['예','아니오','모름','직원 호출'], answer:1 },
    { text:'검역 품목을 고르세요', options:[
      '<img src="images/opt-fruit.jpg"> 과일','<img src="images/opt-shirt.jpg"> 옷',
      '<img src="images/opt-book.jpg"> 책','<img src="images/opt-water.jpg"> 물'], answer:0 },
    { text:'이 사진의 분류는?', image:'images/sample-fruit.jpg',
      options:['<img src="images/opt-ok.jpg"> 안전','<img src="images/opt-ng.jpg"> 검역 대상',
               '<img src="images/opt-idk.jpg"> 모름','<img src="images/opt-tool.jpg"> 도구'], answer:1 }
  ],

  'lang-kr-beginner': [
    { text:'"사과"는 무엇입니까?', options:['사과','고기','책','신발'], answer:0 },
    { text:'이것은 무엇입니까?', image:'images/sample-dog.jpg', options:['개','고양이','새','물고기'], answer:0 },
    { text:'이미지에 해당하는 단어는?', options:[
      '<img src="images/opt-cat.jpg"> 고양이','<img src="images/opt-dog.jpg"> 개',
      '<img src="images/opt-bird.jpg"> 새','<img src="images/opt-fish.jpg"> 물고기'], answer:1 },
    { text:'이 사진의 동물은?', image:'images/sample-cat.jpg',
      options:['<img src="images/opt-cat.jpg"> 고양이','<img src="images/opt-dog.jpg"> 개',
               '<img src="images/opt-fish.jpg"> 물고기','<img src="images/opt-bird.jpg"> 새'], answer:0 }
  ],

  'lang-kr-middle': [
    { text:'"금지"와 가까운 의미는?', options:['허용','금지','천천히','노력'], answer:1 },
    { text:'이것은 위험합니까?', image:'images/sample-meat.jpg', options:['예','아니오','모름','아니'], answer:0 },
    { text:'경고 표시는 무엇입니까?', options:[
      '<img src="images/opt-warn.jpg"> 경고','<img src="images/opt-ok.jpg"> 승인',
      '<img src="images/opt-safe.jpg"> 안전','<img src="images/opt-tool.jpg"> 도구'], answer:0 },
    { text:'이 표시는 무엇입니까?', image:'images/opt-ng.jpg',
      options:['<img src="images/opt-ng.jpg"> 금지','<img src="images/opt-ok.jpg"> 승인',
               '<img src="images/opt-warn.jpg"> 경고','<img src="images/opt-idk.jpg"> 모름'], answer:0 }
  ],

  'lang-kr-advanced': [
    { text:'"정밀 검사"에 가장 가까운 표현은?', options:['대충 검사','정밀 검사','무시','느리게'], answer:1 },
    { text:'신고가 필요한가요?', image:'images/sample-fruit.jpg', options:['예','아니오','선택','모름'], answer:0 },
    { text:'금지 품목을 고르세요', options:[
      '<img src="images/opt-shirt.jpg"> 옷','<img src="images/opt-water.jpg"> 물',
      '<img src="images/opt-meat.jpg"> 고기','<img src="images/opt-toy.jpg"> 장난감'], answer:2 },
    { text:'사진의 분류는?', image:'images/sample-raw.jpg',
      options:['<img src="images/opt-ok.jpg"> 허용','<img src="images/opt-ng.jpg"> 금지',
               '<img src="images/opt-warn.jpg"> 주의','<img src="images/opt-idk.jpg"> 모름'], answer:1 }
  ],

  // ===========================
  // 📌 語言挑戰（越南語）
  // ===========================

  'lang-vn-quarantine': [
    { text:'Món nào là vật kiểm dịch?', options:['nước','trái cây tươi','vé','sách'], answer:1 },
    { text:'Vật này có bị cấm không?', image:'images/sample-meat.jpg', options:['Có','Không','Không chắc','Hỏi nhân viên'], answer:0 },
    { text:'Chọn vật kiểm dịch', options:[
      '<img src="images/opt-fruit.jpg"> trái cây','<img src="images/opt-book.jpg"> sách',
      '<img src="images/opt-shirt.jpg"> áo','<img src="images/opt-water.jpg"> nước'], answer:0 },
    { text:'Phân loại vật phẩm', image:'images/sample-fruit.jpg',
      options:['<img src="images/opt-ok.jpg"> an toàn','<img src="images/opt-ng.jpg"> kiểm dịch',
               '<img src="images/opt-idk.jpg"> không chắc','<img src="images/opt-tool.jpg"> dụng cụ'], answer:1 }
  ],

  'lang-vn-beginner': [
    { text:'“trái cây” nghĩa là gì?', options:['fruit','meat','bag','paper'], answer:0 },
    { text:'Đây là con gì?', image:'images/sample-dog.jpg', options:['chó','mèo','chim','cá'], answer:0 },
    { text:'Chọn hình đúng:', options:[
      '<img src="images/opt-dog.jpg"> chó','<img src="images/opt-cat.jpg"> mèo',
      '<img src="images/opt-bird.jpg"> chim','<img src="images/opt-fish.jpg"> cá'], answer:0 },
    { text:'Đây là gì?', image:'images/sample-cat.jpg',
      options:['<img src="images/opt-cat.jpg"> mèo','<img src="images/opt-dog.jpg"> chó',
               '<img src="images/opt-fish.jpg"> cá','<img src="images/opt-bird.jpg"> chim'], answer:0 }
  ],

  'lang-vn-middle': [
    { text:'Từ nào gần nghĩa “cấm”?', options:['cho phép','cấm','an toàn','chậm'], answer:1 },
    { text:'Vật này nguy hiểm?', image:'images/sample-meat.jpg', options:['Có','Không','Không chắc','Không'], answer:0 },
    { text:'Chọn biển cảnh báo', options:[
      '<img src="images/opt-warn.jpg"> cảnh báo','<img src="images/opt-ok.jpg"> ok',
      '<img src="images/opt-safe.jpg"> an toàn','<img src="images/opt-tool.jpg"> dụng cụ'], answer:0 },
    { text:'Biển báo này nghĩa là gì?', image:'images/opt-ng.jpg',
      options:['<img src="images/opt-ng.jpg"> cấm','<img src="images/opt-ok.jpg"> cho phép',
               '<img src="images/opt-warn.jpg"> cảnh báo','<img src="images/opt-idk.jpg"> không chắc'], answer:0 }
  ],

  'lang-vn-advanced': [
    { text:'Cụm từ nghĩa “kiểm tra nghiêm ngặt”?', options:['nhẹ','nghiêm ngặt','ngẫu nhiên','bỏ qua'], answer:1 },
    { text:'Có cần khai báo không?', image:'images/sample-fruit.jpg', options:['Có','Không','tùy chọn','không biết'], answer:0 },
    { text:'Chọn vật cấm', options:[
      '<img src="images/opt-shirt.jpg"> áo','<img src="images/opt-water.jpg"> nước',
      '<img src="images/opt-meat.jpg"> thịt','<img src="images/opt-toy.jpg"> đồ chơi'], answer:2 },
    { text:'Phân loại vật phẩm', image:'images/sample-raw.jpg',
      options:['<img src="images/opt-ok.jpg"> cho phép','<img src="images/opt-ng.jpg"> cấm',
               '<img src="images/opt-warn.jpg"> cảnh báo','<img src="images/opt-idk.jpg"> không chắc'], answer:1 }
  ],

  // ===========================
  // 📌 語言挑戰（日語）
  // ===========================

  'lang-jp-quarantine': [
    { text:'検疫対象となるものはどれ？', options:['水','果物','本','チケット'], answer:1 },
    { text:'これは申告が必要ですか？', image:'images/sample-meat.jpg', options:['はい','いいえ','不明','スタッフ呼ぶ'], answer:0 },
    { text:'検疫物を選んでください', options:[
      '<img src="images/opt-fruit.jpg"> 果物','<img src="images/opt-book.jpg"> 本',
      '<img src="images/opt-shirt.jpg"> 服','<img src="images/opt-water.jpg"> 水'], answer:0 },
    { text:'分類してください', image:'images/sample-fruit.jpg',
      options:['<img src="images/opt-ok.jpg"> 安全','<img src="images/opt-ng.jpg"> 検疫対象',
               '<img src="images/opt-idk.jpg"> 不明','<img src="images/opt-tool.jpg"> 道具'], answer:1 }
  ],

  'lang-jp-beginner': [
    { text:'「りんご」はどれ？', options:['りんご','にく','ふく','みず'], answer:0 },
    { text:'これは何？', image:'images/sample-dog.jpg', options:['いぬ','ねこ','とり','さかな'], answer:0 },
    { text:'正しい画像を選んで', options:[
      '<img src="images/opt-dog.jpg"> いぬ','<img src="images/opt-cat.jpg"> ねこ',
      '<img src="images/opt-bird.jpg"> とり','<img src="images/opt-fish.jpg"> さかな'], answer:0 },
    { text:'これはどれ？', image:'images/sample-cat.jpg',
      options:['<img src="images/opt-cat.jpg"> ねこ','<img src="images/opt-dog.jpg"> いぬ',
               '<img src="images/opt-bird.jpg"> とり','<img src="images/opt-fish.jpg"> さかな'], answer:0 }
  ],

  'lang-jp-middle': [
    { text:'「禁止」と近い意味は？', options:['許可','禁止','安全','ゆっくり'], answer:1 },
    { text:'これは危険？', image:'images/sample-meat.jpg', options:['はい','いいえ','不明','ない'], answer:0 },
    { text:'警告マークはどれ？', options:[
      '<img src="images/opt-warn.jpg"> 警告','<img src="images/opt-ok.jpg"> OK',
      '<img src="images/opt-safe.jpg"> 安全','<img src="images/opt-tool.jpg"> 道具'], answer:0 },
    { text:'このサインは？', image:'images/opt-ng.jpg',
      options:['<img src="images/opt-ng.jpg"> 禁止','<img src="images/opt-ok.jpg"> OK',
               '<img src="images/opt-warn.jpg"> 注意','<img src="images/opt-idk.jpg"> 不明'], answer:0 }
  ],

  'lang-jp-advanced': [
    { text:'「厳しい検査」に近いのは？', options:['軽い検査','厳しい検査','無視する','遅い'], answer:1 },
    { text:'申告が必要ですか？', image:'images/sample-fruit.jpg', options:['はい','いいえ','任意','不明'], answer:0 },
    { text:'禁止物を選んで', options:[
      '<img src="images/opt-shirt.jpg"> 服','<img src="images/opt-water.jpg"> 水',
      '<img src="images/opt-meat.jpg"> 肉','<img src="images/opt-toy.jpg"> おもちゃ'], answer:2 },
    { text:'分類してください', image:'images/sample-raw.jpg',
      options:['<img src="images/opt-ok.jpg"> OK','<img src="images/opt-ng.jpg"> 禁止',
               '<img src="images/opt-warn.jpg"> 注意','<img src="images/opt-idk.jpg"> 不明'], answer:1 }
  ]

};
