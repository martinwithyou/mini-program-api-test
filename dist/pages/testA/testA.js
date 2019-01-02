'use strict';

var _require = require("../../utils/util.js"),
    add = _require.add;
function getRandomColor() {
      const rgb = []
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
      }
      return '#' + rgb.join('')
}
Page({
  data: {
    text: 'test page',
    x: add(1, 2),
    msg:'wwww',
    markers: [{
      iconPath: '/resources/others.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    src: ''
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },
  updateShareMenu(){
    wx.showShareMenu({
      withShareTicket: true
    });
    wx.updateShareMenu({
      withShareTicket: true,
      success:function(res){ 
        console.log(res)
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  setDisabled(e){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude // 纬度
        const longitude = res.longitude // 经度
        console.log(res,latitude,longitude);
      }
    })
  },
  setPlain(e){
    console.log(e);
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  markertap(e){
    console.log(e);
  },
  clickMe(e){
    this.setData({msg: 'Hello World'})
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
  setLoading(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  downLoad(){
    wx.downloadFile({
      url: 'http://jsonplaceholder.typicode.com/users', // 仅为示例，并非真实的资源
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })
  },
  upLoad:function(e){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            user: 'test'
          },
          success(res) {
            const data = res.data
            // do something
          }
        })
      }
    })
  },
  webSocket:function(e){
    wx.connectSocket({
      url: 'wss://example.qq.com',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      protocols: ['protocol1'],
      method: 'GET'
    })
  },
  DNS:function(e){
    wx.startLocalServiceDiscovery({
      // 当前手机所连的局域网下有一个 _http._tcp. 类型的服务
      serviceType: '_http._tcp.',
      success:function(res){console.log(res)}, 
      fail:function(res){console.log(res)}
    })
  },
  getStorage:function(){
    wx.setStorage({
      key: 'key',
      data: 'value'
    })
    wx.getStorage({
      key: 'key',
      success(res) {
        console.log(res.data)
      }
    })
  },
  onLoad:function(query){
    const scene = decodeURIComponent(query.scene)
    console.log(query,scene)
    wx.setTopBarText({
      text: 'hello, world!'
    });
    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
        console.log(res.SDKVersion)
        console.log(res.brand)
      }
    });
    wx.canvasToTempFilePath({
      x: 100,
      y: 200,
      width: 50,
      height: 50,
      destWidth: 100,
      destHeight: 100,
      canvasId: 'myCanvas',
      success(res) {
        console.log(res.tempFilePath)
      }
    })
  },
  onReady(e) {
    // 使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle('#00ff00')
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle('#ff0000')
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw();

    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    // 设置了 src 之后会自动播放
    //backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    
    this.videoContext = wx.createVideoContext('myVideo');

    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
    //this.audioCtx.play()

    const accountInfo = wx.getAccountInfoSync()
    console.log(accountInfo.miniProgram.appId) // 小程序 appId
    console.log(accountInfo) // 插件 appId
    console.log(accountInfo) // 插件版本号， 'a.b.c' 这样的形式

    // 必须是在用户已经授权的情况下调用
    wx.getUserInfo({
      success(res) {
        const userInfo = res.userInfo
        console.log(userInfo)
      }
    })

    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
    success(res) {
    if (!res.authSetting['scope.record']) {
      wx.authorize({
        scope: 'scope.record',
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.startRecord()
        }
      })
    }
    }
  })

  wx.getSetting({
    success(res) {
      console.log(res.authSetting)
      // res.authSetting = {
      //   "scope.userInfo": true,
      //   "scope.userLocation": true
      // }
    }
  })

  // wx.chooseAddress({
  //   success(res) {
  //     console.log(res.userName)
  //     console.log(res.postalCode)
  //     console.log(res.provinceName)
  //     console.log(res.cityName)
  //     console.log(res.countyName)
  //     console.log(res.detailInfo)
  //     console.log(res.nationalCode)
  //     console.log(res.telNumber)
  //   }
  // })


  wx.addCard({
    cardList: [
      {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
      }, {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
      }
    ],
    success(res) {
    console.log("卡券添加结果____",res.cardList) // 卡券添加结果
    }
  })

  //const scene = decodeURIComponent(query.scene)

  wx.startSoterAuthentication({
    requestAuthModes: ['fingerPrint'],
    challenge: '123456',
    authContent: '请用指纹解锁',
    success(res) {
    }
  })

  // wx.getWeRunData({
  //   success(res) {
  //     const encryptedData = res.encryptedData
  //     console.log("卡券添加结果____",encryptedData)
  //   }
  // })

  wx.getNetworkType({
    success(res) {
      const networkType = res.networkType
    }
  })

  // 允许从相机和相册扫码
// wx.scanCode({
//   success(res) {
//     console.log(res)
//   }
// })
wx.onMemoryWarning(function () {
  console.log('onMemoryWarningReceive')
});





  },
  inputValue: '',
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  customData: {
    hi: 'MINA'
  }
});