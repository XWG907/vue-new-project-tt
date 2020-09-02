<!--  -->
<template>
  <div>
    <!-- 官网图标背景图片  -->
    <img src="../../assets/img/logo_admin.png" alt />
    <el-menu background-color="#323745" text-color="#adafb5">
      <el-menu-item>
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="1">
        <!-- el-submenu给的具名插槽 -->
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>发布文章</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <!-- el-submenu给的具名插槽 -->
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>发布文章</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item>
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>账户信息</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang='less' scoped>
div {
  padding-top: 50px;
  width: 200px;
  border: 0 !important;
  height: 100vh;
  background-color: rgb(50, 55, 69);
  // display: flex;
  .el-menu {
    border: 0 !important;
  }
  position: relative;

  img {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    margin: auto;
    height: 30px;
    z-index: 1;
  }
}
</style>
