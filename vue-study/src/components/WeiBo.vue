<template>
<div>
    <h1>{{ upName }}</h1>
    <p>{{blogContent}}</p>
    <div>转发：{{forward}}</div>
    <div>评论：{{reply}}</div>
    <div>点赞：{{like}}</div>
    <button @click="passValue()">字体放大</button>
    <button >字体缩小</button>


</div>
</template>

<script setup>

const props = defineProps({
    upName: {
        type:String,
        required: false,//是否必传，false可选，true必传
        default: '佚名'
    },
    blogContent: {
        type:[String,Number],//可以传字符串和数字
        required: true
    },
    forward:{
        type: Number,
        required: false,
        default: 0
    },
    reply: {
        type: Number,
        required: false,
        default: 0
    },
    like: {
        type: Number,
        required: false,
        default: 0
    },
})

const emit = defineEmits(['father-listen'])
function passValue(){
    emit('father-listen',0.1)
}

</script>