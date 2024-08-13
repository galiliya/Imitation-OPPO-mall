<template>
  <div id="app">
<OppoHeader></OppoHeader>
<OppoContent></OppoContent>
<OppoContent2></OppoContent2>
<HotMale></HotMale>
<OppoZone></OppoZone>
<OneplusZone></OneplusZone>
<Footer></Footer>
<router-view></router-view>
  </div>
</template>
<script>
import OppoContent from './components/OppoContent.vue'
import OppoContent2 from './components/OppoContent2.vue'
import OppoHeader from './components/OppoHeader.vue'
import HotMale from './components/HotMale'
import OppoZone from './components/OppoZone.vue'
import OneplusZone from './components/OneplusZone.vue'
import Footer from './components/Footer.vue'
// import ProductBuy from './components/ProductBuy.vue'
export default {
  components: {
    OppoHeader,
    OppoContent,
    OppoContent2,
    HotMale,
    OppoZone,
    OneplusZone,
    Footer
  }
}
</script>
<style scoped>

</style>
