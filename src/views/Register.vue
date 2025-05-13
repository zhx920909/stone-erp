<script setup lang="ts">
import { reactive, ref } from 'vue'

const formData = reactive({
    employeeNo: '',
    employeeName: '',
    password: '',
    entryDate: '',
    regularizationDate: '',
    department: '',
    position: '',
    gender: '',
    birthDate: '',
    bankCardNumber: '',
    bankName: '',
    idCardNumber: '',
    age: '',
    education: '',
    accountingTitle: '',
    isPartyMember: '',
    householdRegisterLocation: '',
    currentAddress: '',
    contactPhone: '',
    emergencyContact: '',
    emergencyContactPhone: '',
    isContractSigned: '',
    contractStartDate: '',
    contractEndDate: '',
    renewalTimes: '',
    isSocialInsurancePurchased: '',
    probationarySalary: '',
    salary: '',
    departureDate: '',
    email: '',
    verifyCode: '',
    codeExpireTime: '',
    groupId: '',
    isValid: '',
})

const agreeSomething = ref(true)

const getLogoUrl = () => {
    return new URL('../assets/logo.svg', import.meta.url).href
}
const logoFit = 'fill'
</script>

<template>
    <div
        class="m-0 p-0 box-border bg-[#f5f7fa] bg-gradient-to-br from-[#f5f7fa] to-[#e4e8eb] flex justify-center items-center"
    >
        <div
            class="w-[420px] bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-10 mt-6 mb-6 relative overflow-hidden"
        >
            <div class="text-center mb-5">
                <el-image
                    :src="getLogoUrl()"
                    :fit="logoFit"
                    class="w-[100px] h-[100px]"
                />
            </div>

            <div class="text-center mb-8">
                <h1 class="text-[#2c3e50] text-2xl mb-2.5 font-bold">
                    创建企业账户
                </h1>
                <p class="text-[#7f8c8d] text-sm">
                    加入我们的 ERP 系统，提升企业管理效率
                </p>
            </div>

            <el-form :model="formData">
                <div class="mb-4">
                    <span class="block mb-2 text-[#2c3e50] text-sm font-medium"
                        >员工编号</span
                    >
                    <el-input
                        v-model="formData.employeeNo"
                        size="large"
                        placeholder="请输入员工编号"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >员工名</span
                    >
                    <el-input
                        v-model="formData.employeeName"
                        size="large"
                        placeholder="请输入员工名"
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
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >入职时间</span
                    >
                    <el-input
                        v-model="formData.entryDate"
                        size="large"
                        placeholder="请输入入职时间"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >转正时间</span
                    >
                    <el-input
                        v-model="formData.regularizationDate"
                        size="large"
                        placeholder="请输入转正时间"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >部门</span
                    >
                    <el-input
                        v-model="formData.department"
                        size="large"
                        placeholder="请输入部门"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >岗位</span
                    >
                    <el-input
                        v-model="formData.position"
                        size="large"
                        placeholder="请输入岗位"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >性别</span
                    >
                    <el-input
                        v-model="formData.gender"
                        size="large"
                        placeholder="请输入性别"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >出生日期</span
                    >
                    <el-input
                        v-model="formData.birthDate"
                        size="large"
                        placeholder="请输入出生日期"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >银行卡号</span
                    >
                    <el-input
                        v-model="formData.bankCardNumber"
                        size="large"
                        placeholder="请输入银行卡号"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >开户行</span
                    >
                    <el-input
                        v-model="formData.bankName"
                        size="large"
                        placeholder="请输入开户行"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >身份证号码</span
                    >
                    <el-input
                        v-model="formData.idCardNumber"
                        size="large"
                        placeholder="请输入身份证号码"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >年龄</span
                    >
                    <el-input
                        v-model="formData.age"
                        size="large"
                        placeholder="请输入年龄"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >学历</span
                    >
                    <el-input
                        v-model="formData.education"
                        size="large"
                        placeholder="请输入学历"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >会计职称</span
                    >
                    <el-input
                        v-model="formData.accountingTitle"
                        size="large"
                        placeholder="请输入会计职称"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >是否党员</span
                    >
                    <el-input
                        v-model="formData.isPartyMember"
                        size="large"
                        placeholder="请输入是否党员"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >户口所在地</span
                    >
                    <el-input
                        v-model="formData.householdRegisterLocation"
                        size="large"
                        placeholder="请输入户口所在地"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >现住址</span
                    >
                    <el-input
                        v-model="formData.currentAddress"
                        size="large"
                        placeholder="请输入现住址"
                        clearable
                    /><span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >联系电话</span
                    >
                    <el-input
                        v-model="formData.contactPhone"
                        size="large"
                        placeholder="请输入联系电话"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >紧急联系人</span
                    >
                    <el-input
                        v-model="formData.emergencyContact"
                        size="large"
                        placeholder="请输入紧急联系人"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >紧急联系人电话</span
                    >
                    <el-input
                        v-model="formData.emergencyContactPhone"
                        size="large"
                        placeholder="请输入紧急联系人电话"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >合同是否签订</span
                    >
                    <el-input
                        v-model="formData.isContractSigned"
                        size="large"
                        placeholder="请输入合同是否签订"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >合同起始时间</span
                    >
                    <el-input
                        v-model="formData.contractStartDate"
                        size="large"
                        placeholder="请输入合同起始时间"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >合同结束时间</span
                    >
                    <el-input
                        v-model="formData.contractEndDate"
                        size="large"
                        placeholder="请输入合同结束时间"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >续签次数</span
                    >
                    <el-input
                        v-model="formData.renewalTimes"
                        size="large"
                        placeholder="请输入续签次数"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >员工有无买社保</span
                    >
                    <el-input
                        v-model="formData.isSocialInsurancePurchased"
                        size="large"
                        placeholder="请输入员工有无买社保"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >试用期工资</span
                    >
                    <el-input
                        v-model="formData.probationarySalary"
                        size="large"
                        placeholder="请输入试用期工资"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >薪资</span
                    >
                    <el-input
                        v-model="formData.salary"
                        size="large"
                        placeholder="请输入薪资"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >离职时间</span
                    >
                    <el-input
                        v-model="formData.departureDate"
                        size="large"
                        placeholder="请输入离职时间"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >邮箱</span
                    >
                    <el-input
                        v-model="formData.email"
                        size="large"
                        placeholder="请输入邮箱"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >验证码</span
                    >
                    <el-input
                        v-model="formData.verifyCode"
                        size="large"
                        placeholder="请输入验证码"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >验证码过期时间</span
                    >
                    <el-input
                        v-model="formData.codeExpireTime"
                        size="large"
                        placeholder="请输入验证码过期时间"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >所属用户组</span
                    >
                    <el-input
                        v-model="formData.groupId"
                        size="large"
                        placeholder="请输入所属用户组"
                        clearable
                    />
                    <span
                        class="block mt-4 mb-2 text-[#2c3e50] text-sm font-medium"
                        >是否有效</span
                    >
                    <el-input
                        v-model="formData.isValid"
                        size="large"
                        placeholder="请输入是否有效"
                        clearable
                    />
                </div>

                <div class="mb-4 flex text-sm font-medium text-blue-500">
                    <input type="checkbox" name="" id="" class="mr-2" />
                    <span class="text-[#2c3e50]">我已阅读并同意</span>
                    <a href="">服务条款</a
                    ><span class="text-[#2c3e50]">和</span>
                    <a href="">隐私政策</a>
                </div>

                <el-button type="primary" size="large" class="w-full"
                    >注册</el-button
                >
            </el-form>

            <div class="text-center text-sm text-gray-500 mt-3 font-medium">
                已有账户？<a href="/login" class="text-blue-500">立即登录</a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
