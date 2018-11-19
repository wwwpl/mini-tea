// miniprogram/pages/car/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartGoods: ['1'],
    cartTotal: {
      "goodsCount": 1,
      "goodsCountAmount": 0,
      "goodsAllCount": 1
    },
    checkedAll: true,
    goodsItems: [{
        id: 1,
        count: 1,
        price: 5,
        amount: 5,
        checked: true,
        url: "../../images/1.png",
        name: '珍珠奶茶'
      },
      {
        id: 2,
        count: 1,
        price: 5,
        amount: 5,
        checked: false,
        url: "../../images/1.png",
        name: '珍珠奶茶'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.isChange()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  checkboxChange: function(e) {
    var self = this;
    var isCheck = self.isCheckedAll();
    
    if (e.detail.value.length == 0) {

      for (var x in self.data.goodsItems) { //x = index
        self.data.goodsItems[x].checked = false
      }
      self.data.checkedAll = false
    } else {
      for (var x in self.data.goodsItems) { //x = index
        self.data.goodsItems[x].checked = true
      }
      self.data.checkedAll = true
    }
    self.data.cartTotal.goodsCountAmount = 0
    this.setData({
      "goodsItems": this.data.goodsItems,
      "checkedAll": this.data.checkedAll,
      "cartTotal": this.data.cartTotal
    })
    
    this.isChange()
  },
  isCheckedAll: function() {
    //判断购物车商品已全选
    return this.data.goodsItems.every(function(element, index, array) {
      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });
  },
  addClick: function(event) {
  
    var self = this;
    var Index = event.target.dataset.index;
    //我们要修改的数组
    self.data.goodsItems[Index - 1].count += 1
    self.data.goodsItems[Index - 1].amount = self.data.goodsItems[Index - 1].count * self.data.goodsItems[Index - 1].price
   
    if (self.data.goodsItems[Index - 1].checked == true) {
      self.data.cartTotal.goodsCountAmount += self.data.goodsItems[Index - 1].price
    }
    
    this.setData({
      "goodsItems": this.data.goodsItems,
      "cartTotal": this.data.cartTotal
    })
  },
  removeCount:function(e){
    var self = this;
    var Index = e.target.dataset.index;
    //我们要修改的数组
    self.data.goodsItems[Index - 1].count -= 1
    self.data.goodsItems[Index - 1].amount = self.data.goodsItems[Index - 1].count * self.data.goodsItems[Index - 1].price
    if (self.data.goodsItems[Index - 1].checked == true) {
      self.data.cartTotal.goodsCountAmount -= self.data.goodsItems[Index - 1].price
    }
    
    this.setData({
      "goodsItems": this.data.goodsItems,
      "cartTotal": this.data.cartTotal
    })
  }
  ,
  isChange: function() {
    var self = this;
    for (var x in self.data.goodsItems) {
      if (self.data.goodsItems[x].checked == true) {
        self.data.cartTotal.goodsCountAmount = self.data.cartTotal.goodsCountAmount + self.data.goodsItems[x].amount
      }
    }
    this.setData({
      "cartTotal": this.data.cartTotal
    })
  },
  checkboxChangeOne: function(e) {
    var self = this;
    var Index = e.target.dataset.index;
    if (self.data.goodsItems[Index - 1].checked == true) {
      self.data.goodsItems[Index - 1].checked = false
    } else {
      self.data.goodsItems[Index - 1].checked = true
    }
    self.data.cartTotal.goodsCountAmount = 0
    this.setData({
      "goodsItems": this.data.goodsItems,
      "cartTotal": this.data.cartTotal
    })
    this.isChange()
  },
  payOrder:function(){
    wx.navigateTo({
      url: '../../pages/order/index'
    })
  }
})