<template>
  <div id="home">
    <a-carousel id="carousel" arrows>
      <div slot="prevArrow"  class="custom_slick_arrow custom_slick_arrow_left" style="left: 2.58rem;zIndex: 1"></div>
      <div slot="nextArrow" class="custom_slick_arrow custom_slick_arrow_right" style="right: 2.58rem"></div>
      <div class="carousel" v-for="item in carouselList" :key="item.id">
        <img :src="item.img_url" alt="">
      </div>
    </a-carousel>
    <div class="recommend">
      <div class="recommend_title">
        <div class="recommend_title_left">
          免费公开课
        </div> 
        <div class="recommend_title_right">
          查看更多<div></div>
        </div>
      </div>
      <div class="recommend_carousel_box" @click="GotoCurri">
        <div class="recommend_carousel">
          <div class="recommend_carousel_img">
            <img src="https://alioss.shejizhizi.com/front/首页图标/content_img_banner1_nor@2x.png" alt="">
            <div>直播</div>
          </div>
          <div class="recommend_carousel_content">
            <div class="content_title">
              课程标题
            </div>
            <div class="content_main">
              <p>开课时间：08月19日 20:30开课</p>
              <p>难度：<span class="difficulty_too_easy">太简单</span></p>
              <div class="content_price">免费</div>
            </div>
            <div class="content_user">
              <div>
                <img src="https://alioss.shejizhizi.com/front/首页图标/content_img_teacher_nor@2x.png" alt="">
                用户信息
              </div>
              <div>9999人已报名</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data(){
    return {
      carouselList:[]
    }
  },
  methods:{
    queryCarousel(){
      this.$axios.post('https://wkapi.shejizhizi.com/?s=App.Goods_Goods.BannerList',{
        position:'index'
      }).then(({data})=>{
        this.carouselList = data
      }).catch((error)=>{
        console.error(error)
      })
    },GotoCurri(){
      this.$router.push({path: '/curriculum'});
    }
  },
  mounted(){
    this.queryCarousel()
  }
}
</script>
<style lang="less" scoped>
  #home{
    #carousel{
      width: 100vw;
      height: 5.06rem;
      margin: 0 auto;
      margin-bottom: 0.53rem;
      z-index: 0;
      /deep/.slick-dots-bottom{
        li>button{
          width: 0.11rem;
          height: 0.11rem;
          background: #999999;
          border-radius: 50%;
        }
        .slick-active>button{
          width: 0.51rem;
          height: 0.11rem;
          background: #66CCFF;
          border-radius: 0.06rem;
        }
      }
      .custom_slick_arrow{
        width: 0.57rem;
        height: 0.84rem;
      }
      .custom_slick_arrow_left{
        background: url('https://alioss.shejizhizi.com/front/首页图标/banner_btn_more_nor@2x.png') no-repeat center center / cover;
      }
      .custom_slick_arrow_left:hover{
        transform: rotate(180deg);
        background: url('https://alioss.shejizhizi.com/front/首页图标/banner_btn_more_highlig@2x.png') no-repeat center center / cover;
      }
      .custom_slick_arrow_right{
        transform: rotate(180deg);
        background: url('https://alioss.shejizhizi.com/front/首页图标/banner_btn_more_nor@2x.png') no-repeat center center / cover;
      }
      .custom_slick_arrow_right:hover{
        transform: rotate(0deg) !important;
        background: url('https://alioss.shejizhizi.com/front/首页图标/banner_btn_more_highlig@2x.png') no-repeat center center / cover;
      }
      .carousel{
        img{
          width: 100vw;
          height: 5.06rem;
          object-fit: cover;
        }
      }
    }
    .recommend{
      width: 11.25rem;
      margin: 0 auto;
      .recommend_title{
        display: flex;
        justify-content: space-between;
        width: 11.25rem;
        height: 0.22rem;
        margin-bottom: 0.18rem;
        .recommend_title_left{
          height: 0.22rem;
          font-size: 0.22rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 0.22rem;
        }
        .recommend_title_right{
          color: #FFFFFF;
          height: 0.22rem;
          font-size: 0.22rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 0.22rem;
          div{
            display: inline-block;
            width: 0.23rem;
            height: 0.19rem;
            margin-left: 0.08rem;
            background: url('https://alioss.shejizhizi.com/front/首页图标/content_icon_genduo_nor@2x.png') no-repeat center center / cover;
          }
        }
        .recommend_title_right:hover{
          color: #66CCFF;
          div{
            background: url('https://alioss.shejizhizi.com/front/首页图标/content_icon_genduo_highlig@2x.png') no-repeat center center / cover;
          }
        }
      }
      .recommend_carousel_box{
        display: flex;
        flex-wrap: wrap;
        .recommend_carousel{
          width: 2.66rem;
          height: 3.02rem;
          background: #16202D;
          box-sizing: border-box;
          border: 0.01rem solid #66CCFF;
          border-radius: 0.04rem;
          .recommend_carousel_img{
            position: relative;
            img{
              width: 2.64rem;
              height: 1.61rem;
              border-radius: 0.04rem 0.04rem 0rem 0rem;
            }
            div{
              position: absolute;
              top: 0.08rem;
              right: 0.07rem;
              padding: 0 0.12rem;
              height: 0.28rem;
              background:rgba(0, 0, 0, 0.3);
              border-radius: 0.04rem;

              text-align: center;
              line-height: 0.28rem;
              font-size: 0.13rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #FFFFFF;
            }
          }
          .recommend_carousel_content{
            height: 1.47rem;
            text-align: start;
            box-sizing: border-box;
            padding: 0.15rem 0.14rem 0.21rem 0.14rem;
            .content_title{
              height: 0.17rem;
              font-size: 0.17rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #FFFFFF;
              margin-bottom: 0.14rem;
            }
            .content_main{
              height: 0.42rem;
              font-size: 0.15rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 0.21rem;
              position: relative;
              P{
                margin: 0;
              }
              .content_price{
                height: 0.17rem;
                font-size: 0.17rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFA800;
                line-height: 0.17rem;
                position: absolute;
                right: 0;
                bottom: 0;
              }
            }
            .content_user{
              height: 0.31rem;
              display: flex;
              align-items: center;
              justify-content: space-between;

              margin-top: 0.17rem;
              div{
                font-size: 0.13rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #999999;
                img{
                  width: 0.31rem;
                  height: 0.31rem;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
