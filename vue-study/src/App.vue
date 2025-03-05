<script setup>
// 引入Vue的ref函数，用于创建响应式引用
import {computed, ref} from 'vue'
// 创建一个响应式引用，初始值为'装逼让你飞起来'
const message = ref('装逼让你飞起来')
// 创建一个响应式引用，初始值为包含HTML标签的字符串
const rawHtml = ref('<span style="color:red">我是红色的</span>')
// 创建一个响应式引用，初始值为百度的URL
const url = ref('https://www.baidu.com')
const num = ref(0)

console.log(message)
console.log(message.value)

// 定义一个函数adjust，用于修改url的值
function adjust(){
  // 将url的值修改为hao123的URL
  url.value = 'https://www.hao123.com'
}

function add(){
  num.value++
}
function jian(){
  num.value--
}
  const dy = ref({
    name:'哪吒',
    shouzhong:'广泛',
    juqing:'有趣',
    texiao:'华丽',
    piaofang:'1000万'
  })

  const dypj = computed(() => {
    console.log("计算属性被调用了")
    return dy.shouzhong == '广泛' 
    && dy.juqing == '有趣'
    && dy.texiao == '华丽' 
    && dy.piaofang == '1000万'
    ? '推荐' 
    : '不推荐'
  })

  function dypjfun() {
    console.log("方法被调用了")
    return dy.shouzhong == '广泛' 
    && dy.juqing == '有趣' 
    && dy.texiao == '华丽' 
    && dy.piaofang == '1000万'
    ? '推荐' 
    : '不推荐'
  }

const shuxue = ref(100)
const yuwen = ref(100)
const yingyu = ref(100)

  const zongfen = computed(() => {
    return shuxue.value + yuwen.value + yingyu.value
  })
  const pingjunfen = computed(() => {
    return zongfen.value / 3
  })

  //生命周期
  import {onMounted, onUpdated, onUnmounted} from 'vue'
  onMounted(() => {
    console.log("组件挂载完成")
  })
  onUpdated(() => {
    console.log("组件更新完成")
  })
  onUnmounted(() => {
    console.log("组件卸载完成")
  })

</script>

<template>
  <div>
    <!-- 使用双花括号插值语法显示message的值 -->
    <h1>{{ message }}</h1>
    <!-- 使用v-show指令控制元素的显示与隐藏，这里设置为false，元素不显示 -->
    <p v-show="false"> 使用文本插值：{{ rawHtml }} </p>
    <!-- 使用v-show指令控制元素的显示与隐藏，这里设置为true，元素显示 -->
    <!-- 使用v-html指令将rawHtml的值作为HTML内容插入 -->
    <p v-show="true"> 使用v-html指令： <span v-html="rawHtml"></span> </p>
    <!-- 使用v-bind指令绑定href属性，指向url的值 -->
    <a :href="url">百度一下你就知道</a>
    <!-- 使用v-on指令绑定点击事件，点击时调用adjust函数 -->
    <button @click="adjust()">反转</button>
    <div>
      <button @click="add()">增加</button>
      {{num}}
      <button @click="jian()">减少</button>
    </div>

    <div>
      电影《{{ dy.name }}》是{{ dypj }}
    </div>
     <div>
      电影《{{ dy.name }}》是{{ dypjfun() }}
    </div>
    <div>
      {{dy.piaofang}}
      {{dy.texiao}}
    </div>
    <div>
      <button @click="dy.piaofang = '2000万'">调整票房</button>
      <button @click="dy.texiao = '一般'">调整特效</button>
    </div>

    <h1> {{ message }} </h1>
    <input type="message" v-model="message">

    <div>
      <p>语文：<input type="number" v-model="yuwen"></p>
      <p>数学：<input type="number" v-model="shuxue"></p>
      <p>英语：<input type="number" v-model="yingyu"></p>
      <p>总分：{{ zongfen }}</p>
      <p>平均分：{{ pingjunfen }}</p>
    </div>
  </div>
</template>

<style scoped>

/* scoped属性表示样式只作用于当前组件 */
</style>
