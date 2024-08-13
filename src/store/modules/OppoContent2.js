
const state = {
  topBanner: {
    image: require('@/assets/content/oppofindn3flip.png'),
    title: 'OPPO Find N3 Flip',
    description: '超光影三摄 | 口袋折叠设计'
  },
  icons: [
    { image: require('@/assets/content/lqzx.png'), text: '领券中心' },
    { image: require('@/assets/content/yjhx.png'), text: '以旧换新' },
    { image: require('@/assets/content/jbcs.png'), text: '价保政策' },
    { image: require('@/assets/content/qyg.png'), text: '企业购' }
  ],
  products: [
    {
      image: require('@/assets/content/oppofindx7u.png'),
      title: 'OPPO Find X7 Ultra',
      description: '1 英寸双潜望四主摄'
    },
    {
      image: require('@/assets/content/oneplusace3pro.png'),
      title: '一加 Ace 3 Pro',
      description: '高通第三代骁龙 8 旗舰芯片'
    },
    {
      image: require('@/assets/content/opporeno12-2.png'),
      title: 'OPPO Reno12',
      description: '安卓 Live 图时代由 OPPO 开启'
    },
    {
      image: require('@/assets/content/onepluspbpro.png'),
      title: '一加平板 Pro',
      description: '高通第三代骁龙 8 旗舰芯片'
    }
  ]
}

const mutations = {

}

const actions = {

}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
