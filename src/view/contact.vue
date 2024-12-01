<template>
  <div class="lxwm">
    <div class="banner">
      <img src="../image/home/banner/1.png  " alt="" />
    </div>
    <div class="main">
      <div class="content">
        <div class="top">
          <div class="right">
            <div class="title">
              <img src="../image/title-icon.png" alt="" /> <span>联系我们</span>
            </div>
            <div class="desc">
              公司简介：白龙典藏鉴定评估中心位于十三朝文化古都西安，以“还原藏品在市场上最真实的价值，去伪存真！”为原则，服务广大藏友！集鉴定、评估、收藏等服务于一身的综合性单位。秉着公平、公正、互利共赢的准则，享誉收藏文化行业多年，并且以诚信、守信为本得到广大藏友的支持与信赖！本公司将凭借深厚的专业知识、饱满的工作热情、丰富的收藏经验，充分发挥自身优势，不忘初心，致力于收藏文化行业，服务于每一位藏友！收藏经久不衰，本公司也会全力以赴的做好工作，服务好每一个想要玩好收藏的朋友，公司也会为广大藏友客户建立安全可靠的收藏交易平台！
              甄选范围：钱币、杂项、字画、玉器、瓷器、古籍善本...
            </div>
            <div class="phone">
              服务热线:&nbsp;&nbsp;&nbsp;&nbsp;17302957451
            </div>
            <div class="phone">客服微信:&nbsp;&nbsp;&nbsp;&nbsp;swkk144</div>
            <div class="phone">
              公司地址:&nbsp;&nbsp;&nbsp;&nbsp;陕西省西安市未央区凤城十二路首创-富北高银28栋
            </div>
          </div>
          <div class="line"></div>
          <div class="left">
            <div class="title">
              <img src="../image/title-icon.png" alt="" /> <span>留言咨询</span>
            </div>
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
        <div class="map" id="map_container"></div>
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
let map;
// 自定义展示内容
function createDOM() {
  var div = document.createElement("div");
  div.style.zIndex = BMap.Overlay.getZIndex(this.point.lat);
  div.style.backgroundColor = "#fff";
  div.style.color = "#333";
  div.style.height = "160px";
  div.style.width = "230px";
  div.style.padding = "2px";
  div.style.lineHeight = "50px";
  div.style.whiteSpace = "nowrap";
  div.style.MozUserSelect = "none";
  div.style.fontSize = "12px";
  div.style.borderRadius = "10px";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.flexDirection = "column";

  var title = document.createElement("div");
  title.style.display = "block";
  title.style.lineHeight = "16px";
  title.style.fontSize = "16px";
  title.style.fontWeight = "700";
  div.appendChild(title);
  title.appendChild(document.createTextNode(this.properties.title));

  var span = document.createElement("span");
  span.style.wordWrap = "break-word";
  span.style.lineHeight = "16px";
  span.style.wordWrap = "break-word";
  span.style.whiteSpace = "normal";
  span.style.padding = "10px";
  span.style.color = "#666";
  div.appendChild(span);
  span.appendChild(document.createTextNode(this.properties.text));

  let img = document.createElement("img");
  img.style.width = "120px";
  img.src = this.properties.imgSrc;
  div.appendChild(img);

  var arrow = document.createElement("div");
  arrow.style.position = "absolute";
  arrow.style.top = "164px";
  arrow.style.left = "106px";
  arrow.style.width = "0";
  arrow.style.height = "0";
  arrow.style.borderColor = "white transparent transparent transparent";
  arrow.style.borderStyle = "solid";
  arrow.style.borderWidth = "10px";
  arrow.style.overflow = "hidden";
  div.appendChild(arrow);

  div.onmouseover = function () {
    this.style.backgroundColor = "skyblue";
    this.style.color = "#fff";
    span.style.color = "#fff";
    arrow.style.top = "164px";
    arrow.style.borderColor = "skyblue transparent transparent transparent";
  };

  div.onmouseout = function () {
    this.style.backgroundColor = "#fff";
    this.style.color = "#333";
    span.style.color = "#333";
    arrow.style.borderColor = "white transparent transparent transparent";
  };
  return div;
}

// 创建自定义覆盖物
// let customOverlay = new BMap.CustomOverlay(createDOM, {
//   point: new BMap.Point(109, 34.3),
//   opacity: 0.5,
//   offsetY: -10,
//   properties: {
//     title: "西安",
//     text: "简介。",
//     imgSrc:
//       "https://bj.bcebos.com/v1/mapopen-pub-jsapigl/assets/images/gugong.png",
//   },
// });

// 加载地图
const initMap = () => {
  // 创建地图实例
  map = new BMap.Map("map_container");
  // 创建点坐标
  const point = new BMap.Point(109, 34.3);
  // 初始化地图，设置中心点坐标和地图级别
  map.centerAndZoom(point, 10);
  map.enableScrollWheelZoom(true);
};
onMounted(() => {
  initMap();
});
</script>
<style lang="less" scoped>
.lxwm {
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

      .top {
        display: flex;
        justify-content: space-between;
      }
      .map {
        width: 100%;
        height: 400px;
        background-color: pink;
        margin-top: 50px;
      }
      .right,
      .left {
        width: 45%;
      }
      .right {
        .desc {
          text-indent: 2em; /* 设置段落首行缩进2em */
          font-size: 18px;
          line-height: 36px;
          color: #666;
          margin-bottom: 30px;
        }
        .phone {
          margin-bottom: 10px;
          font-size: 18px;
          color: #666;
        }
      }
      .left {
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
      .line {
        width: 1px;
        height: 350px;
        background-color: #e2e2e2;
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
