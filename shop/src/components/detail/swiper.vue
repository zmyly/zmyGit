<template lang="html">
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="i in swiper" :key="i.id">
        <img :src="i.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
    <div class="back" @click="$router.go(-1)">
      <span class="icon-go"></span>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      swiper(){
        return this.$store.state.detail.productDatas.swiper
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/index/style.css';
  .swiper {
    width: 100%;
    position: relative;
    .mint-swipe {
      width: 100%;
      height:100vw;
      img {
        display: block;
        width: 100%;
      }
    }
    .back {
      width: 7vw;
      height: 7vw;
      position: absolute;
      left: 4vw;
      top: 2vw;
      background-color: rgba(0,0,0,.4);
      border-radius: 50%;
      text-align: center;
      .icon-go:before {
        font-family: 'index' !important;
        content: "\e900";
        color: #bfbfbf;
      }
      span {
        display: inline-block;
        line-height: 7vw;
        transform: rotate(-180deg);
      }
    }
  }
</style>

