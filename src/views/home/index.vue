<template>
  <div class="home">
    <div class="banner">
      <p>-- 基于 Vue 开发的示例框架</p>
    </div>
    <div class="info"></div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100%);
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .banner {
    width: 100%;
    height: calc(100%);
    background: url('../../assets/images/bg.jpg');
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    p {
      margin-top: 80px;
      padding-left: 100px;
      color: #fff;
      font-size: 25px;
      overflow: hidden;
    }
  }
}
</style>
