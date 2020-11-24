<!--
 * @Author: Clloz
 * @Date: 2020-11-24 18:09:58
 * @LastEditTime: 2020-11-24 18:34:17
 * @LastEditors: Clloz
 * @Description: 
 * @FilePath: /vue-shop/src/components/Home.Vue
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
-->
<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            window.sessionStorage.clear();
            this.$router.push('/login');
        },
    },
};
</script>

<style lang="less" scoped></style>
