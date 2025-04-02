<template>
    <el-table :data="studentInfos" stripe border style="width: 100%">
        <el-table-column prop="id" label="学号" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="live" label="宿舍" />
        <el-table-column prop="score" label="成绩">
            <template #default="{ row }">
                {{ row.score >= 60 ? '及格' : '挂科' }}
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="{ row, column, $index }">
                <el-button type="info" @click="handleConsult(row)">查看</el-button>
                <el-button type="primary" @click="handleAdjust(row)">修改</el-button>
                <el-popconfirm title="确定删除吗？" placement="top-start">
                    <template #reference>
                        <el-button type="danger">删除</el-button>
                    </template>
                </el-popconfirm>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" title="Tips" width="500">
        <template #default>
            <StudentInfoForm :one-data="oneData" :disabled="disabled" />
        </template>
        <template #footer>
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button @click="dialogVisible = false">确定</el-button>
        </template>
</el-dialog>
</template>


<script setup>
import StudentInfoForm from './StudentInfoForm.vue'
import { ref } from 'vue'
const dialogVisible = ref(false)
const oneData = ref({})
const disabled = ref(true)

const studentInfos = ref([
    { id: 2005001, name: '张三', live: '一善书院', score: 90 },
    { id: 2005002, name: '李四', live: '双馨书院', score: 85 },
    { id: 2005003, name: '王五', live: '三创书院', score: 61 },
    { id: 2005004, name: '周六', live: '四实书院', score: 59 },
    { id: 2005005, name: '郑七', live: '八方书院', score: 35 },
    { id: 2005006, name: '王八', live: '拾德书院', score: 66 }
])

function handleConsult(data) {
    console.log(data)
    oneData.value = data
    disabled.value = true
    dialogVisible.value = true
}

function handleAdjust(row) {
    oneData.value = row
    dialogVisible.value = true
    disabled.value = false
}
</script>
