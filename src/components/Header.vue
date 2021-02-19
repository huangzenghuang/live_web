<template>
    <div id="header">
        <div id="logo">LOGO</div>
        <div id="menu">
            <router-link v-for="(item,index) in routerList" :key="index+item" 
                :class="'menu_item '+(isClick==index?'menu_item_select':'')+' '+(item.isOpen?'':'forbidden')" :to="item.path">
                <div class="content">{{item.name}}</div>
                <div class="unopen" v-if="!item.isOpen">（敬请期待）</div>
            </router-link>
        </div>
        <div id="user_login_status">
            <div id="register">
                注册
            </div>
            <div id="login">
                登录
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'wk_header',
    data(){
        return {
            routerList:[
                {
                    name:'首页',
                    path:'/',
                    isOpen:true
                },
                {
                    name:'学院',
                    path:'/academy',
                    isOpen:true
                },
                {
                    name:'社区',
                    path:'/',
                    isOpen:false
                },
                {
                    name:'商城',
                    path:'/',
                    isOpen:false
                },
                {
                    name:'活动',
                    path:'/',
                    isOpen:false
                }
            ],
            isClick:0,
        }
    },
    watch: {
        $route:{
            handler(){
                for (let i = 0; i < this.routerList.length; i++) {
                    const item = this.routerList[i];
                    console.info(item.path +'\t =? \t'+ location.pathname)
                    if(item.path === location.pathname){
                        this.isClick = i
                        return
                    }
                }
            },
            deep:true,
            immediate:true,
        }
    }

}
</script>
<style lang="less" scoped>
    #header{
        width: 17.99rem;
        height: 1.1rem;
        margin: 0 auto;
        padding: 0 3.37rem;
        box-sizing: border-box;
        background: rgba(0,0,0,0);
        display: flex;
        justify-content: space-between;
        #logo{
            width: 1.18rem;
            height: 0.35rem;
            line-height: 1.1rem;
            font-size: 0.45rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #14B9D6;
        }
        #menu{
            height: 1.1rem;
            display: flex;
            align-items: center;
            .menu_item{
                margin-right: 0.56rem;
                .content{
                    font-size: 0.22rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;

                    text-align: center;
                    opacity: 0.5;
                }
                .content:hover{
                    opacity: 1;
                }
                .unopen{
                    font-size: 0.11rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #0099CC;
                }
            }
            .menu_item_select{
                position: relative;
                opacity: 1;
            }
            .menu_item_select::before{
                content: '首页';
                background: #FFFFFF;
                opacity: 0.5;
                filter: blur(5px);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 0.32rem;
            }
        }
        #user_login_status{
            height: 1.1rem;
            display: flex;
            align-items: center;
            >div{
                width: 0.86rem;
                height: 0.37rem;

                border-radius: 0.04rem;
                box-sizing: border-box;
                line-height: 0.35rem;

                font-size: 0.15rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
            }
            #register{
                background: rgba(34, 38, 50, 0.6);
                border: 0.01rem solid #66CCFF;

                margin-right: 0.17rem;
            }
            #login{
                background: linear-gradient(180deg, #027BB4, #0E98D7);
                border: 0.01rem solid #27AEED;
            }
        }
    }
</style>