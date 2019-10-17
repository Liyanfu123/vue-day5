<template>
  <div id="app">
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/route">Route</router-link> |
    <router-link to="/routeone/李四/1">RouteOne</router-link> |
    <router-link to="routetwo">RouteTwo</router-link> |
    <router-link to="/routethree">RouteThree</router-link> |
    <router-link to="/routefour">RouteFour</router-link>
    <!--      <router-link to="/error"></router-link>-->
      <div>
        <div @click="demo('/')">Demo</div>
        <div @click="demo('/routethree')">Test</div>
        <div @click="demo('/routefour')">Index</div>
      </div>
  </div>
    <router-view />

  </div>
</template>

<script>
  export default {
    name: "App",
    components: {
    },
    props: {},
    data() {
      return {}
    },
    methods: {
      demo(item){
        this.$router.push(item)
      }
    },
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

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>


