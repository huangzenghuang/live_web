<template>
    <div id="footer">
        <div id="logo">LOGO</div>
        <div id="introduction">
            在娱乐中学习
        </div>
        <div id="navigation">
            <div id="navigation_list">
                <img src="https://alioss.shejizhizi.com/front/首页图标/nav_img_lgoo_nor@2x.png" alt="">
                <div>
                    <a href="">关于我们</a>
                    <a href="">版权声明</a>
                    <a href="">联系我们</a>
                    <a href="">售后服务</a>
                    <a href="">常见问题</a>
                </div>
            </div>
            <div id="QRCODE">
                <div class="QRCODE">
                    <p>小程序</p>
                    <img src="https://alioss.shejizhizi.com/front/首页图标/footer_img_weixincode_nor@2x.png" alt="">
                </div>
                <div class="QRCODE">
                    <p>公众号</p>
                    <img src="https://alioss.shejizhizi.com/front/首页图标/footer_img_weixincode_nor@2x.png" alt="">
                </div>
            </div>
        </div>
        <div id="blogroll">
            <div>
                <p>友情链接：</p>
                <p>
                    <a href="">蜀ICP备2021000163号</a><span>丨</span>
                    <a href="">增值电信业务经营许可证：川B2-20200879</a><span>丨</span>
                    <a href="">公网安备 31011502006998号</a>
                </p>
                <p>
                    <a href="">网络文化经营许可证  川网文{2020} 4819-979号  </a><span>丨</span>
                    <a href="">广播电视节目制作经营许可证（粤）字第00000号</a><span>丨</span>
                    <a href="">出版物经营许可证派出所字第Y000号</a>
                </p>
                <p>为了防范电信网络诈骗，如网民接到962110电话，请立即接听</p>
                <p>成都艺燃艺爆教育科技有限公司版权所有</p>
            </div>
            <div style="text-align: end;">
                <p>在线客服：联系客服</p>
                <p>客服热线：400-862-9191</p>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    #footer{
        padding-top: .97rem;
        #logo{
            width: 1.18rem;
            height: 0.45rem;
            margin: 0 auto;

            font-size: 0.45rem;
            line-height: 0.45rem;;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #14B9D6;
        }
        #introduction{
            width: 4.04rem;
            height: 0.56rem;
            margin: 0 auto;
            margin-bottom: 1.38rem;
            background: url(https://alioss.shejizhizi.com/front/首页图标/main_icon_coloredeggs_nor@2x.png) no-repeat center center / cover;

            line-height: 0.5rem;
            font-size: 0.17rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #00CCFF;
        }
        #navigation{
            width: 100vw;
            height: 2.32rem;
            background: #333333;
            padding: 0 3.38rem;
            box-sizing: border-box;

            display: flex;
            text-align: start;
            justify-content: space-between;
            #navigation_list{
                img{
                    width: 1.12rem;
                    height: 0.32rem;
                    margin: 1.11rem 0 0.43rem 0.68rem;
                }
                div{
                    a{
                        height: 0.15rem;
                        font-size: 0.15rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                        margin-right: 0.5rem;
                    }
                }
            }
            #QRCODE{
                display: flex;
                .QRCODE{
                    text-align: center;
                    margin-top: 0.3rem;
                    margin-left: 0.79rem;
                    p{
                        height: 0.15rem;
                        font-size: 0.15rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                        margin-bottom: 0.16rem;
                    }
                    img{
                        width: 1.4rem;
                        height: 1.4rem;
                        object-fit: cover;
                    }
                }
            }
        }
        #blogroll{
            width: 18rem;
            height: 2.66rem;
            background: #050A11;
            box-sizing: border-box;
            padding: 0.1rem 3.36rem;

            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            font-size: 0.13rem;
            line-height: 0.13rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            text-align: start;
            p{
                margin-bottom: 0.3rem;
                a{
                    color: #FFFFFF;
                    list-style: none;
                }
                span{
                    margin: 0 0.1rem;
                }
            }
        }
    }
</style>
<script>
export default {
    name:'wk_footer'
}
</script>