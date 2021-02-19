<template>
  <div id="academy">
    <div id="course_menu">
      <div class="menu_class" v-for="(item,index) in courseList" :key="item.id">
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
    <div id="course">
      <div id="course_sort">
        <div class="sort" v-for="item in sortTypeList" :key="item">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'academy',
  data(){
    return {
      courseList:[],
      selectList:[],
      sortTypeList:[
        {
          value:'all',
          name:'综合'
        },
        {
          value:'new',
          name:'最新课程'
        },
        {
          value:'pay',
          name:'最多购买'
        },
        {
          value:'price',
          name:'价格'
        }
      ]
      // asc：正序，desc：倒序
    }
  },
  methods:{
    queryCourse(){
      this.$axios.post('https://wkapi.shejizhizi.com/?s=App.Goods_Goods.Category').then(({data})=>{
        this.courseList = data
        data.forEach(item => {
          this.selectList.push(item.list[0].id)
        });
      }).catch((error)=>{
        console.error(error)
      })
    },
    selectType(index,id){
      this.selectList[index] = id
      this.$forceUpdate()
    }
  },
  mounted(){
    this.queryCourse()
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
    #course{
      width: 100vw;
      background: #1D1F24;
      #course_sort{
        width: 11.25rem;
        height: 0.47rem;
        box-sizing: border-box;
        border-bottom: 0.07rem solid #0E86CA;
        .sort{
          width: 11.25rem;
        }
      }
      #course_list{

      }
    }
  }
</style>
