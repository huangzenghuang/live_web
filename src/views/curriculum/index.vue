<template>
  <div id="curriculum">
      <component v-bind:is="componentName"></component>
  </div>
</template>


<script>
  import live from './live_broadcast.vue'
  import recorded from './recorded_broadcast.vue'
  export default {
    data() {
      return {
        componentName:this.$route.query.type
      }
    },
    components:{
      live,recorded
    },
    mounted(){
      
    }
  }
</script>

<style lang="less" scoped>
  #box{

  }
</style>