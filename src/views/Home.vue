<template>
  <div>
    <div id="top">头部</div>
    <div id="box">
      <div id="left">侧边栏</div>
      <div id="right"><router-view></router-view></div>
    </div>
    <div id="bottom">底部</div>
  </div>
  
</template>

<script>
  export default {
    name: "Home",
    components: {

    },
    props: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
#top{
  height: 45px;
  line-height: 45px;
  background:pink;
  text-align: center;
  color: #2c3e50;
}
#box{
  display: flex;
  #left{
    height: 500px;
    width: 20%;
    background: #42b983;
  }
  #right{
    height: 500px;
    width: 80%;
    background: skyblue;
  }
}
  #bottom{
    height: 100px;
    line-height: 100px;
    color: #ffff;
    background: #2c3e50;
  }
</style>