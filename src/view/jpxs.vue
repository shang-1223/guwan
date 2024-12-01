<template>
  <div class="jpxs">
    <div class="banner">
      <img src="../image/home/banner/1.png  " alt="" />
    </div>
    <div class="main">
      <div class="content">
        <div class="nav">
          <div
            class="navItem"
            @mouseover="check('ciqi')"
            :class="current === 'ciqi' ? 'isActive' : ''"
          >
            瓷器
          </div>
          <div
            class="navItem"
            @mouseover="check('yuqi')"
            :class="current === 'yuqi' ? 'isActive' : ''"
          >
            玉器
          </div>
          <div
            class="navItem"
            @mouseover="check('zaxiang')"
            :class="current === 'zaxiang' ? 'isActive' : ''"
          >
            杂项
          </div>
          <div
            class="navItem"
            @mouseover="check('qianbi')"
            :class="current === 'qianbi' ? 'isActive' : ''"
          >
            钱币
          </div>
          <div
            class="navItem"
            @mouseover="check('zihua')"
            :class="current === 'zihua' ? 'isActive' : ''"
          >
            字画
          </div>
        </div>
        <div class="list">
          <div class="listItem" v-for="(item, index) in list" :key="index">
            <div class="box">
              <img :src="item.img" alt="" />
            </div>
            <div class="name">{{ item.name }}</div>
            <div class="price">委托价:{{ item.price }}(人民币)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from "vue";
import getImgUrl from "../util/useImgUrl";
const current = ref("ciqi");
let ciqi = [
  {
    img: new URL(`../image/jpjs/ciqi/1.png`, import.meta.url).href,
    name: "青华瓷瓶",
    price: 370,
  },
  {
    img: new URL(`../image/jpjs/ciqi/2.png`, import.meta.url).href,
    name: "陶瓷茶壶",
    price: 370,
  },
  {
    img: new URL(`../image/jpjs/ciqi/3.png`, import.meta.url).href,
    name: "陶瓷花瓶",
    price: 370,
  },
  {
    img: new URL(`../image/jpjs/ciqi/4.png`, import.meta.url).href,
    name: "陶瓷花瓶",
    price: 370,
  },
  {
    img: new URL(`../image/jpjs/ciqi/5.png`, import.meta.url).href,
    name: "陶瓷花瓶",
    price: 370,
  },
  {
    img: new URL(`../image/jpjs/ciqi/6.png`, import.meta.url).href,
    name: "陶瓷花瓶",
    price: 370,
  },
  {
    img: new URL(`../image/jpjs/ciqi/7.png`, import.meta.url).href,
    name: "陶瓷酒壶",
    price: 370,
  },
  {
    img: new URL(`../image/jpjs/ciqi/8.png`, import.meta.url).href,
    name: "陶瓷碗",
    price: 370,
  },
];
let yuqi = [
  {
    img: new URL(`../image/jpjs/yuqi/1.png`, import.meta.url).href,
    name: "冰种飘蓝花",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/yuqi/2.png`, import.meta.url).href,
    name: "玉茶壶",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/yuqi/3.png`, import.meta.url).href,
    name: "玉雕手镯",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/yuqi/4.png`, import.meta.url).href,
    name: "玉坠",
    price: 70,
  },
];
let zaxiang = [
  {
    img: new URL(`../image/jpjs/zaxaing/1.png`, import.meta.url).href,
    name: "摆件",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/zaxaing/2.png`, import.meta.url).href,
    name: "鼻烟壶",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/zaxaing/3.png`, import.meta.url).href,
    name: "鼻烟壶",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/zaxaing/4.png`, import.meta.url).href,
    name: "青铜爵",
    price: 70,
  },
];
let qianbi = [
  {
    img: new URL(`../image/jpjs/qianbi/1.png`, import.meta.url).href,
    name: "2000年中国人民银行发行千禧年纪念金币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/2.png`, import.meta.url).href,
    name: "清'咸丰元宝'背'宝泉当500'雕母",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/3.png`, import.meta.url).href,
    name: "江南省造光绪元宝七钱二分银币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/4.png`, import.meta.url).href,
    name: "孙中山像中华民国开国纪念币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/5.png`, import.meta.url).href,
    name: "孙中山像中华民国开国纪念币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/6.png`, import.meta.url).href,
    name: "孙中山像中华民国开国纪念币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/7.png`, import.meta.url).href,
    name: "孙中山像中华民国开国纪念币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/8.png`, import.meta.url).href,
    name: "孙中山像中华民国开国纪念币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/9.png`, import.meta.url).href,
    name: "孙中山像中华民国开国纪念币",
    price: 70,
  },
  {
    img: new URL(`../image/jpjs/qianbi/10.png`, import.meta.url).href,
    name: "孙中山像中华民国开国纪念币",
    price: 70,
  },
];
let zihua = [
  {
    img: new URL(`../image/jpjs/zihua/1.png`, import.meta.url).href,
    name: "字画",
    price: 70,
  },
];
const list = ref(ciqi);
const check = (type) => {
  current.value = type;
  switch (type) {
    case "ciqi":
      list.value = ciqi;
      break;
    case "yuqi":
      list.value = yuqi;
      break;
    case "zaxiang":
      list.value = zaxiang;
      break;
    case "qianbi":
      list.value = qianbi;
      break;
    case "zihua":
      list.value = zihua;
      break;
    default:
      break;
  }
};
</script>
<style lang="less" scoped>
.jpxs {
  .banner {
    height: 400px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .main {
    background-color: rgb(239, 239, 239);
    padding: 50px 200px;
    .content {
      background-color: #fff;
      padding: 20px;
      .nav {
        height: 45px;
        .navItem {
          width: 100px;
          height: 100%;
          margin-right: 20px;
          text-align: center;
          line-height: 45px;
          font-size: 16px;
          cursor: pointer;
        }
        .isActive {
          color: #fff;
          background-color: #c40000;
        }
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .listItem {
          margin-top: 30px;
          width: 24%;
          cursor: pointer;
          .box {
            width: 100%;
            height: 250px;
            border: 1px solid #e2e2e2;
            text-align: center;
            img {
              width: 80%;
              height: 100%;
            }
          }
          .name {
            font-size: 16px;
            margin: 15px 0 10px 0;
          }
          .price {
            font-size: 14px;
            color: #767676;
          }
        }
      }
    }
  }
}
</style>
