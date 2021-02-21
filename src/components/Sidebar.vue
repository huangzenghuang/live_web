<template>
    <div id="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script>
export default {
    name:'Sidebar'
}
</script>
<style lang="less" scoped>
    #box{
        width: 1.02rem;
        div{
            width: 1.02rem;
            height: 1.26rem;
            margin-top: .04rem;
        }
        div:nth-child(1){
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_discount_nor@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(2){
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_download_nor@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(3){
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_welfare_nor@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(4){
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_opinion_nor@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(5){
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_contact_nor@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(6){
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_task_nor@2x.png') no-repeat center center / cover ;
        }


        
        div:nth-child(1):hover{
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_discount_highlig@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(2):hover{
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_download_highlig@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(3):hover{
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_welfare_highlig@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(4):hover{
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_opinion_highlig@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(5):hover{
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_contact_highlig@2x.png') no-repeat center center / cover ;
        }
        div:nth-child(6):hover{
            background: url('https://wkalioss.oss-cn-chengdu.aliyuncs.com/front/sidebar/sidebar_icon_task_highlig@2x.png') no-repeat center center / cover ;
        }
    }
</style>
