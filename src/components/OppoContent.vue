<template>
  <div>
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 左侧菜单栏 -->
      <aside class="sidebar">
        <ul>
          <li>热门推荐</li>
          <li>OPPO</li>
          <li>一加</li>
          <li>平板电脑</li>
          <li>智能耳机</li>
          <li>智能穿戴</li>
          <li>原装配件</li>
          <li>保障服务</li>
        </ul>
      </aside>

      <!-- 中央产品展示区 -->
      <section class="product-showcase">
        <div class="product-intro">
          <h1>一加 Ace 3</h1>
          <p>1.5K 东方屏 | 第二代骁龙 8 旗舰芯片</p>
          <button>立即抢购</button>
        </div>
        <div class="product-image">
          <img src="@/assets/content/oppo1.png" alt="OnePlus Ace 3">
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
  }
}
</script>

<style scoped>
/* 主内容布局 */
.main-content {
  display: flex;
  padding: 20px 70px;
}
/* 左侧菜单栏 */
.sidebar {
  width: 200px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
/* 中央产品展示区 */
.product-showcase {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.product-intro {
  max-width: 400px;
}

.product-intro h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.product-intro p {
  font-size: 18px;
  margin-bottom: 20px;
}

.product-intro button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}

.product-image img {
  width: 500px;
  height: auto;
}
</style>
