<template>
    <el-form :model="oneData">
        <el-form-item v-for="(item, key) in studentInfoKeys" :key="key" :label="item">
            <el-input v-model="oneData[key]" :disabled="disabled" />
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps(['oneData', 'disabled'])
const studentInfoKeys = reactive({
    id: '学号',
    name: '姓名',
    live: '宿舍',
    score: '成绩'
})
</script>
