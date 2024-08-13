<template>
  <div class="oppo-section">
    <h2>OPPO专区</h2>
    <div class="series-menu">
      <span
        v-for="(series, index) in Object.keys(seriesData)"
        :key="index"
        @click="selectSeries(series)"
        :class="{ active: selectedSeries === series }"
      >
        {{ series }}
      </span>
    </div>
    <div class="products-container">
      <div class="main-product">
        <img :src="seriesData[selectedSeries].mainImage" alt="Main Product" />
      </div>
      <div class="product-list">
        <div
          v-for="(product, index) in seriesData[selectedSeries].products"
          :key="index"
          class="product-card"
        >
          <img :src="product.image" :alt="product.title" class="product-image" />
          <h3>{{ product.title }}</h3>
          <p>¥{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('OppoZone', {
      selectedSeries: state => state.selectedSeries,
      seriesData: state => state.seriesData
    })
  },
  methods: {
    ...mapMutations('OppoZone', ['setSelectedSeries']),
    selectSeries (series) {
      this.setSelectedSeries(series) // 使用 Vuex mutation 更新 selectedSeries
    }
  }
}
</script>

<style scoped>
.oppo-section {
  margin: 20px;
}

.series-menu {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.series-menu span {
  cursor: pointer;
  padding: 10px;
  border-bottom: 2px solid transparent;
}

.series-menu .active {
  border-bottom: 2px solid #000;
  font-weight: bold;
}

.products-container {
  display: flex;
  gap: 20px;
  align-items: flex-start; /* 主图片和产品列表对齐 */
}

.main-product img {
  width: 450px; /* 可以根据需要调整主图的大小 */
  height: auto;
}

.product-list {
  display: flex;
  flex-wrap: nowrap; /* 允许换行 */
  gap: 20px;
  flex-grow: 1; /* 让产品列表占据剩余空间 */
}

.product-card {
  width: calc(33.33% - 20px);
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.product-card img {
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 10px;
  object-fit: cover;
}

.product-card h3 {
  font-size: 16px;
  margin: 10px 0 5px;
}

.product-card p {
  font-size: 18px;
  color: #e60012;
  font-weight: bold;
}
</style>
