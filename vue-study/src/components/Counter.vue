<template>
<div>
    <h1>{{ count }}</h1>
    <button @click="$emit('evewnt-name',1)">增加</button>
    <button @click="decrease()">减少</button>
</div>
</template>

<script setup>

import {ref} from 'vue'
// const props = defineProps(['count']);

const emit = defineEmits(['evewnt-name']);

function decrease(){
    emit('evewnt-name',-1);
}

const props = defineProps({
    count:{
        require: true,
        type: Number,
        default: 0
    },
    countObj:{
        type: Object,
        require:false,
        default(p) {
            return{
                message:'hello'
            }
        }
    },
    countFunc:{
        type: Function,
        require:false,
        default() {
            console.log("countFunc");
            return null;          
        }
    }
})

</script>