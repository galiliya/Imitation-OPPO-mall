<template>
    <div>
      <!-- 上部横幅 -->
      <div class="banner">
        <img :src="topBanner.image" alt="OPPO Find N3 Flip" class="banner-img"/>
        <div class="banner-info">
          <h2>{{ topBanner.title }}</h2>
          <p>{{ topBanner.description }}</p>
        </div>
      </div>

      <!-- 图标导航 -->
      <div class="icon-nav">
        <div v-for="icon in icons" :key="icon.text" class="icon-item">
          <img :src="icon.image" :alt="icon.text" class="icon-img"/>
          <span>{{ icon.text }}</span>
        </div>
      </div>

      <!-- 产品推荐 -->
      <div class="product-grid">
        <div v-for="product in products" :key="product.title" class="product-item">
          <img :src="product.image" :alt="product.title" class="product-img"/>
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('OppoContent2', {
      topBanner: state => state.topBanner,
      icons: state => state.icons,
      products: state => state.products
    })
  }
}
</script>

  <style scoped>
  /* 上部横幅 */
  .banner {
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .banner-img {
    height: 100px;
    margin-right: 20px;
  }

  .banner-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .banner-info h2 {
    font-size: 24px;
    margin: 0;
  }

  .banner-info p {
    font-size: 16px;
    color: #888;
  }

  /* 图标导航 */
  .icon-nav {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  /* 产品推荐 */
  .product-grid {
    display: flex;
    justify-content: space-around;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    width: 20%;
  }

  .product-img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .product-item h3 {
    font-size: 18px;
    margin: 10px 0 5px;
  }

  .product-item p {
    font-size: 14px;
    color: #888;
  }
  </style>
