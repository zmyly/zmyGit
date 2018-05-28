<template>
  <div class="service">
    <ul>
      <li><i class="icon-ok"></i><span>自营品牌</span></li>
      <li><i class="icon-ok"></i><span>无忧退货</span></li>
      <li><i class="icon-ok"></i><span>48小时快速退款</span></li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>

  .icon-ok:before {
    font-family: 'index' !important;
    content: "\e90b";
    color: #ea545d;
  }

  .service {
    ul {
      display: flex; // 弹性布局
      justify-content: space-around; // 留白
      li {
        padding: 3.3vw 0;
      }
    }
  }
</style>
