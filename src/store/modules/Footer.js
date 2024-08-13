
const state = {
  guarantees: [
    { title: '全国联保', icon: require('@/assets/footer/qglb.png') },
    { title: '7天无理由退货', icon: require('@/assets/footer/7twly.png') },
    { title: '官方换货保障', icon: require('@/assets/footer/gfhhbz.png') },
    { title: '满69元包邮', icon: require('@/assets/footer/69by.png') },
    { title: '900+ 家售后网点', icon: require('@/assets/footer/900shwd.png') }
  ],
  categories: [
    {
      title: 'OPPO',
      products: [
        'OPPO Find N3',
        'OPPO Find N3 Flip',
        'OPPO Find X7 Ultra',
        'OPPO Find X7',
        'OPPO Reno12',
        'OPPO Reno12 Pro',
        'OPPO K12x',
        'OPPO K12',
        'OPPO A3'
      ]
    },
    {
      title: '一加',
      products: [
        '一加 Ace 3 Pro',
        '一加 Ace 3V',
        '一加 Ace 3',
        '一加 12',
        '一加平板 Pro',
        '一加手表 2',
        '一加 Buds Pro 2',
        '一加 Buds Ace',
        '一加 Buds 3'
      ]
    },
    {
      title: '智能硬件',
      products: [
        'OPPO Watch X',
        'OPPO Pad 2',
        '一加手表 2',
        '一加平板 Pro',
        'OPPO Enco Free3',
        'OPPO Enco Air4 Pro',
        'OPPO Pad',
        'OPPO Pad Air',
        'OPPO Enco Air3'
      ]
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
