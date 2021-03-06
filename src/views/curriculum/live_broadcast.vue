<template>
  <div id="course">
    <div id="title">
      <img src="../../assets/contentr_img_teacher_nor.png" />
      <div id="text">
        <div>课程标题</div>
        <div id="teacher">
          讲师：XXXX
          <div id="date">
            开课时间：2021-02-12   14:00-16:00
          </div>
        </div>
      </div>
    </div>

    <div id="content">
      <div id="content_left">
        <img id="video" src="../../assets/contentr_img_video_nor.png" />
        <div id="sharc">
          <img src="../../assets/content_icon_start_nor@2x.png" />
          <div>即将开播</div>
        </div>
      </div>
      <div id="content_right">
        <div id="content_info">
          <div id="content_title">
            <div>距离开课仅剩</div>
            <div id="date">3天16小时5分20秒</div>
          </div>
          <div id="content_price">
            售价:<span>￥1253</span>
          </div>
        </div>
        <div id="content_coupon">
          <div id="coupon_price">
            ￥<span>100</span>
          </div>
          <div id="coupon_info">
            <div>优惠券</div>
            <span>满1999元使用</span>
          </div>
          <div id="coupon_button">
            立即领取
          </div>
        </div>
        <div id="content_apply">
          立即报名
        </div>
        <div id="content_user">
          <div id="content_user_title">
            已报名学员
          </div>
          <div id="content_user_list">
            <div class="content_user">
              <img src="" alt="">
              <div>用户名</div>
            </div>
            
            <div class="content_user">
              <img src="" alt="">
              <div>用户名</div>
            </div>
            
            <div class="content_user">
              <img src="" alt="">
              <div>用户名</div>
            </div>
            
            <div class="content_user">
              <img src="" alt="">
              <div>用户名</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer">
      <div id="details">
        <div id="menu">
          <div v-for="(item,index) in Selectlist" :key="index" :class="{'menu_select':menuSelect==index}" @click="menuSelect=index">{{item}}</div>
        </div>
        <div id="introduce" v-show="menuSelect==0">
          <img v-for="(item,index) in Selectlist" :key="index" src="../../assets/main_img_introduce_nor.png" />
        </div>
        <div id="course_catalogue" v-show="menuSelect==1">
          <div class="course_catalogue">
            <div class="course_catalogue_title">
              <div>
                第一章  课程标题设计教程
              </div>
              <div>
                <img src="https://alioss.shejizhizi.com/front/curriculum/contentr_btn_more_selected@2x.png" alt="">
              </div>
            </div>
            <div class="course_catalogue_item">
              <img src="../../assets/main_img_introduce_nor.png" />
              <div>
                <div class="course_catalogue_item_title">【第一节】课程标题设计</div>
                <div class="course_catalogue_item_popularity">9999人已学习</div>
                <div class="course_catalogue_item_status">
                  <img src="https://alioss.shejizhizi.com/front/curriculum/contentr_icon_study_nor@2x.png" alt="">
                  <div>已学习</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="comment" v-show="menuSelect==2">
          <div class="comment" v-for="(item,index) in commentObject" :key="index">
            <div class="comment_left">
              <div class="comment_user">
                <img src="../../assets/content_icon_weixin_nor@2x.png" />
                <div>
                  <div class="name">{{item.name}}</div>
                  <div class="level">{{item.level}}</div>
                </div>
              </div>
              <div class="comment_honor">
                <div>
                  <img src="../../assets/content_icon_weixin_nor@2x.png" />
                  微信认证
                </div>
              </div>
            </div>
            <div class="comment_right">
              <div class="comment_score">
                <div>
                  课程评分:
                  <a-rate :default-value="2.5" allow-half />
                </div>
                <div>课程难度:{{item.difficulty}}</div>
              </div>
              <div class="comment_info">
                <div class="comment_date">02月01日 17:02</div>
                <div class="comment_text">评论内容：{{item.commentText}}</div>
                <div class="comment_img">
                  <div>
                    <img src="../../assets/content_icon_weixin_nor@2x.png" alt="">
                  </div>
                  <div>  
                    <img src="../../assets/content_icon_weixin_nor@2x.png" alt="">
                    <img src="../../assets/content_icon_weixin_nor@2x.png" alt="">
                    <img src="../../assets/content_icon_weixin_nor@2x.png" alt="">
                    <img src="../../assets/content_icon_weixin_nor@2x.png" alt="">
                  </div>
                </div>
              </div>
              <div class="comment_reply">
                回复<span>|</span><img src="https://alioss.shejizhizi.com/front/course/content_icon_good_nor.png" />⠀{{item.fabulous}}赞
              </div>
            </div>
          </div>
        </div>
        <div id="reply" v-show="replay.id">
          <div id="textarea">
            <a-textarea v-model="replay.content" placeholder="回复风暴英雄：" :rows="4" :maxLength="200"></a-textarea>
            <div>{{replay.content.length}}/200</div>
          </div>
          <div>
            发表评论
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        Selectlist: ['课程介绍', '课程目录', '学员评价'],
        selectCourse: '学员评价',
        commentObject: [{
          name: '魔兽争霸',
          level: '初级插画师',
          score: 5,
          difficulty: '太简单',
          commentText: '评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget',
          fabulous: 999
        }, {
          name: '魔兽争霸2',
          level: '中级插画师',
          score: 4,
          difficulty: '中等',
          commentText: '评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget',
          fabulous: 999
        }, {
          name: '魔兽争霸3',
          level: '高级插画师',
          score: 3,
          difficulty: '难度大',
          commentText: '评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget',
          fabulous: 999
        }],
        menuSelect:0,
        curriculumSelect: 2,
        replay:{
          content:''
        }
      }
    },
    methods: {
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  #course {
    text-align: start;
    #title {
      width: 11.25rem;
      height: 0.83rem;
      margin: 0 auto;
      margin-top: 1.45rem;
    
      display: flex;
      align-items: center;
      img{
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        margin-right: 0.19rem;
      }
      #text{
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        #teacher{
          display: flex;
          font-size: 0.19rem;
          #date{
            font-size: 0.19rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
            margin-left: 0.25rem;
          }
        }
      }
    }

    #content {
      width: 11.25rem;
      height: 4.3rem;
      background: #26262B;
      border-radius: 0.04rem;

      margin: 0 auto;
      display: flex;
      overflow: hidden;
      #content_left{
        width: 7.65rem;
        height: 4.3rem;
        img{
          width: 7.65rem;
          height: 4.3rem;
        }
      }
      #content_right{
        width: 3.6rem;
        box-sizing: border-box;
        padding: 0 0.13rem;
        background: #26262B;
        #content_info{
          height: 0.35rem;
          display: flex;
          justify-content: space-between;
          margin-top: 0.25rem;
          #content_title{
            height: 0.35rem;
            font-size: 0.13rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 0.2rem;
            #date{
              color: #999999;
            }
          }
          #content_price{
            font-size: 0.13rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            span{
              font-size: 0.35rem;
              line-height: 0.35rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #F95D1E;
            }
          }
        }
        #content_coupon{
          width: 3.35rem;
          height: 0.98rem;
          margin-top: 0.32rem;

          display: flex;
          justify-content: space-between;
          background: url(https://alioss.shejizhizi.com/front/curriculum/content_img_coupon_nor@2x.png) no-repeat center center / cover;
          #coupon_price{
            height: 0.43rem;
            font-size: 0.28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            margin-left: 0.15rem;
            span{
              font-size: 0.43rem;
              line-height: 0.43rem;
            }
          }
          #coupon_info{
            height: 0.43rem;
            font-size: 0.3rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            span{
              height: 0.13rem;
              font-size: 0.13rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #FFFFFF;
            }
          }
          #coupon_button{
            width: 0.75rem;
            height: 0.32rem;
            background: #294096;
            box-sizing: border-box;
            border: 0.01rem solid #66CCFF;
            border-radius: 0.18rem;

            text-align: center;
            line-height: 0.3rem;
            font-size: 0.13rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
        #content_apply{
          width: 3.35rem;
          height: 0.41rem;
          background: linear-gradient(180deg, #027BB4, #0E98D7);
          border: 0.01rem solid #27AEED;
          border-radius: 0.04rem;
          margin-top: 0.29rem;

          text-align: center;
          line-height: 0.41rem;
          font-size: 0.15rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
        }
        #content_user{
          #content_user_title{
            font-size: 0.13rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            margin-top: 0.29rem;
          }
          #content_user_list{
            width: 3.33rem;
            height: 1.01rem;
            background: #333333;
            border: 0.01rem solid #666666;
            border-radius: 0.04rem;
            box-sizing: border-box;
            padding: 0.17rem 0.2rem;
            margin-top: 0.1rem;
            overflow: hidden;

            display: flex;
            align-items: center;
            .content_user{
              margin-right: 0.37rem;
              img{
                width: 0.46rem;
                height: 0.46rem;
                background: #CCCCCC;
                border-radius: 50%;
              }
              div{
                width: 0.39rem;
                font-size: 0.13rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #999999;
                margin-top: 0.08rem;
              }
            }
          }
        }
      }
    }
    #footer{
      width: 100vw;
      overflow: hidden auto;
      background: #222632;
      margin-top: 0.45rem;
      #details {
        width: 11.25rem;
        margin: 0 auto;
        margin-top: 0.68rem;
        background: #1D1F24;
        #menu {
          height: 0.6rem;
          box-sizing: border-box;
          border-bottom: 0.07rem #0E86CA solid;

          display: flex;
          div{
            width: 2.39rem;
            height: 0.54rem;

            text-align: center;
            font-size: 0.22rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FEFEFE;
            line-height: 0.54rem;
          }
          .menu_select{
            color: #FFF;
            background: #0E86CA;
            border-radius: 0.04rem 0.04rem 0 0;
          }
        }
        
        #introduce {
          background: rgb(19, 19, 19);

          img {
            margin-top: 0.2rem;
          }
        }

        #comment {
          width: 10.5rem;
          border-radius: 0.2rem;
          margin-left: 0.4rem;
          margin-top: 0.4rem;
          .comment {
            background: #1D1F24;
            border-radius: 0.04rem;
            margin-bottom: 0.2rem;

            display: flex;
            justify-content: space-between;
            border-bottom: 0.01rem solid #333333;

            .comment_left {
              width: 2.30rem;
              .comment_user{
                display: flex;
                img{
                  width: 0.47rem;
                  height: 0.47rem;
                  border-radius: 50%;
                  margin-right: 0.07rem;
                }
                .name{
                  font-size: 0.21rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #FFFFFF;
                }
                .level{
                  font-size: 0.17rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #CCCCCC;
                }
              }
              .comment_honor{
                margin-top: 0.37rem;
                margin-left: 0.3rem;
                div{
                  width: 1.61rem;
                  height: 0.38rem;
                  background: #212C3D;
                  border-radius: 0.04rem;
                  margin-bottom: 0.1rem;

                  line-height: 0.38rem;
                  text-align: center;
                  font-size: 0.17rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #66CCFF;
                  img{
                    width: 0.22rem;
                    height: 0.22rem;
                    object-fit: cover;
                  }
                }
              }
            }
            .comment_right{
              width: 8.27rem;
              margin-left: 0.37rem;
              .comment_score{
                width: 8.27rem;
                height: 0.66rem;
                background: #121A24;
                border-radius: 0.04rem;
                padding-left: 0.28rem;
                box-sizing: border-box;
                display: flex;

                line-height: 0.66rem;
                font-size: 0.21rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                div{
                  margin-right: 1rem;
                }
              }
              .comment_info{
                width: 8.27rem;
                .comment_date{
                  margin-top: 0.3rem;
                  margin-bottom: 0.2rem;

                  font-size: 0.15rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #999999;
                }
                .comment_text{
                  width: 8.27rem;
                  font-size: 0.13rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #FFFFFF;
                }
                .comment_img{
                  width: 7.09rem;
                  display: flex;
                  margin-top: 0.17rem;
                  div:first-child{
                    margin-right: 0.09rem;
                    img{
                      width: 4.48rem;
                      height: 2.51rem;
                    }
                  }
                  img{
                    width: 1.22rem;
                    height: 1.22rem;
                    border-radius: 0.04rem;
                  }
                }
              }
              .comment_reply{
                width: 8.27rem;
                height: 0.87rem;

                line-height: 0.87rem;
                text-align: end;
                font-size: 0.19rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #999999;
                span{
                  padding: 0 .19rem;
                }
                img{
                  width: 0.22rem;
                  height: 0.22rem;
                  object-fit: cover;
                }
              }
            }
          }
        }

        .select_item {
          padding: 0 0.8rem;
          height: 0.5rem;
          font-size: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #0099CC;
        }

        .select_active {
          border-radius: 4px 4px 0px 0px;
          color: #fff;
          background: #0E86CA;
        }

        #reply{
          #textarea{
            position: relative;
            /deep/.ant-input-affix-wrapper.ant-input-affix-wrapper-textarea-with-clear-btn .ant-input{
              width: 11.25rem;
              height: 1.41rem;
              background: #1F2D3E;
              border: 0.01rem solid #141D30;
              box-shadow: 0 0.04rem 0.05rem 0 rgba(4, 23, 34, 0.2);
              border-radius: 0.04rem;
              font-size: 0.19rem;
            }
            div{
              position: absolute;
              bottom: 0.1rem;
              right: 0.34rem;

              height: 0.21rem;
              font-size: 0.21rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: #FFFFFF;
              opacity: 0.5;
            }
          }
        }

        #course_catalogue{
          .course_catalogue{
            padding-bottom: 0.53rem;
            .course_catalogue_title{
              display: flex;
              align-items: center;
              justify-content: space-between;

              width: 10.78rem;
              height: 0.75rem;
              padding: 0 0.3rem;
              box-sizing: border-box;
              margin: 0 auto;
              background: #222632;
              border-radius: 0.04rem;
              margin-top: 0.21rem;
              div:first-child{
                width: 2.57rem;
                font-size: 0.22rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
              }
              img{
                width: 0.34rem;
                height: 0.34rem;
                object-fit: cover;
              }
            }
            .course_catalogue_item{
              width: 10.78rem;
              height: 1.54rem;
              background: #222632;
              border-radius: 0.04rem;
              margin: 0 auto;
              margin-top: 0.19rem;

              display: flex;
              img{
                width: 3.94rem;
                height: 1.54rem;
                object-fit: cover;
              }
              >div{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 6.84rem;
                height: 1.54rem;
                .course_catalogue_item_title{
                  width: 3.28rem;
                  font-size: 0.17rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #FFFFFF;

                  margin-left: 0.23rem;
                }
                .course_catalogue_item_popularity{
                  font-size: 0.17rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #999999;
                }
                .course_catalogue_item_status{
                  display: flex;
                  align-items: center;
                  margin-right: 0.32rem;
                  img{
                    width: 0.19rem;
                    height: 0.19rem;
                    object-fit: cover;
                    margin-right: 0.09rem;
                  }
                  div{
                    font-size: 0.17rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #999999;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>