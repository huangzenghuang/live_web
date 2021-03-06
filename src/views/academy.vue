<template>
  <div id="academy">
    <div id="course_menu">
      <div class="menu_class" v-for="(item,index) in courseClassList" :key="item.id">
        <div class="menu_title">
          {{item.name}}：
        </div>
        <div class="menus">
          <div v-for="menu in item.list" :key="item.id+'-'+menu.id"
             :class="'menu '+(selectList[index]==menu.id?'menu_select':'')" @click="selectType(index,menu.id)">
            {{menu.name}}
          </div>
        </div>
      </div>
    </div>
    <div id="course_sort_list">
      <div id="course_sort">
        <div v-for="(item,index) in sortTypeList" :key="item" :class="sort+' sort '+(sortType==index?'sort_select':'')" @click="clickSort(index)">
          {{item}}
          <div></div>
        </div>
      </div>
    </div>
    <div id="course_list">
      <div class="recommend_carousel" v-for="item in courseList" :key="item.id">
        <div class="recommend_carousel_img">
          <img :src="item.image" alt="">
          <div>{{item.type_str}}</div>
        </div>
        <div class="recommend_carousel_content">
          <div class="content_title">
            {{item.title}}
          </div>
          <div class="content_main">
            <p>开课时间：{{item.curriculum_time}}开课</p>
            <p>难度：<span :class="difficulty[item.level]">{{item.level_str}}</span></p>
            <div class="content_price">免费</div>
          </div>
          <div class="content_user">
            <div>
              <img :src="item.avatar" alt="">
              {{item.nickname}}
            </div>
            <div>{{item.applys}}人已报名</div>
          </div>
        </div>
      </div>
    </div>
    <wk-footer></wk-footer>
  </div>
</template>

<script>
export default {
  name: 'academy',
  data(){
    return {
      courseClassList:[],
      selectList:[],
      courseList:[],
      sortTypeList:['综合','最新课程','最多购买','价格'],
      sortValueList:['all','new','pay','price'],
      sortType:0,
      sort:'asc',
      difficulty:['','difficulty_too_easy','difficulty_easy','difficulty_medium','difficulty_difficult','difficulty_too_difficult']
    }
  },
  methods:{
    queryCourseClass(){
      this.$axios.post('https://wkapi.shejizhizi.com/?s=App.Goods_Goods.Category').then(({data})=>{
        this.courseClassList = data
        data.forEach(item => {
          this.selectList.push(item.list[0].id)
        });
        this.queryCourse()
      }).catch((error)=>{
        console.error(error)
      })
    },
    selectType(index,id){
      this.selectList[index] = id
      this.$forceUpdate()
    },
    clickSort(i){
      if(this.sortType == i){
        this.sort = 'desc'
      }else{
        this.sortType=i
        this.sort = 'asc'
      }
    },
    queryCourse(){
      this.$axios.post('https://wkapi.shejizhizi.com/?s=App.Goods_Goods.CategoryGoods',{
        'cat_ids':this.selectList.join(),
        'order':this.sortValueList[this.sortType]+':'+this.sort,
        'page_size':20
      }).then(({data})=>{
        this.courseList = data
      }).catch((error)=>{
        console.error(error)
      })
    }
  },
  mounted(){
    this.queryCourseClass()
  }
}
</script>
<style lang="less" scoped>
  #academy{
    margin-top: 1.26rem;
    #course_menu{
      width: 11.25rem;
      height: max-content;
      background: #24272E;
      border: 0.01rem solid #333333;
      border-radius: 0.08rem;
      margin: 0 auto;
      margin-bottom: 0.67rem;
      .menu_class{
        width: 10.51rem;
        min-height: .67rem;
        padding: 0.15rem 0;
        border-bottom: 0.01rem solid #336699;
        margin: 0 auto;

        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .menu_title{
          width: 1rem;
          height: 0.3rem;
          margin-right: 0.64rem;
          text-align: left;
          
          font-size: 0.19rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #FFFFFF;
        }
        .menus{
          display: flex;
          flex-wrap: wrap;
          max-width: 8.87rem;
          .menu{
            min-width: 0.94rem;
            height: 0.37rem;
            padding: 0 0.3rem;
            box-sizing: border-box;
            margin-right: 0.3rem;
          
            text-align: center;
            line-height: 0.37rem;
            font-size: 0.19rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
          }
          .menu:hover{
            color: #FFFFFF;
          }
          .menu_select{
            min-width: 0.94rem;
            height: 0.37rem;
            background: #0E86CA;
            border-radius: 0.04rem;
          
            text-align: center;
            line-height: 0.37rem;
            font-size: 0.19rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
      }
      .menu_class:last-child{
        border: 0;
      }
    }
    #course_sort_list{
      width: 100vw;
      background: #1D1F24;
      #course_sort{
        width: 11.25rem;
        height: 0.47rem;
        margin: 0 auto;
        box-sizing: border-box;
        border-bottom: 0.07rem solid #0E86CA;

        display: flex;
        align-items: center;
        .sort{
          display: flex;
          align-items: center;
          height: 0.47rem;
          padding: 0 0.53rem;

          font-size: 0.19rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #999999;
          >div{
            width: 0.14rem;
            height: 0.14rem;
            margin-left: 0.12rem;
            background: url(https://alioss.shejizhizi.com/front/首页图标/contentr_icon_price_nor@2x.png) no-repeat center center / cover;
          }
        }
        .sort:hover{
          color: #FFFFFF;
        }
        .sort_select{
          color: #fff;
          background: #0E86CA;
          border-radius: 0.04rem;
          >div{
            background: url(https://alioss.shejizhizi.com/front/首页图标/contentr_icon_trise_selected@2x.png) no-repeat center center / cover;
          }
        }
        .asc{
          >div{
            transform: rotate(180deg);
          }
        }
      }
      #course_list{

      }
    }
    #course_list{
      display: flex;
      flex-wrap: wrap;
      width: 11.25rem;
      margin: 0 auto;
      margin-top: 0.25rem;
      .recommend_carousel{
        width: 2.66rem;
        height: 3.02rem;
        background: #16202D;
        box-sizing: border-box;
        border: 0.01rem solid #66CCFF;
        border-radius: 0.04rem;
        margin-right: 0.2rem;
        margin-bottom: 0.49rem;
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
      .recommend_carousel:nth-child(4n){
        margin-right: 0rem;
      }
      .recommend_carousel:nth-child(n+15){
        margin-bottom: 0rem;
      }
      .recommend_carousel:hover{
        position: relative;
        bottom: 0.09rem;
      }
    }
  }
</style>
