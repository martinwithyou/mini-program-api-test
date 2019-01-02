'use strict';

var _require = require("../../utils/util.js"),
    add = _require.add;

Page({
  data: {
    text: 'test page',
    x: add(1, 2),
    title: '作者昵称：安妮宝贝',
    introduce:'大江大河，这是一部制作精良的电视连续剧',
    content:"大江大河，这是一部制作精良的电视连续剧",
    title_1: '作者昵称：龙应台',
    imgUrls: [
      '../../images/da_1.jpg',
      '../../images/da_2.jpg',
      '../../images/da_3.jpg',
      '../../images/da_4.jpg'
    ],
    proList:[
      {
        title: '作者昵称：安妮宝贝',
        content:"wx:for大江大河，这是一部制作精良的电视连续剧",
        url:"../../images/24213.jpg"
      },
      {
        title: '作者昵称：安妮宝贝',
        content:"wx:for大江大河，这是一部制作精良的电视连续剧",
        url:"../../images/24280.jpg"
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  created: function created(options) {
    console.log(options);
    // Do some initialize when page load.
  },
  onReady: function onReady() {
    // console.log(this.selectComponent())
    // Do something when page ready.
  },

  // Event handler.
  viewTap: function viewTap() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    });
  },
  handler: function handler(e) {
    console.log(e);
  },
  toDetail:function(e){
    console.log(e.currentTarget.dataset.index)
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗'+e.currentTarget.dataset.index,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onGotUserInfo:(e)=>{
    console.log(e)
  },
  call:()=>{
    wx.makePhoneCall({
      phoneNumber: '1340000' // 仅为示例，并非真实的电话号码
    })
  },
  navigateTo:()=>{
    wx.reLaunch({
      url: '../echarts/echarts'
    })
  },
  onLoad:function(e){
    console.log("页面传参数——————",e);
    const app =  getApp();
    console.log("全局变量——————",app);
    let res = wx.getStorageSync("title")
    console.log( res )
    let self = this
    console.log(this)
    console.log(self)
    wx.request({
      url: 'http://jsonplaceholder.typicode.com/users', // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        console.log(res.data)
        self.setData({
          proList:res.data
        })
      }
    })
  },
  customData: {
    hi: 'MINA'
  }
});