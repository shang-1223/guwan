<template>
  <div class="home">
    <div class="banner">
      <el-carousel>
        <el-carousel-item>
          <img src="../image/home/banner/1.png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../image/home/banner/2.png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../image/home/banner/3.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <div class="content">
        <div class="top">
          <div class="gsjj">
            <div class="title">
              <img src="../image/title-icon.png" alt="" /> <span>公司简介</span>
            </div>
            <div class="desc">
              <img src="../image/home/gsjj.png" alt="" />
              <p>
                白龙典藏鉴定评估中心位于十三朝文化古都西安，以“还原藏品在市场上最真实的价值，去伪存真！”为原则，服务广大藏友！集鉴定、评估、收藏等服务于一身的综合性单位。秉着公平、公正、互利共赢的准则，享誉收藏文化行业多年，并且以诚信、守信为本得到广大藏友的支持与信赖！
                <br />
                本公司将凭借深厚的专业知识、饱满的工作热情、丰富的收藏经验，充分发挥自身优势，不忘初心，致力于收藏文化行业，服务于每一位藏友！收藏经久不衰，本公司也会全力以赴的做好工作，服务好每一个想要玩好收藏的朋友，公司也会为广大藏友客户建立安全可靠的收藏交易平台！
                甄选范围：钱币、杂项、字画、玉器、瓷器、古籍善本...
              </p>
            </div>
          </div>
          <div class="gshj">
            <div class="title">
              <img src="../image/title-icon.png" alt="" /> <span>公司环境</span>
            </div>
            <el-carousel>
              <el-carousel-item>
                <img src="../image/home/gshj1.png" alt="" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../image/home/gshj2.png" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="zjzl">
          <div class="title">
            <img src="../image/title-icon.png" alt="" /> <span>征集种类</span>
          </div>
          <div class="box">
            <div class="item">
              <img src="../image/home/yuqi.png" alt="" />
              <div class="desc">
                <div class="name">玉器</div>
                <div class="english">JADE</div>
              </div>
            </div>
            <div class="item">
              <img src="../image/home/qianbi.png" alt="" />
              <div class="desc">
                <div class="name">钱币</div>
                <div class="english">COIN</div>
              </div>
            </div>
            <div class="item">
              <img src="../image/home/ciqi.png" alt="" />
              <div class="desc">
                <div class="name">瓷器</div>
                <div class="english">PORCELAIN</div>
              </div>
            </div>
            <div class="item">
              <img src="../image/home/zihua.png" alt="" />
              <div class="desc">
                <div class="name">字画</div>
                <div class="english">WORD DRAW</div>
              </div>
            </div>
            <div class="item">
              <img src="../image/home/zaxiang.png" alt="" />
              <div class="desc">
                <div class="name">杂项</div>
                <div class="english">OTHER</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ysjpzlhd">
          <div class="title">
            <img src="../image/title-icon.png" alt="" />
            <span>艺术精品展览活动</span>
          </div>
          <div class="imgBox">
            <div class="lang img">
              <img src="../image/home/ysjpzlhd/1.png" alt="" />
            </div>
            <div class="img">
              <img src="../image/home/ysjpzlhd/2.png" alt="" />
            </div>
          </div>
          <div class="imgBox">
            <div class="img">
              <img src="../image/home/ysjpzlhd/3.png" alt="" />
            </div>
            <div class="img center">
              <img src="../image/home/ysjpzlhd/4.png" alt="" />
            </div>
            <div class="img">
              <img src="../image/home/ysjpzlhd/5.png" alt="" />
            </div>
          </div>
          <img class="line" src="../image/home/ysjpzlhd/line.png" alt="" />
        </div>
        <div class="bottom">
          <div class="left">
            <div class="nav">
              <div
                class="item"
                :class="currentType === 'hyxw' ? 'isActive' : ''"
                @mouseover="check('hyxw')"
              >
                行业新闻
              </div>
              <div
                class="item"
                :class="currentType === 'hyhd' ? 'isActive' : ''"
                @mouseover="check('hyhd')"
              >
                行业活动
              </div>
              <div
                class="item"
                :class="currentType === 'jdzs' ? 'isActive' : ''"
                @mouseover="check('jdzs')"
              >
                鉴定知识
              </div>
            </div>
            <div class="new">
              <div
                class="newItem"
                v-for="(item, index) in current"
                :key="index"
              >
                <div class="title" :title="item.title">
                  {{ item.title }}
                </div>
                <div class="time">{{ item.time }}</div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="title">
              <img src="../image/title-icon.png" alt="" />
              <span>留言咨询</span>
              <el-form label-width="80px">
                <el-form-item label="您的姓名">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                  <el-input v-model="form.lxfs"></el-input>
                </el-form-item>
                <el-form-item label="咨询内容">
                  <el-input
                    type="textarea"
                    resize="none"
                    :autosize="{ minRows: 4, maxRows: 6 }"
                    v-model="form.zxnr"
                  ></el-input>
                </el-form-item>
                <div class="submit">提交</div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { onMounted, ref } from "vue";
const form = ref({
  name: "",
  lxfs: "",
  zxnr: "",
});
const hyxw = ref([
  { title: "汉白玉浮雕花卉纹碗", time: "2024-1-11" },
  { title: "玉棕掀起古玉高价新浪潮", time: "2024-1-24" },
  { title: "迁徙唐三彩", time: "2024-4-9" },
  { title: "中国考古重大发现", time: "2024-5-17" },
  { title: "海昏侯墓发掘", time: "2024-10-18" },
]);
const hyhd = ref([
  { title: "珠海2016粤港澳首届中国艺术收藏艺术节", time: "2024-3-9" },
  { title: "陕西历史博物馆展览", time: "2024-5-8" },
  { title: "免费鉴定活动", time: "2024-8-14" },
  { title: "线上鉴宝活动开启", time: "2024-10-18" },
  { title: "珠海2016粤港澳首届中国艺术收藏艺术节5", time: "2024-11-2" },
]);
const jdzs = ref([
  { title: "如何辨别和田玉的真假？", time: "2024-2-7" },
  { title: "如何鉴别'石中'田黄石", time: "2024-4-16" },
  { title: "鸡血石鉴定方法及拍卖价格", time: "2024-7-21" },
  { title: "明代斗彩瓷器的发展与鉴定", time: "2024-9-13" },
  { title: "钱币鉴定知识", time: "2024-11-2" },
]);
const current = ref(hyxw.value);
const currentType = ref("hyxw");
const check = (type) => {
  currentType.value = type;
  switch (type) {
    case "hyxw":
      current.value = hyxw.value;
      break;
    case "hyhd":
      current.value = hyhd.value;
      break;
    case "jdzs":
      current.value = jdzs.value;
      break;
    default:
      break;
  }
};
</script>
<style lang="less" scoped>
.home {
  .banner {
    height: 400px;
    img {
      height: 400px;
      width: 100%;
    }
    .el-carousel {
      height: 400px;
    }
    :deep(.el-carousel__container) {
      height: 400px !important;
    }
  }
  .main {
    background-color: rgb(239, 239, 239);
    padding: 50px 200px;
    .content {
      background-color: #fff;
      padding: 20px;
      .top {
        width: 100%;
        display: flex;
        .gsjj {
          //   height: 300px;
          width: 65%;
          .desc {
            padding-right: 30px;
            border-right: #e0e0e0 1px solid;
            img {
              float: left;
              width: 226px;
              height: 168px;
              margin: 0 10px 10px 0;
            }
            p {
              text-indent: 2em; /* 设置段落首行缩进2em */
              font-size: 18px;
              line-height: 36px;
              color: #666;
              margin-bottom: 0;
            }
          }
        }
        .gshj {
          height: 300px;
          width: 35%;
          padding-left: 30px;
          .el-carousel {
            height: 250px;
          }
          :deep(.el-carousel__container) {
            height: 300px !important;
            img {
              width: 100%;
              height: calc(100% - 46px);
            }
          }
        }
      }
      .zjzl {
        width: 100%;
        .box {
          height: 100px;
          display: flex;
          .item {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #d7d7d7;
            img {
              width: 50px;
              height: 80px;
              margin-right: 30px;
            }
            .desc {
              .name {
                font-size: 20px;
                color: #000;
                font-weight: bold;
              }
              .english {
                font-size: 18px;
                color: #666;
              }
            }
          }
        }
      }
      .ysjpzlhd {
        .imgBox {
          height: 210px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          .img {
            width: calc(33.333% - 10px);
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .lang {
            width: calc(66.666% - 10px);
          }
        }
        .line {
          width: 100%;
          margin-bottom: 10px;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        .left {
          width: 45%;
          display: flex;
          align-items: start;
          .nav {
            width: 220px;
            background-color: #ececec;
            .item {
              width: 100%;
              height: 100px;
              text-align: center;
              line-height: 100px;
              font-size: 16px;
              color: #666;
              cursor: pointer;
              &:hover {
                color: #fff;
                background-color: #c40000;
              }
            }
            .isActive {
              color: #fff;
              background-color: #c40000;
            }
          }
          .new {
            margin-left: 20px;
            width: calc(100% - 240px);
            .newItem {
              border-bottom: 1px #e2e2e2 dashed;
              font-size: 16px;
              color: #666;
              cursor: pointer;
              padding: 0 20px;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .title {
                color: #666;
                width: 60%;
                overflow: hidden; /* 确保超出容器的文本被隐藏 */
                white-space: nowrap; /* 防止文本换行 */
                text-overflow: ellipsis; /* 超出部分显示省略号 */
              }
            }
          }
        }
        .right {
          width: 45%;
          .el-form {
            margin-top: 20px;
            .el-form-item {
              margin-bottom: 20px;
            }
          }
          .submit {
            margin: auto;
            width: 200px;
            height: 50px;
            background-color: #666;
            color: #fff;
            cursor: pointer;
            border-radius: 4px;
            font-size: 16px;
            line-height: 50px;
            text-align: center;
          }
        }
      }
      .title {
        height: 26px;
        color: rgb(51, 51, 51);
        font-size: 16px;
        font-weight: bolder;
        margin: 20px 0;
        img {
          width: 28px;
          height: 13px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
