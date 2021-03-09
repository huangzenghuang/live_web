<template>
  <div id="app">
    <wk-header class="header"></wk-header>
    <wk-sidebar class="siderbar"></wk-sidebar>
    <router-view class="router"/>
  </div>
</template>
<script>
// 网课导航条组件
import Header from './components/Header'
// 网课导航条组件
import Sidebar from './components/Sidebar'
export default {
  name:'app',
  components:{
    'wk-header':Header,
    'wk-sidebar':Sidebar,
  },
  data(){
    return{
      difficulty:['','difficulty_too_easy','difficulty_easy','difficulty_medium','difficulty_difficult','difficulty_too_difficult']
    }
  }
}
</script>
<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  background: #050A11;
  position: relative;
  .header{
    position: absolute;
    z-index: 100;
  }
  .siderbar{
    position: sticky;
    left: 100%;
    top: .85rem;
    z-index: 100;
  }
  .router{
    width: 100vw;
    position: absolute;
    top: 0;
  }
  .forbidden{
    pointer-events: none;
  }
  .difficulty_too_easy{
    color: #FFFFFF;
  }
  .difficulty_easy{
    color: #33CCFF;
  }
  .difficulty_medium{
    color: #33FF99;
  }
  .difficulty_difficult{
    color: #FF9933;
  }
  .difficulty_too_difficult{
    color: #CC3333;
  }
  .comment_share{
      border-right: 0.01rem solid #666666;
      div{
          background: url(https://alioss.shejizhizi.com/front/comment/content_icon_share_nor@2x.png) no-repeat center center / cover;
      }
      div:hover{
          background: url(https://alioss.shejizhizi.com/front/comment/content_icon_share_highlig@2x.png) no-repeat center center / cover;
      }
  }
  .comment_live{
      border-right: 0.01rem solid #666666;
      div{
          background: url(https://alioss.shejizhizi.com/front/comment/content_icon_comment_nor@2x.png) no-repeat center center / cover;
      }
      div:hover{
          background: url(https://alioss.shejizhizi.com/front/comment/content_icon_comment_highlig@2x.png) no-repeat center center / cover;
      }
  }
  .comment_live{
      div{
          background: url(https://alioss.shejizhizi.com/front/comment/content_icon_good_nor@2x.png) no-repeat center center / cover;
      }
  }
  .comment_select{
      div{
          background: url(https://alioss.shejizhizi.com/front/comment/content_icon_good_highlig@2x.png) no-repeat center center / cover;
      }
  }
}
</style>
