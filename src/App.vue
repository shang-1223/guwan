<template>
  <div class="app">
    <div class="top">
      <div class="title">白龙典藏评估收藏中心</div>
      <div class="contact">
        <img src="./image/top/phone.png" alt="" />
        <div class="phone">
          <div class="desc">官方热线</div>
          <div class="number">17302957451</div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="navBar">
      <div class="content">
        <div
          class="item"
          :class="routeName === 'home' ? 'isActive' : ''"
          @click="toRoute('home')"
        >
          网站首页
        </div>
        <div
          class="item"
          :class="routeName === 'about' ? 'isActive' : ''"
          @click="toRoute('about')"
        >
          关于我们
        </div>
        <div
          class="item"
          :class="routeName === 'jpxs' ? 'isActive' : ''"
          @click="toRoute('jpxs')"
        >
          精品欣赏
        </div>
        <div
          class="item"
          :class="routeName === 'contact' ? 'isActive' : ''"
          @click="toRoute('contact')"
        >
          联系我们
        </div>
      </div>
    </div>
    <!-- 路由页 -->
    <div class="route">
      <RouterView />
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="xinxi">
        <div class="item copyRight">版权所有 © 2024-11-23</div>
        <div class="item">公司地址:陕西省西安市未央区凤城十二路首创-富北高银28栋</div>
        <div class="item">
          电话:17302957451&nbsp;&nbsp;&nbsp;&nbsp;微信:swkk144
        </div>
      </div>
      <img src="./image/weChat.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const routeName = ref("");
const toRoute = (name) => {
  router.push({ name });
};
watch(
  () => route.name,
  (newVal) => {
    if (newVal) {
      routeName.value = newVal;
    }
  }
);
</script>

<style scoped lang="less">
.app {
  // height: 100vh;
  .top {
    height: 100px;
    background-color: #e3e3e3;
    display: flex;
    padding: 0 300px;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 36px;
      font-weight: bolder;
      color: #c40000;
    }
    .contact {
      display: flex;
      align-items: center;
      font-size: 16px;
      img {
        width: 48px;
        height: 48px;
        margin-right: 10px;
      }
      .phone {
        color: rgb(221, 153, 0);
      }
      .number {
        font-size: 20px;
        color: #666666;
      }
    }
  }
  .navBar {
    height: 50px;
    background-color: #c40000;
    .content {
      margin-left: 300px;
      height: 100%;
      width: 400px;
      display: flex;
      align-items: center;
      .item {
        height: 100%;
        line-height: 50px;
        width: 100px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        &:hover {
          background-color: #fff;
          color: #c40000;
        }
      }
      .isActive {
        background-color: #fff;
        color: #c40000;
      }
    }
  }
  .route {
  }
  .footer {
    font-size: 16px;
    height: 100px;
    padding: 20px 0;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    // justify-content: space-around;
    .xinxi {
      margin: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .item {
        width: 500px;
      }
    }
    img {
      margin-right: 200px;
      width: 80px;
      height: 80px;
    }
  }
}
</style>
