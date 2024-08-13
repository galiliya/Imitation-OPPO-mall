
const state = {
  selectedSeries: '一加手机',
  seriesData: {
    一加手机: {
      mainImage: require('@/assets/onepluszone/oneplusace3pro.png'),
      products: [
        {
          image: require('@/assets/onepluszone/oneplusace3pro-2.png'),
          title: '一加 Ace 3 Pro',
          price: 3799
        },
        {
          image: require('@/assets/onepluszone/oneplusace3.png'),
          title: '一加 Ace 3',
          price: 2999
        },
        {
          image: require('@/assets/onepluszone/oneplus12.png'),
          title: '一加 12',
          price: 4799
        },
        {
          image: require('@/assets/onepluszone/oneplusace3.png'),
          title: '一加 Ace 3V',
          price: 1899
        }
      ]
    },
    一加手表: {
      mainImage: require('@/assets/onepluszone/onepluswatch.png'),
      products: [
        {
          image: require('@/assets/onepluszone/onepluswatch2.png'),
          title: '一加手表',
          price: 1749
        }
      ]
    },
    一加平板: {
      mainImage: require('@/assets/onepluszone/onepluspbpro.png'),
      products: [
        {
          image: require('@/assets/onepluszone/onepluspbpro-2.png'),
          title: '一加平板 Pro 深空灰 8GB+1...',
          price: 2899
        }
      ]
    },
    一加耳机: {
      mainImage: require('@/assets/onepluszone/oneplusbuds3.png'),
      products: [
        {
          image: require('@/assets/onepluszone/oneplusbudsace.png'),
          title: '一加 Buds Ace 深度降噪游...',
          price: 189
        },
        {
          image: require('@/assets/onepluszone/oneplusbudspro2.png'),
          title: '一加 Buds Pro 旗舰耳机',
          price: 649
        }
      ]
    },
    一加配件: {
      mainImage: require('@/assets/onepluszone/onepluscdq.png'),
      products: [
        {
          image: require('@/assets/onepluszone/onepluscdq-2.png'),
          title: '一加 SUPERVOOC 150W...',
          price: 239
        },
        {
          image: require('@/assets/onepluszone/onepluscdq-3.png'),
          title: '一加 Warp 闪充 65W 电源...',
          price: 99
        },
        {
          image: require('@/assets/onepluszone/oneplussjx.png'),
          title: '一加 Warp 闪充 双Type-C...',
          price: 59
        }
      ]
    }
  }
}

const mutations = {
  setSelectedSeries (state, series) {
    state.selectedSeries = series
  }
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
