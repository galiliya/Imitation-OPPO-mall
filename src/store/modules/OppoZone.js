
const state = {
  selectedSeries: 'Find N 系列',
  seriesData: {
    'Find N 系列': {
      mainImage: require('@/assets/oppozone/oppofindn3-1.png'),
      products: [
        {
          image: require('@/assets/oppozone/oppofindn3-2.png'),
          title: 'OPPO Find N3 典藏版',
          price: 10999
        },
        {
          image: require('@/assets/oppozone/oppofindn3-3.png'),
          title: 'OPPO Find N3 Flip',
          price: 5999
        }
      ]
    },
    'Find X 系列': {
      mainImage: require('@/assets/oppozone/oppofindx-1.png'),
      products: [
        {
          image: require('@/assets/oppozone/oppofindx-2.png'),
          title: 'OPPO Find X7 Ultra',
          price: 4599
        },
        {
          image: require('@/assets/oppozone/oppofindx-3.png'),
          title: 'OPPO Find X7 Pro',
          price: 4999
        }
      ]
    },
    reno系列: {
      mainImage: require('@/assets/oppozone/opporeno-1.png'),
      products: [
        {
          image: require('@/assets/oppozone/opporeno-2.png'),
          title: 'OPPO Reno12',
          price: 4599
        },
        {
          image: require('@/assets/oppozone/opporeno-3.png'),
          title: 'OPPO OPPO Reno12 Pro',
          price: 4999
        },
        {
          image: require('@/assets/oppozone/opporeno-4.png'),
          title: 'OPPO OPPO Reno11',
          price: 4999
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
