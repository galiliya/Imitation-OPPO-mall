<template>
    <div class="hot-sale-section">
      <h2>热卖专区</h2>
      <div class="product-grid">
        <div v-for="product in products" :key="product.title" class="product-card">
          <img :src="product.image" :alt="product.title" class="product-image" />
          <div class="product-info">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p class="product-price" :class="{'special-price': product.specialPrice}">
              ¥{{ product.price }}
            </p>
          </div>
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
    ...mapState('HotMale', ['products'])
  }
}
</script>

  <style scoped>
  .hot-sale-section {
    margin: 20px;
  }

  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .product-card {
    width: calc(23.2% - 20px);
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .product-card:hover {
    transform: translateY(-5px);
  }

  .product-image {
    width: 100%;
    height: auto;
    max-height: 150px;
    max-width: 150px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .product-info h3 {
    font-size: 16px;
    margin: 10px 0 5px;
  }

  .product-info p {
    font-size: 14px;
    color: #888;
  }

  .product-price {
    font-size: 18px;
    color: #e60012;
    font-weight: bold;
  }

  .special-price {
    color: #ff4500;
  }
  </style>
