<!--  -->
<template>
          <el-row>
          <!-- 分左右部分 -->
          <el-col :span="20" class="left">
            <i class="el-icon-s-unfold"></i>
            <span>江苏传智播客教育科技</span>
          </el-col>

          <!-- 右边头部 -->
          <el-col :span="4" class="right">
            <img :src="userInfo.photo ? userInfo.photo:defaultImg"  alt="">
            <!-- 下拉菜单 -->
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="account">个人信息</el-dropdown-item>
                  <el-dropdown-item command='git'>git地址</el-dropdown-item>
                  <el-dropdown-item command='lgout'>退出</el-dropdown-item>

               </el-dropdown-menu>
              </el-dropdown>
          </el-col>
        </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg') // 转换成base64格式  vue只认识这种格式
    }
  },
  methods: {
    //   获取用户信息
    getUserInfo () {
      const token = window.localStorage.getItem('user-token')// 获取token
      console.log(token)
      this.$axios({
        url: 'user/profile',
        headers: { Authorization: `Bearer ${token}` }
      }).then(result => {
        console.log(result)
        this.userInfo = result.data.data
      })
    },
    // 用户退出
    handleCommand (command) {
      if (command === 'lgout') {
        //   清空缓存
        window.localStorage.clear() // 清楚所有缓存 当前项目的缓存
        this.$router.push('/login')// 跳转到登录页
      } else if (command === 'git') {
        // git地址
        window.location.href = 'https://www.baidu.com'
      } else {
        // 账户信息
      }
    }
  },
  created () {
    this.getUserInfo()
  }

}

</script>

<style lang='less' scoped>
 // 左侧部分
  .left {
    height: 40px;
    // line-height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    //图标
    .el-icon-s-unfold {
      padding-right: 4px;
      font-size: 20px;
    }
  }
  // 右侧部分
  .right{
    display: flex;
    align-items: center;

    img{
      border-radius: 50%;
      margin-right: 10px;
      width: 40px;
    }
  }
</style>
