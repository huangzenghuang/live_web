<template>
  <div id="app">
    <wk-header class="header"></wk-header>
    <wk-sidebar class="siderbar"></wk-sidebar>
    <router-view class="router"/>
    <wk-footer></wk-footer>
  </div>
</template>
<script>
// 网课导航条组件
import Header from './components/Header'
// 网课导航条组件
import Sidebar from './components/Sidebar'
// 网课页脚组件
import Footer from './components/Footer'
export default {
  name:'app',
  components:{
    'wk-header':Header,
    'wk-sidebar':Sidebar,
    'wk-footer':Footer,
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
}
</style>
