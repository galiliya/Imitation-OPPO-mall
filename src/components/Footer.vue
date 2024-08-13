<template>
    <div>
        <div class="guarantees">
            <div v-for="(guarantee, index) in guarantees" :key="index" class="guarantee-item">
                <img :src="guarantee.icon" :alt="guarantee.title" />
                <span>{{ guarantee.title }}</span>
            </div>
        </div>
        <div class="footer-products">
            <div class="footer-section" v-for="(category, index) in categories" :key="index">
                <h3>{{ category.title }}</h3>
                <ul>
                    <li v-for="(product, i) in category.products" :key="i">{{ product }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'OppoFooter',
  data () {
    return {

    }
  },
  computed: {
    ...mapState('Footer', ['guarantees', 'categories'])
  }
}
</script>

<style scoped>
.guarantees {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #e0e0e0;
}

.guarantee-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    text-align: center;
}

.guarantee-item img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
}

.guarantee-item span {
    font-size: 14px;
    color: #333;
}

.footer-products {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f9f9f9;
}

.footer-section {
    flex: 1;
    margin-right: 20px;
}

.footer-section h3 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section ul li {
    font-size: 16px;
    line-height: 1.8;
    color: #333;
}

.footer-section ul li:hover {
    color: #000;
}
</style>
