import router from './router'

router.beforeEach(function (to, from, next) {
  // 人、如果要去的地址以/home为起始  就说明需要判断是不是登录   判定token
  if (to.path.startsWith('/home')) {
    const token = window.localStorage.getItem('user-token')
    if (token) {
      // 如果有token则放行
      next()
    } else {
      next('/login')
    }
  } else {
    // 如果没有/home 说明你是安全的  ，不需要控制
    next()
  }
})

export default router
