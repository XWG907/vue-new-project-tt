/** 重置message，防止重复点击重复弹出message弹框 */
// import {
//   Message
// } from 'element-ui'
// const showMessage = Symbol('showMessage')
// let messageInstance = null
// class DoneMessage {
//   [showMessage] (type, options, single) {
//     if (messageInstance && single) {
//       messageInstance.close()
//     }
//     messageInstance = Message[type](options)
//     // if (single) {
//     //     if (document.getElementsByClassName('el-message').length === 0) {
//     //         Message[type](options)
//     //     }
//     // } else {
//     //     Message[type](options)
//     // }
//   }

//   info (options, single = true) {
//     this[showMessage]('info', options, single)
//   }

//   warning (options, single = true) {
//     this[showMessage]('warning', options, single)
//   }

//   error (options, single = true) {
//     this[showMessage]('error', options, single)
//   }

//   success (options, single = true) {
//     this[showMessage]('success', options, single)
//   }
// }
// export const message = new DoneMessage()

// 这样的封装方法有一个缺陷，因为是通过new方法创建的对象，
// 所以只能拿通过$message.error()的形式调用，不支持$message({})形式调用，
// 参考element - ui中message方法的实现，将封装再次优化一下

/** 重置message，防止重复点击重复弹出message弹框 */
import {
  Message
} from 'element-ui'
let messageInstance = null
const resetMessage = (options) => {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message(options)
}
;['error', 'success', 'info', 'warning'].forEach(type => {
  resetMessage[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return resetMessage(options)
  }
})
export const message = resetMessage
