<!--  -->
<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧容器 -->
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <!-- 主体 -->
      <el-main style="padding : 0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside.vue'
// import layoutHeader from '../../components/home/layout-header'
export default {
  data () {
    return {}
  }

}
</script>

<style lang="less" scoped>
.el-aside {
  width: 200px !important;
  background-color: #323745;
}
// 头部栏
.el-header {
  height: 40px !important;
  // border: 1px solid black;

}
</style>
