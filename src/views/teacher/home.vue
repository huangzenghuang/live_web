<template>
    <div id="box">
        <div id="info">
            <div id="name">
                <div>老师姓名</div>
                <span>标签</span>
            </div>
            <div id="certified">
                <img src="" alt="">
                设计之子官方认证：设计之子知名讲师
            </div>
            <div id="info_details">
                <div>国内知名设计师</div>
                老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介
                老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介
                老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介
            </div>
        </div>
        <div id="details">
            <div id="menu">
                <div v-for="(item,index) in menu" :key="item+index" :class="menuSelect==index?'menu menu_select':'menu'" @click="menuSelect = index">
                    {{item}}
                </div>
            </div>
            <div id="curriculum" v-show="menuSelect == 0">
                <div class="curriculum" v-for="item in curriculumList" :key="item.id">
                    <img :src="item.img" alt="">
                    <div class="curriculum_info">
                        <div class="curriculum_title">
                            {{item.title}}
                        </div>
                        <div class="curriculum_date">
                            {{item.date}}
                        </div>
                        <div class="curriculum_rests">
                            <div>难度：{{item.difficulty}}</div>
                            <div>{{item.num}}人已报名</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="live" v-show="menuSelect == 1">
                <div class="comment" v-for="item in commentList" :key="item.id">
                    <div class="comment_top">
                        <img :src="item.avatar" alt="">
                        <div>
                            <div class="comment_name">
                                {{item.name}}
                                <span v-for="item in item.label" :key="item">
                                    {{item}}
                                </span>
                            </div>
                            <div class="comment_date">
                                {{item.date}}
                            </div>
                            <div class="comment_content">
                                {{item.message}}
                            </div>
                        </div>
                    </div>
                    <div class="comment_img">
                        <img v-for="item in item.img" :key="item" :src="item" alt="">
                    </div>
                    <div class="comment_bottom">
                        <div class="comment_share">
                            <div></div>
                            {{item.shareNum}}
                        </div>
                        <div class="comment_live">
                            <div></div>
                            {{item.commentNum}}
                        </div>
                        <div :class="item.commentStatus?'comment_live comment_select':'comment_live'">
                            <div></div>
                            {{item.commentNum}}
                        </div>
                    </div>
                    <div class="comments">
                        <div class="comment_item" v-for="item in item.comments" :key="item.id">
                            <img :src="item.avatar" alt="">
                            <div>
                                <div class="comment_name">
                                    {{item.name}}
                                </div>
                                <div class="comment_date">
                                    {{item.date}}
                                </div>
                                <div class="comment_content">
                                    评论内容：{{item.message}}
                                </div>
                                <div class="comment_more">
                                    <div>回复</div>
                                    <div>
                                        <div class="comment_live"></div>
                                        {{item.commentNum}}赞
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="see_all">
                        全部{{item.commentList}}条回复，<span>查看全部</span>
                    </div>
                </div>
            </div>
            <div id="share" v-show="menuSelect == 2">
                <div class="comment" v-for="item in commentList" :key="item.id">
                    <div class="comment_top">
                        <img :src="item.avatar" alt="">
                        <div>
                            <div class="comment_name">
                                {{item.name}}
                                <span v-for="item in item.label" :key="item">
                                    {{item}}
                                </span>
                            </div>
                            <div class="comment_date">
                                {{item.date}}
                            </div>
                            <div class="comment_content">
                                {{item.message}}
                            </div>
                        </div>
                    </div>
                    <div class="comment_img">
                        <img v-for="item in item.img" :key="item" :src="item" alt="">
                    </div>
                    <div class="comment_bottom">
                        <div class="comment_share">
                            <div></div>
                            {{item.shareNum}}
                        </div>
                        <div class="comment_live">
                            <div></div>
                            {{item.commentNum}}
                        </div>
                        <div :class="item.commentStatus?'comment_live comment_select':'comment_live'">
                            <div></div>
                            {{item.commentNum}}
                        </div>
                    </div>
                    <div class="comments">
                        <div class="comment_item" v-for="item in item.comments" :key="item.id">
                            <img :src="item.avatar" alt="">
                            <div>
                                <div class="comment_name">
                                    {{item.name}}
                                </div>
                                <div class="comment_date">
                                    {{item.date}}
                                </div>
                                <div class="comment_content">
                                    评论内容：{{item.message}}
                                </div>
                                <div class="comment_more">
                                    <div>回复</div>
                                    <div>
                                        <div class="comment_live"></div>
                                        {{item.commentNum}}赞
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="see_all">
                        全部{{item.commentList}}条回复，<span>查看全部</span>
                    </div>
                </div>
            </div>
            <div id="works" v-show="menuSelect == 3">
                <div class="work" v-for="item in workList" :key="item.id">
                    <div class="work_top">
                        <img :src="item.img" alt="">
                        <span>{{item.span}}</span>
                    </div>
                    <div class="work_bottom">
                        <div class="work_title">
                            {{item.title}}
                        </div>
                        <div class="work_info">
                            <img :src="item.avatar" alt="">
                            <div>
                                <div class="work_name">
                                    {{item.name}}
                                </div>
                                <div class="work_date">
                                    {{item.date}}
                                </div>
                            </div>
                            <div>
                                <div class="comment_live">
                                    <div></div>
                                    {{item.liveNum}}赞
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="reply" v-show="reply.id">
                <div id="textarea">
                    <a-textarea v-model="reply.content" placeholder="回复风暴英雄：" :rows="4" :maxLength="200"></a-textarea>
                    <div>{{reply.content.length}}/200</div>
                </div>
                <div id="reply_button">
                    发表评论
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'teacher_home',
    data(){
        return {
            menu:['课程','Ta喜欢','分享','学生作品'],
            menuSelect:3,
            curriculumList:[
                {
                    id:1,
                    img:'',
                    num:1,
                    date:'2010-20-30 20:30:10',
                    difficulty:'难度',
                    title:'标题'
                },
                {
                    id:1,
                    img:'',
                    num:1,
                    date:'2010-20-30 20:30:10',
                    difficulty:'难度',
                    title:'标题'
                },
                {
                    id:1,
                    img:'',
                    num:1,
                    date:'2010-20-30 20:30:10',
                    difficulty:'难度',
                    title:'标题'
                }
            ],
            commentList:[
                {
                    id:1,
                    name:'xiaoming',
                    avatar:'1',
                    label:[
                        'asd',
                        'das'
                    ],
                    date:'2010-10-12 20:12:42',
                    message:'#XXX话题# Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
                    img:[''],
                    commentNum:2000,
                    commentStatus:1,
                    commentNum:100,
                    shareNum:20,
                    commentList:20,
                    comments:[
                        {
                            id:123,
                            name:'123',
                            avatar:'1',
                            date:'2010-10-12 20:12:42',
                            message:'内容',
                            commentNum:2000
                        }
                    ]
                }
            ],
            workList:[
                {
                    id:12,
                    name:'名字',
                    avatar:'1',
                    date:'02月14日    11：56',
                    title:'标题',
                    liveNum:20,
                    span:'进步之星',
                    img:''
                }
            ],
            reply:{
                id:1,
                content:''
            }
        }
    },
    modules:{

    },
    mounted(){

    }
}
</script>
<style lang="less" scoped>
    #box{
        #info{
            width: 11.25rem;
            height: 5.21rem;
            background: #aaa;
            margin: 0 auto;
            margin-top: 1.38rem;
            margin-bottom: 0.34rem;

            box-sizing: border-box;
            padding: 1.79rem 0.59rem 0 5.27rem;
            #name{
                width: 5.4rem;
                height: 0.37rem;
                font-family: Source Han Sans CN;
                font-weight: 400;

                display: flex;
                align-items: flex-end;
                div{
                    font-size: 0.37rem;
                    line-height: 0.37rem;
                    color: #FFFFFF;
                }
                span{
                    height: 0.24rem;
                    line-height: 0.22rem;
                    background: rgba(24, 24, 24, 0.5);
                    border: 0.01rem solid #999999;
                    border-radius: 0.12rem;

                    font-size: 0.13rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #999999;
                    box-sizing: border-box;
                    padding: 0 0.125rem;
                }
            }
            #certified{
                height: 0.34rem;
                line-height: 0.34rem;
                font-size: 0.22rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                margin-top: 0.16rem;
                img{
                    width: 0.34rem;
                    height: 0.34rem;
                    object-fit: cover;
                }
            }
            #info_details{
                width: 5.4rem;
                height: 0.97rem;
                font-size: 0.15rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #CCCCCC;
                margin-top: 0.37rem;
                div{
                    margin-bottom: 0.08rem;
                    font-size: 0.17rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }
        }
        #details{
            width: 100vw;
            background: #222632;
            #menu{
                width: 11.25rem;
                height: 0.66rem;
                background: #1D1F24;
                border-radius: 0.04rem;
                margin: 0 auto;
                margin-bottom: 0.07rem;
                
                display: flex;
                align-items: center;
                justify-content: space-around;
                .menu{
                    min-width: 0.94rem;
                    height: 0.66rem;

                    text-align: center;
                    line-height: 0.66rem;
                    font-size: 0.22rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #999;
                }
                .menu:hover{
                    color: #fff;
                }
                .menu_select{
                    box-sizing: border-box;
                    border-bottom: 0.02rem solid #66CCFF;
                }
            }
            #curriculum{
                width: 11.25rem;
                background: #1D1F24;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                box-sizing: border-box;
                padding: 0 0.28rem;
                padding-top: 0.78rem;
                margin: 0 auto;
                .curriculum{
                    display: flex;
                    width: 5.25rem;
                    height: 1.76rem;
                    background: #16202D;
                    border: 0.01rem solid #66CCFF;
                    border-radius: 0.04rem;
                    position: relative;
                    margin-bottom: 0.45rem;
                    img{
                        width: 2.89rem;
                        height: 1.76rem;
                    }
                    .curriculum_info{
                        width: 2.36rem;
                        box-sizing: border-box;
                        padding-left: 0.12rem;
                        .curriculum_title{
                            width: 2.17rem;
                            height: 1.06rem;
                            font-size: 0.17rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 0.22rem;
                            margin-top: 0.13rem;
                        }
                        .curriculum_date{
                            height: 0.14rem;
                            font-size: 0.15rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #999999;
                            line-height: 0.22rem;

                        }
                        .curriculum_rests{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            height: 0.15rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 0.22rem;
                            margin-top: 0.17rem;
                            div:first-child{
                                font-size: 0.15rem;
                            }
                            div:last-child{
                                color: #999999;
                                box-sizing: border-box;
                                padding-right: 0.15rem;
                            }
                        }
                    }
                }
                .curriculum:hover{
                    bottom: 0.1rem;
                }
            }
            #live{
                width: 11.25rem;
                background: #1D1F24;
                border-radius: 0.04rem;
                margin: 0 auto;
            }
            #share{
                width: 11.25rem;
                background: #1D1F24;
                border-radius: 0.04rem;
                margin: 0 auto;
            }
            .comment{
                width: 11.25rem;
                background: #1D1F24;
                border-radius: 0.04rem;
                
                box-sizing: border-box;
                padding: 0 0.29rem;
                margin-bottom: 0.17rem;
                .comment_top{
                    display: flex;
                    padding-top: 0.27rem;
                    img{
                        width: 0.56rem;
                        height: 0.56rem;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    >div{
                        margin-left: 0.04rem;
                        .comment_name{
                            height: 0.22rem;
                            font-size: 0.22rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #FFFFFF;
                            span{
                                height: 0.24rem;
                                line-height: 0.22rem;
                                background: rgba(24, 24, 24, 0.5);
                                border: 0.01rem solid #999999;
                                border-radius: 0.12rem;

                                font-size: 0.13rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #999999;
                                box-sizing: border-box;
                                padding: 0 0.125rem;
                            }
                        }
                        .comment_date{
                            height: 0.39rem;
                            font-size: 0.15rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #999999;
                            line-height: 0.39rem;
                        }
                        .comment_content{
                            width: 9.07rem;
                            max-height: 0.6rem;
                            font-size: 0.13rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #FFFFFF;
                            
                            overflow: hidden;
                            text-overflow:ellipsis; 
                        }
                    }
                }
                .comment_img{
                    margin-top: 0.32rem;
                    margin-left: 0.6rem;
                    img:only-child{
                        width: 9.32rem;
                        height: 5.27rem;
                        background: #363944;
                    }
                    img{
                        width: 2.23rem;
                        height: 2.23rem;
                        background: #363944;
                    }
                }
                .comment_bottom{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    height: 1.04rem;
                    >div{
                        height: 0.28rem;
                        display: flex;
                        align-items: center;
                        
                        padding: 0 0.15rem;
                        font-size: 0.19rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #999999;

                        >div{
                            width: 0.26rem;
                            height: 0.26rem;
                            object-fit: cover;
                            margin-right: 0.08rem;
                        }
                    }
                }
                .comments{
                    width: 10.78rem;
                    border-top: 0.01rem solid #333333;
                    border-radius: 0rem;
                    color: #FFFFFF;
                    padding-top: 0.44rem;
                    .comment_item{
                        display: flex;
                        box-sizing: border-box;
                        padding: 0 0.73rem;
                        margin-bottom: 0.26rem;
                        img{
                            width: 0.43rem;
                            height: 0.43rem;
                            border-radius: 50%;
                            object-fit: cover;
                        }
                        div{
                            margin-left: 0.12rem;
                            .comment_name{
                                width: 0.74rem;
                                font-size: 0.19rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                            .comment_date{
                                width: 1.64rem;
                                font-size: 0.15rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #CCCCCC;
                            }
                            .comment_content{
                                width: 8.77rem;
                                background: #1F2D3E;
                                border-radius: 0.04rem;
                                margin-top: 0.1rem;

                                box-sizing: border-box;
                                padding: 0.22rem 0.16rem;
                                font-size: 0.13rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                            .comment_more{
                                display: flex;
                                align-content: center;
                                justify-content: flex-end;
                                margin-top: 0.1rem;

                                height: 0.21rem;
                                font-size: 0.19rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #999999;
                                div{
                                    display: flex;
                                    align-content: center;
                                    padding: 0 0.15rem;
                                }
                                >div:first-child{
                                    border-right: 0.01rem solid #666666;
                                }
                                .comment_live{
                                    width: 0.22rem;
                                    height: 0.22rem;
                                    background: url(https://alioss.shejizhizi.com/front/comment/content_icon_good_nor@2x.png) no-repeat center center / cover;
                                }
                                .comment_select{
                                    background: url(https://alioss.shejizhizi.com/front/comment/content_icon_good_highlig@2x.png) no-repeat center center / cover;
                                }
                            }
                        }
                    }
                }
                .see_all{
                    width: 11.25rem;
                    height: 0.94rem;
                    background: #363944;
                    border-radius: 0.04rem;
                    position: relative;
                    right: 0.29rem;

                    text-align: center;
                    line-height: 0.94rem;
                    font-size: 0.22rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    span:hover{
                        color: #66CCFF;
                    }
                }
            }
            #works{
                width: 11.25rem;
                background: #1D1F24;
                border-radius: 0.04rem;
                margin: 0 auto;
            }
            #reply{
                width: 11.25rem;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                #textarea{
                    position: relative;
                    background: #1F2D3E !important;
                    width: 11.25rem;
                    /deep/.ant-input{
                        width: 11.25rem;
                        height: 1.41rem;
                        background: #1F2D3E !important;
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
                #reply_button{
                    width: 1.2rem;
                    height: 0.47rem;
                    background: #999999;
                    border-radius: 0.04rem;
                    margin-top: 0.16rem;

                    text-align: center;
                    line-height: 0.47rem;
                    font-size: 0.21rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }

        }
    }
</style>