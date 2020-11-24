<!--
 * @Author: Clloz
 * @Date: 2020-11-24 15:54:05
 * @LastEditTime: 2020-11-24 18:04:33
 * @LastEditors: Clloz
 * @Description: 
 * @FilePath: /vue-shop/src/components/Login.vue
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
-->
<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="" />
            </div>
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                :rules="loginFormRules"
                label-width="0px"
                class="login_form"
            >
                <el-form-item prop="username">
                    <el-input
                        v-model="loginForm.username"
                        placeholder="请输入用户名"
                        prefix-icon="el-icon-user"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="loginForm.password"
                        type="password"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock"
                    ></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button @click="resetLoginForm" type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
            loginFormRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度必须在 3 - 10 之间', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度必须在 6 - 15 之间', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        resetLoginForm() {
            // console.log(this);
            this.$refs.loginFormRef.resetFields();
        },
        login() {
            this.$refs.loginFormRef.validate(async valid => {
                if (!valid) return;
                const { data: res } = await this.$http.post('login', this.loginForm);

                console.log(res);
                if (res.meta.status !== 200) {
                    this.$message.error('登录失败');
                } else {
                    this.$message.success('登录成功');
                    sessionStorage.setItem('token', res.data.token);
                    this.$router.push('./home');
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.login_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    background-color: #2b4b6b;
}

.login_box {
    position: relative;
    width: 450px;
    height: 300px;
    margin-top: -20px;
    border-radius: 3px;
    background-color: white;
}

.avatar_box {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 130px;
    width: 130px;
    margin-top: -76px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 10px #ddd;
    background-color: #ccc;

    img {
        width: 100%;
        height: 100;
        border-radius: 50%;
        background-color: #eee;
    }
}

.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .btn {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
