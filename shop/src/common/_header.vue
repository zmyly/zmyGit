<template>
  <header>
    <router-link
      class="icon-go"
      :to="{ name: '首页'}"
      v-if="$route.matched[0].path=='/category'">
    </router-link>
    <span class="icon-go" @click="$router.go(-1)" v-else></span>
    <slot name="title"></slot>
  </header>
</template>

<script>
    export default {
    }
</script>

<style lang="less" scoped>
  @import '../assets/index/style.css';
  header {
    background-color: #F8FCFF;
    text-align: center;
    position: relative;
    height: 12vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4vw;
    h1 {
      letter-spacing: .2vw;
      font-weight: 600;
      margin-right: 36vw;
    }

    .icon-go:before {
      font-family: 'index' !important;
      content: "\e900";
      color: #bfbfbf;
    }
    span,a {
      display: inline-block;
      transform: rotate(-180deg);
    }


  }


</style>
