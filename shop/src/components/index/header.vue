<template>
  <mt-header title="电商联盟">
    <router-link :to="{name:''}" slot="right">
      <mt-button icon="search"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
    export default {
      props:['section3']
    }
</script>

<style  scoped>
  .mint-header{
    padding: 8vw 0;
    color: #000;
    background-color: #fff;
    font-size: 20px;
  }
</style>
