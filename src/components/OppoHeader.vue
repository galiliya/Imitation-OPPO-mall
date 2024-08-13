<template>
  <!-- <div class="oppoheader">
    <div class="oppoheader-left">
        <span>oppo官网</span>
        <span>一加官网</span>
    </div>
    <div class="oppoheader-right">
        <span>下载oppo商城 App</span>
        <span>|</span>
        <span>登录</span>
        <span>|</span>
        <span>注册</span>
    </div>
    </div> -->
    <div>
        <div>
    <!-- 顶部导航栏 -->
    <header class="top-nav">
      <div class="top-nav-left">
        <span>OPPO 官网</span>
        <span>一加官网</span>
        <span>OPPO专区</span>
        <span>OnePlus专区</span>
        <span>智能硬件</span>
        <span>服务</span>
      </div>
      <div class="top-nav-right">
        <span>下载 OPPO 商城 App</span>
        <span>登录</span>
        <span>注册</span>
        <span>购物车 (0)</span>
      </div>
    </header>

  </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  background-color: #222;
  color: white;
  padding: 10px 70px;
  font-size: 14px;
}

.top-nav-left span, .top-nav-right span {
  margin-right: 20px;
}

/* .oppoheader{
    display: flex;
    width: 100%;
    height: 40px;
    background-color: rgb(34,34,34);
    color: white;
    font-size: 15px;
}
.oppoheader-left{
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 20px;
    padding-left: 70px;
    width: 50%;
    height: 40px;
}
.oppoheader-right{
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;
    padding-right: 150px;
    width: 50%;
    height: 40px;
} */
</style>
