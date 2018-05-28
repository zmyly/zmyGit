<template lang="html">
  <section class="section1" v-if='section1'>
    <h1 class="section1-title">
      section1
      <i class="icon-right"></i>
    </h1>
    <ul class="section1-list">
      <li v-for="k in section1.list">
        <router-link :to="{name:'详情页'}" :key="k.id">
          <img v-lazy="k.imgPath" alt="">
        </router-link>
      </li>
    </ul>
    <router-link :to="{ name: '详情页'}"  class="section1-banner">
      <img v-lazy="section1.banner" v-if='section1'>
    </router-link>
  </section>
</template>

<script>
  export default {
    props:['section1']
  }
</script>

<style lang="less" scoped>
  .section1 {
    .section1-title {
      text-align: center;
      padding: 4vw 0;
      i {
        position: absolute;
        right: 6vw;
      }

      .icon-right:before {
        font-family: 'index' !important;
        content: "\e904";
        color: #515151;
      }
    }

    .section1-list {
      display: flex; // 弹性布局
      flex-wrap: wrap; // 换行
      justify-content: space-around; // 留白
      padding:2vw;
      li {
        width: 50%;
        padding:1vw;
        box-sizing: border-box; // 指定两个boxes接壤
        a,
        img {
          width: 100%;
        }
      }
    }

    .section1-banner{
      img {
        width: 100%;
      }
    }

  }
</style>
