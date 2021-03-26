export default {
  pages: [
    'pages/index/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#515151',
    selectedColor: '#00a6ac',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/common/home.png',
        selectedIconPath: 'images/common/home_active.png',
        text: '主页',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'images/common/mine.png',
        selectedIconPath: 'images/common/mine_active.png',
        text: '我的',
      }
    ]
  }
}
