<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
    employeeNo: '',
    password: '',
})

const getLogoUrl = () => {
    return new URL('../assets/logo.svg', import.meta.url).href
}
const logoFit = 'fill'

import { useRouter } from 'vue-router'

const router = useRouter()

const toRegister = () => {
    router.push({
        name: 'register',
        params: {
            employeeNo: formData.employeeNo,
        },
    })
}
</script>

<template>
    <div
        class="m-0 p-0 box-border bg-[#f5f7fa] flex justify-center items-center h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8eb]"
    >
        <div
            class="w-[420px] bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-10 relative overflow-hidden"
        >
            <div class="flex justify-center mb-[20px]">
                <el-image
                    :src="getLogoUrl()"
                    :fit="logoFit"
                    class="w-[100px] h-[100px]"
                />
            </div>

            <div class="text-center mb-[30px]">
                <h1 class="text-[#2c3e50] text-2xl mb-2.5 font-bold">
                    企业资源管理系统
                </h1>
                <p class="text-[#7f8c8d] text-sm">
                    Enterprise Resource Planning System
                </p>
            </div>

            <el-form :model="formData">
                <div class="mb-4">
                    <span class="block mb-2 text-[#2c3e50] text-sm font-medium"
                        >工号</span
                    >
                    <el-input
                        v-model="formData.employeeNo"
                        size="large"
                        placeholder="请输入工号"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >密码</span
                    >
                    <el-input
                        v-model="formData.password"
                        size="large"
                        placeholder="请输入密码"
                        clearable
                    />
                </div>

                <div class="mb-4 flex justify-end">
                    <el-link type="primary">找回密码</el-link>
                </div>

                <el-button
                    type="primary"
                    size="large"
                    class="w-full"
                    @click="toRegister()"
                    >登录</el-button
                >
            </el-form>
            <div class="mt-4 text-center text-[12px] text-[#95a5a6]">
                <p>© 2025 宽石. 保留所有权利. 版本 v1.0.0</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
