// 引入公用组件
import Hello from '../packages/hello'

// 定义公用组件
const components = [
  Hello
]

// 提供plugins的install方法
const install = function (Vue, opt = {}) {
  // if (install.installed) return

  components.map(component => {
    // console.log(component)
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// install()

module.exports = {
  install,
  Hello
}

module.exports.default = module.exports