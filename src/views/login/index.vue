<!--  -->
<template>
  <div class="login">
     <el-card  class="signin">
         <div slot="header" class="logoimg">
             <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <!-- 表单组件  el-form表单容器-->
         <!-- 数据校验 首先要给el-form 一个model属性 表示数据对象  =>  rules规则
         给form-item配置prop， porp是校验的字段名（只写字段名）
         -->
         <el-form  ref='loginForm' :model="ruleForm" :rules="rules" >
             <!-- 表单项 -->
             <el-form-item prop="phoneNum">
                 <!-- 放置组件内容 -->
                 <!-- 绑定手机号 -->
                 <el-input v-model="ruleForm.phoneNum" placeholder="请输入手机号"></el-input>
             </el-form-item>
             <el-form-item prop="code" >
                 <!-- 绑定验证码 -->
                  <el-input v-model="ruleForm.code" style="width:230px" placeholder="请输入验证码"></el-input>
                  <el-button style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item prop="check" >
                 <!-- 绑定是否多选 -->
                 <el-checkbox v-model="ruleForm.check" >我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
             <el-form-item>
                 <el-button @click="login" type="primary" style="width:100%">登录</el-button>
             </el-form-item>
         </el-form>
     </el-card>
  </div>
</template>

<script>
export default {
  data () {
    var validator = function (rule, value, callBack) {
      if (value) {
        callBack() // 如果value为true直接通过
      } else {
        callBack(new Error('您必须无条件同意被坑'))
      }
    }
    return {
      ruleForm: {
        phoneNum: '', // 手机号
        code: '', // 验证码
        check: false
      },
      rules: {
        phoneNum: [
          // required表示必填，message如果没有满足就提示里面的内容
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确' }
        ],
        check: [{
          validator
        }]
      }
    }
  },
  methods: {
    login () {
      // this.$message('提示消息')
      // console.log(this.$refs.loginForm)

      // 通过el-form组件的validata方法，校验整个表单的数据
      // 传入一个回调函数 isOK为true 说明所有的校验规则都成功了
      // 如果为false 说明有错误
      this.$refs.loginForm.validate((isOk, obj) => {
        if (isOk) {
          this.$axios({
            url: 'authorizations',
            method: 'post',
            data: {
              mobile: this.ruleForm.phoneNum,
              code: this.ruleForm.code
            }
          }).then(result => {
            this.$message({ type: 'success', message: '成功', showClose: true, duration: 1000 })
            // console.log(result.data.data.token)
            window.localStorage.setItem('user-token', result.data.data.token)
            // 编程式导航
            setTimeout(() => { this.$router.push('/home') }, 1000)
          }).catch(() => { this.$message({ type: 'warning', message: '账户或者密码有误' }) })
        } else {
          this.$message({ type: 'warning', message: '失败', showClose: true, duration: 2000 })
          // this.$message({ type: 'warning', message: '失败', showClose: true, duration: 5000 })
        }
      })
    }
  }
}

</script>

<style lang='less' scoped>
//如果要使用less/scss等预处理css语言的话，需要给一个lang属性 lang=‘less’ lang='scss'
// scoped 表示针对自己的组件应用  不会对其它组件产生影响！
.login {
//背景
background-image: url('../../assets/img/login_bg.jpg');
height: 100vh;
//100vh表示占据当前可是屏幕100%
background-size: cover;

//定位
position: relative;
}
.signin{
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.logoimg{
    text-align: center;
    height: 40px;
    img{
        height: 40px;
    }
}
</style>
