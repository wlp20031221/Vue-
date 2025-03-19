
import { createApp } from 'vue'
import App from './App.vue'

const app =createApp(App)

//防抖指令实现
app.directive('debounce', {
  mounted(el, binding) {
    let timer = null
    el.addEventListener('input', () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      timer = setTimeout(() => {
        binding.value()
      },parent(binding.arg) || 2000)
    })
  }
})

//限制输入指令实现
app.directive('limit', {
    mounted(el, binding) {
        const limitlength = parent(binding.arg) || 10
      el.addEventListener('input', () => {
        const value = el.value
        const valuelength = value.length
        if (value.length > 10) {
          el.value = value.slice(valuelength-10,valuelength)
        }
      })
    }
  })

  //权限控制
app.directive('permission', 
    (el, binding) => {
        const buttonType = el.innerText
        const role = binding.value
        if (role !== 'teacher' && role !== 'admin') {
            if (buttonType === '查看') {
                el.style.display = 'none'//隐藏全部元素
                // el.remove()
            }
        else if (role == 'teacher') {
            if (buttonType === '修改') {
                el.style.display = ''//显示修改和查看元素
            }
            
        }else{
            el.style.display = ''//显示全部元素
        }
    }
})


app.mount('#app')

window.app = app