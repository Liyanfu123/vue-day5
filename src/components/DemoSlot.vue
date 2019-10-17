<template>
  <div>
    <slot>子组件插巢值</slot>
    <slot name="test">嘻嘻QAQ</slot>
  </div>
  
</template>

<script>
  export default {
    name: "DemoSlot",
    components: {},
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

</style>