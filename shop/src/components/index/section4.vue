<template lang="html">
  <section class="section4" v-if='section4'>
    <h2 class="section4-title">
      section4
      <i class="icon-right"></i>
    </h2>
    <ul class="section4-list">
      <li v-for="k in section4.list">
        <router-link :to="{name:'详情页'}" :key="k.id">
          <img v-lazy="k.imgPath">
          <p>{{k.intro}}</p>
        </router-link>
        <h3>{{k.title}}</h3>
        <span>$ {{k.price}}</span>
      </li>

    </ul>
    <router-link :to="{name:'分类页'}" class="section4-banner">
      <img v-lazy="section4.banner">
    </router-link>
  </section>
</template>

<script>
  import { Lazyload } from 'mint-ui';
  export default {
    props:['section4']
  }
</script>

<style lang="less" scoped>
  .section4 {
    width: 100%;
    overflow: hidden;
    .section4-title {
      text-align: center;
      padding: 4vw 0;
      position: relative;
      background-color: #ffffff;
      i {
        position: absolute;
        right: 6vw;
        top: 50%;
      }
    }

    .section4-list {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      overflow: hidden;
      li {
        width: 50%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding:0 3vw;
        >a {
          display: block;
          width: 100%;
          position: relative;
          img {
            display: block;
            width: 100%;
          }
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: gold;
            box-sizing: border-box;
            padding:1.2vw 2vw;
          }
        }

        >h3 {
          padding-top: 3vw;
        }
        >span {
          display: inline-block;
          padding-bottom: 3vw;
          color: #b4282d;
        }
      }
    }

    .section4-banner {
      img {
        width: 100%;
      }
    }
  }
</style>
