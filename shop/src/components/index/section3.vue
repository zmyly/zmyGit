<template lang="html">
  <section class="section3" v-if='section3'>
    <ul class="section3-list">
      <li v-for="k in section3.list">
        <div class="section3-list-left">
          <h4>{{k.title}}</h4>
          <div class="time">
            <span class="time-num">{{k.num1||'00'}}</span>
            <span class="time-col">:</span>
            <span class="time-num">{{k.num2||'00'}}</span>
            <span class="time-col">:</span>
            <span class="time-num">{{k.num3||'00'}}</span>
          </div>
          <p class="start">Starts at {{k.start}}</p>
        </div>
        <router-link :to="{name:'分类页'}" class="section3-list-right">
          <img v-lazy="k.imgPath">
          <span>${{k.price}}</span>
        </router-link>
      </li>
    </ul>
    <router-link :to="{name:'分类页'}" class="section3-banner">
      <img v-lazy="section3.banner" alt="">
    </router-link>
  </section>
</template>

<script>
  import {Lazyload} from 'mint-ui';
  import Vue from 'vue';
  export default {
    props: ['section3'],
    created() {
      this.$watch('section3', function (newVal, oldVal) {
        for (let item of newVal.list) {
          this.setTime(item);
        }
      });
    },
    methods: {
      setTime(item) {
        let endTime = item.end;
        let timeMsg = endTime.toString();
        let end = new Date(timeMsg).getTime();
        setInterval(() => {
          let now = new Date().getTime();
          let sy = parseInt((end - now) / 1000);
          let minute = parseInt(sy % 3600 / 60);
          let second = parseInt(sy % 60);
          minute < 10 ? minute = "0" + minute : minute;
          second < 10 ? second = "0" + second : second;
          let ms = (100 - Number(parseInt(now / 10).toString().substr(-2))).toString();
          if (end - now <= 0) {
            minute = '00';
            second = '00';
            ms = '00';
            return
          }
          Vue.set(item,'num1',minute);
          Vue.set(item,'num2',second);
          Vue.set(item,'num3',ms);
        }, 40);
      }
    }
  }
</script>

<style lang="less" scoped>

  .section3 {
    width: 100%;
    .section3-list {
      width: 100%;
      > li {
        display: flex;
        padding: 4vw 5vw 10vw 12vw;
        box-sizing: border-box;
        width: 100%;
        .section3-list-left {
          padding-top: 10vw;
          width: 50%;
          h4 {
            line-height: 4.8vw;
            margin-bottom: 3.2vw;
            letter-spacing: 0.42vw;
          }
          .time {
            .time-num {
              display: inline-block;
              text-align: center;
              padding: 1.6vw;
              color: #fff;
              border-radius: 0.5vw;
              background-color: #444;
              letter-spacing: 0.3vw;
            }
            .time-col {
              color: #333;
              width: 2vw;
              display: inline-block;
              text-align: center;
              font-weight: 700;
            }
          }
          .start {
            padding-top: 4vw;
            letter-spacing: 0.3vw;
          }
        }

        .section3-list-right {
          width: 50%;
          display: block;
          padding-top: 10vw;
          position: relative;
          img {
            display: block;
            width: 100%;
            background-color: gold;
          }
          span {
            padding: .3vw 1.2vw;
            border-radius: 1vw;
            text-align: center;
            position: absolute;
            bottom: .4vw;
            right: .2vw;
            background-color: #FA0;
            color: #fff;
          }
        }
      }
    }

    .section3-banner {
      img {
        width: 100%;
      }
    }
  }
</style>
