<template>
  <div id="course">
    <div id="title">课程标题</div>

    <div id="content">
      <div id="left">
        <img src="../../assets/contentr_img_video_nor.png" />

        <div id="content_bottom">
          <div>
            <img src="../../assets/content_icon_share_nor.png" />
            <span>分享</span>
            <img src="../../assets/content_icon_qq_highlig.png" />
            <img src="../../assets/content_icon_weixin_highlig.png" />
          </div>

          <div>
            <img src="../../assets/content_icon_handset_nor.png" />
            <span>手机观看</span>
          </div>

          <div>
            <img src="../../assets/content_icon_collect_pre.png" />
            <span>收藏</span>
          </div>
        </div>
      </div>

      <div id="right">
        <div id="current">
          <img src="../../assets/contentr_img_teacher_nor.png" />
          <div>
            <div id="teacher">讲师：XXXX</div>
            <div id="people">听他课程人数：XXX</div>
          </div>
        </div>

        <div id="options">
          <div :class="index==curriculumMenuSelect?'optionsSelect':''" v-for="(item,index) in Optionlist" :key="index+item"
            @click="curriculumMenuSelect = index">{{item}}</div>
        </div>

        <div id="curriculumList" v-show="curriculumMenuSelect==0">
          <div :class="curriculumSelect == index?'course curriculum_select':'course'"
            v-for="(item,index) in Currilist" :key="index+item" @click="curriculumSelect = index">
            <img src="../../assets/content_img_course4_nor.png">
            <div>{{item}}</div>
          </div>
        </div>
        <div id="curriculumInfo">
          <p>
            课程难度：
            <span :class="$parent.$parent.difficulty[1]">简单</span>
          </p>
          <p>使用软件：C4D</p>
          <p>视频时长：25分30秒</p>
          <p>上传时间：2021-02-21   06:00:00</p>
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
        <div id="comment" v-show="menuSelect==1">
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
        Optionlist: ['其它课程', '课程信息'],
        Currilist: ['课程名称1', '课程名称2', '课程名称3', '课程名称4', '课程名称5'],
        Selectlist: ['课程介绍', '学员评价'],
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
        curriculumMenuSelect: 0,
        curriculumSelect: 2,
        replay:{
          content:''
        }
      }
    },
    methods: {
    },
    mounted(){
      console.info()
    }
  }
</script>

<style lang="less" scoped>
  #course {
    text-align: start;
    #title {
      width: 11.25rem;
      margin: 0 auto;
      padding-top: 1.45rem;
      padding-bottom: 0.26rem;

      font-size: 0.22rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
    }

    #content {
      width: 11.25rem;
      height: 4.63rem;
      background: #26262B;
      border-radius: 0.04rem;
      margin: 0 auto;
      display: flex;
      overflow: hidden;

      #left {
        width: 7.8rem;

        img {
          width: 7.8rem;
          height: 4.2rem;
        }

        #content_bottom {
          width: 7.8rem;
          height: 0.43rem;
          background: #222229;
          padding: 0 0.33rem;
          box-sizing: border-box;

          display: flex;
          align-items: center;

          div {
            font-size: 0.13rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
            margin-right: 0.1rem;

            img {
              width: .28rem;
              height: .28rem;
              margin-right: 0.1rem;
            }

            span {
              padding-right: 0.12rem;
            }
          }
        }
      }

      #right {
        width: 3.45rem;
        height: 4.63rem;

        #current {
          width: 3.45rem;
          height: 0.87rem;
          background: #333333;
          box-sizing: border-box;
          padding: 0.09rem 0.13rem 0.18rem 0.13rem;

          display: flex;

          img {
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 50%;
          }

          #teacher {
            height: 0.17rem;
            font-size: 0.17rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;

            margin-top: 0.09rem;
          }

          #people {
            height: 0.15rem;
            font-size: 0.15rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;

            margin-top: 0.09rem;
          }
        }

        #options {
          width: 3.45rem;
          height: 0.45rem;
          background: #26262B;
          border-bottom: 0.01rem solid #333;

          display: flex;
          align-items: center;
          justify-content: space-around;

          div {
            height: 0.45rem;
            line-height: 0.45rem;
            padding: 0 0.05rem;

            font-size: 0.17rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #AAAAAB;
          }

          .optionsSelect {
            color: #FFFFFF;
            box-sizing: border-box;
            border-bottom: 0.02rem solid #91fafa;
          }
        }

        #curriculumList {
          width: 3.45rem;
          height: 3.3rem;

          .course {
            width: 3.45rem;
            height: 0.54rem;

            box-sizing: border-box;
            margin-top: 0.15rem;
            padding-left: 0.14rem;

            display: flex;
            align-items: center;

            img {
              width: 0.72rem;
              height: 0.44rem;
              object-fit: cover;
            }

            div {
              font-size: 0.15rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #999999;

              margin-left: 0.07rem;
            }
          }

          .course:hover {
            div {
              color: #FFF;
            }
          }

          .curriculum_select {
            background: #1B1B1F;

            div {
              color: #FFF;
            }
          }
        }

        #curriculumInfo{
          width: 3.45rem;
          box-sizing: border-box;
          padding-top: 0.3rem;
          padding-left: 0.2rem;

          font-size: 0.15rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
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
      }
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
  }
</style>