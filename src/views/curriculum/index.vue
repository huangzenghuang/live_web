<template>
  <div id="curri">
    <span class="title">课程标题</span>

    <div class="content">
      
      <div class="left">>
        <img src="../../assets/contentr_img_video_nor.png"/>
      </div>

      <div class="right">
        <div class="current">
          <span><img src="../../assets/contentr_img_teacher_nor.png"/></span>
          <span class="teacher">讲师：XXXX</span><br/>
          <span class="people">听他课程人数：XXX</span>
        </div> 

       <div class="options"> 
          <span :class="index==OptionsCurren?'optionsLists':'optionsList'" v-for="(item,index) in Optionlist" 
                :key="index+item" @click="OptionsCurrens(index)">{{item}}</span>
       </div> 

        <div class="curriAll">
          <div :class="index==isCurriTable?'curriTables':'curriTable'" v-for="(item,index) in Currilist" 
                :key="index+item" @click="CurriCurrens(index)"
                v-show="OptionsCurren==0">
            <img src="../../assets/content_img_course4_nor.png">
            <span class="curriText">{{item}}</span>
          </div>
          <div class="curriDetail" v-show="OptionsCurren==1">课程信息</div>
        </div>
      </div>
      <div class="content_bottom">
          <span class="share"><img src="../../assets/content_icon_share_nor.png"/></span>
          <span>分享</span>

          <span class="qqwx"><img src="../../assets/content_icon_qq_highlig.png"/></span>
          <span><img src="../../assets/content_icon_weixin_highlig.png"/></span>

          <span class="mobile"><img src="../../assets/content_icon_handset_nor.png"/></span>
          <span>手机观看</span>

          <span class="save"><img src="../../assets/content_icon_collect_pre.png"/></span>
          <span>收藏</span>
      </div>
    </div>
    <div class="network_class_content">
      <div class="select_course_detail">
        <div class="select_item" v-for="(item,index) in Selectlist" :key="index" :class="{'select_active':selectCourse==item}" @click="selectActive(item)">{{item}}</div>
      </div>
        <div class="introduce" v-show="isIntroduce" >
            <img v-for="(item,index) in Selectlist" :key="index" src="../../assets/main_img_introduce_nor.png"/>
        </div>
        <div class="comment" v-show="isComment">
          <div class="Content">
                <div class="Right">
                  <div class="head">
                    <img src="../../assets/content_icon_weixin_nor@2x.png"/>
                    <span class="name">魔兽争霸</span><br/>
                    <span class="level">初级插画师</span>
                  </div>
                </div>
                <div class="Head">
                  <span class="score">课程评分:
                    <img src="../../assets/content_icon_collect_pre.png"/>
                    <img src="../../assets/content_icon_collect_pre.png"/>
                    <img src="../../assets/content_icon_collect_pre.png"/>
                    <img src="../../assets/content_icon_collect_pre.png"/>

                  </span>
                  <span class="level">课程难度:太简单</span>
                </div>
                <div class="bottom"></div>
          </div>
        </div>

        <div class="catalog" v-show="isCatalog">课程目录</div>

    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      Optionlist:['其它课程','课程信息'],
      Currilist:['课程名称1','课程名称2','课程名称3','课程名称4','课程名称5'],
      Selectlist:['课程介绍','学员评价','课程目录'],
      selectCourse:'学员评价',
      commentObject:[
        {
          name:'魔兽争霸',
          level:'初级插画师',
          score:5,
          difficulty:'太简单',
          commentText:'评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALorem ipsum dolor sit amet, consectetur adipiscing elit. A',
          fabulous:999
        },{
          name:'魔兽争霸2',
          level:'中级插画师',
          score:4,
          difficulty:'中等',
          commentText:'评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALorem ipsum dolor sit amet, consectetur adipiscing elit. A',
          fabulous:999
        },{
          name:'魔兽争霸3',
          level:'高级插画师',
          score:3,
          difficulty:'难度大',
          commentText:'评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALorem ipsum dolor sit amet, consectetur adipiscing elit. A',
          fabulous:999
        }
        ],
      OptionsCurren:0,
      isCurriTable:2,
      isIntroduce:false,
      isCatalog:false,
      isComment:true,
    }
  },methods:{
    OptionsCurrens(val){
      this.OptionsCurren=val;
    },CurriCurrens(val){
      this.isCurriTable=val;
    },selectActive(val){
      this.selectCourse = val;
      if("课程介绍"==val){
        this.isComment = false;
        this.isIntroduce = true;
        this.isCatalog = false;
      }else if("课程目录"==val){
        this.isComment = false;
        this.isIntroduce = false;
        this.isCatalog = true;
      }else if("学员评价"==val){
        this.isComment = true;
        this.isIntroduce = false;
        this.isCatalog = false;
      }
    }
  }
}
</script>

<style lang="less" scoped>
#curri{
  .title{
    width: 1rem;
    font-size: 0.2rem;
    margin-top: 1.5rem;
    margin-left:-10.4rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #FFFFFF;
    display:inline-block;
  }
  .network_class_content{
        width: 11.67rem;
        height: 18rem;
        box-sizing: border-box;
        margin-left: 4rem;
        margin-top: 0.5rem;
        background: #1D1F24;
        .select_course_detail{
          display: flex;
          align-items: flex-end;
          margin: 0.5rem 0rem;
          border-bottom: 0.1rem solid #0E86CA;
          box-sizing: border-box;
        }
        .introduce{
            margin-top: -0.5rem;
            img{
              margin-top: 0.2rem;
            }
          }

          .catalog{
            font-size: 0.3rem;
            color: red;
            border-bottom: 0.1rem solid #0E86CA;
          }

          .comment{
            width: 10.5rem;
            height: 15rem;
            background: black;
            border-radius: 0.2rem;
            margin-left: 0.4rem;
            border:0.05rem solid blue;
            .Content{
             width: 10.5rem;
             height: 5rem;  
             border:0.05rem solid red; 
              .Right{
                width: 2rem;
                height: 5rem;  
                border:0.05rem solid salmon; 
                position: absolute;
                .head{
                  margin-left: -1rem;
                  margin-top: 0.2rem;
                  .name{
                    font-size: 0.18rem;
                    font-family: Source Han Sans CN;
                    margin-top:0.05rem;position: absolute;
                    font-weight: 400;
                    color: #FFFFFF;
                  }
                  .level{
                    font-size: 0.12rem;
                    font-family: Source Han Sans CN;
                    margin-top:-0.25rem;
                    margin-left: 0.28rem;
                    font-weight: 400;
                    color: #CCCCCC;
                    position: absolute;
                  }
                }
              } 
              .Head{
                width: 8.2rem;
                height: 0.8rem;  
                border:0.05rem solid salmon; 
                position: absolute;
                margin-left: 2.0rem;
                span{
                  font-size: 0.18rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  margin-top: 0.3rem;
                  position: absolute;
                  color: #FFFFFF;
                }
                .score{
                  margin-left: -3.5rem;
                  img{
                    margin-top: -0.05rem;
                  }
                }
                .level{
                  margin-left: -1rem;
                }
              }  
              .bottom{
                width: 8.2rem;
                height: 3.2rem;  
                border:0.05rem solid yellow; 
                position: absolute;
                margin-top: 0.8rem;
                margin-left: 2.0rem;               
              }                   
            }
          }
        .select_item{
            padding:0 0.8rem;
            height: 0.5rem;
            font-size: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #0099CC;
        }
        .select_active{
            border-radius: 4px 4px 0px 0px ;
            color: #fff;
            background: #0E86CA;
        }
  }
  .content{
    width: 11.67rem;
    height: 5.15rem;
    background: #26262B;
    border-radius: 0.05rem;
    margin: 0.2rem 4rem;
    .left{
      position: absolute;
      margin-left: -0.1rem;
    }
    .content_bottom{
      margin-top: -0.25rem;
      margin-left: -6rem;
        .qqwx{
          margin-left: 0.4rem;
        }
        .mobile{
          margin-left: 0.6rem;
        }
        .save{
          margin-left: 0.7rem;
        }
    }
    .right{
      width: 3.3rem;
      height: 5rem;
      background: #333333;
      border-radius: 0.05rem 0.05rem;
      margin-left: 8.35rem;
      .current{
        margin-top:0.1rem;
        margin-left:0.1rem;
        position: absolute;
        .teacher{
          width: 2rem;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          position: absolute;
          font-weight: 400;
          margin:0.05rem -0.4rem;
          color: #FFFFFF;
        }
        .people{
          width: 2rem;
          font-size: 0.15rem;
          font-family: Source Han Sans CN;
          position: absolute;
          font-weight: 400;
          margin:-0.3rem 0.07rem;
          color: #999999;
        }
      }
      .optionsList{
        width: 1rem;
        height: 1rem;
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        display:inline-block;
        margin-top:1rem;
        font-weight: 400;
        color: #999999;
        position: relative;
        margin-left: 0.3rem;
      }
      .optionsLists{
        width: 1rem;
        height: 0.4rem;
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        display:inline-block;
        margin-top:1rem;
        font-weight: 400;
        color: #FFFFFF;
        position: relative;
        margin-left: 0.3rem;
        border-bottom: 0.02rem solid #91fafa;
      }
      .options{
        margin-left: -0.5rem;
      }
      .curriAll{
        margin-top: -0.5rem;
        margin-left: 2.4rem;
        width: 0.9rem;
        .curriTable{
          margin-left: -2.4rem;
          padding-top:0.1rem;
          height: 0.7rem;
          img{
            margin-left: -2.4rem;
          }
          .curriText{
            width: 2rem;
            font-size: 0.18rem;
            font-family: Source Han Sans CN;
            position: absolute;
            font-weight: 400;
            margin:0.05rem -0.4rem;
            color: #999999;
          }
        }
        .curriTables{
          margin-left: -2.4rem;
          padding-top:0.1rem;
          background: black;
          height: 0.7rem;
          img{
            margin-left: -2.4rem;
            margin-top: -0.01rem;
          }
          .curriText{
            width: 2rem;
            font-size: 0.18rem;
            font-family: Source Han Sans CN;
            position: absolute;
            font-weight: 400;
            margin:0.05rem -0.4rem;
            color: #999999;
          }
        }
      }
    }
  }
}

</style>