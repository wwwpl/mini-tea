// miniprogram/pages/car/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartGoods: ['1'],
    cartTotal: {
      "goodsCount": 1,
      "goodsCountAmount": 5,
      "goodsAllCount": 1
    },
    checkedAll: true,
    goodsItems: [{
        id: 1,
        count: 1,
        amount: 5,
        checked: true,
        url: "../../images/1.png",
        name: '珍珠奶茶'
      },
      {
        id: 2,
        count: 1,
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
   
    var isCheck = this.isCheckedAll();
   
    if (isCheck==false){
      for (var x in this.goodsItems) {//x = index
        if (this.goodsItems[x].checked==false){
          this.goodsItems[x].checked=true
          }
      }
    }else{
      for (var x in this.goodsItems) {//x = index
        if (this.goodsItems[x].checked == true) {
          this.goodsItems[x].checked = false
        }
      }
    }
  },
  isCheckedAll: function () {
    //判断购物车商品已全选
    return this.data.goodsItems.every(function (element, index, array) {
      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });
  },
})