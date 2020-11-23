<template>
    <div class="whole">
        <span class="title">用户管理</span>
        <el-divider></el-divider>
        <button class="student" @click="user_build">生成用户</button>
        <button class="student" @click="user_manager">管理用户</button>
    </div>
</template>

<script>
export default {
    methods:{
        user_build(){
            this.$router.push('/smanager/builduser');
        },
        user_manager(){
            this.$router.push('/smanager/muser');
        }
    }
}
</script>

<style lang="less" scoped>
    .whole{
        background-color: #fffde8;
        height: 500px;
        width: 900px;
        border-radius: 3px;
        border: 0.2px solid black;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .title {
        font-size: 32px;
        padding: 0%;
        margin-left: 2%;
        position: relative;
        top: 15px;
        margin-bottom: 0.5%;
    }
    .student{
        background-color: #409eff;
        width: 150px;
        color: white;
        cursor: pointer;
        border: none;
        text-align: center;
        border-radius: 9px;
        text-decoration: none;
        display: inline-block;
        font-size: 40px;
        padding: 40px 30px;
        margin-top: 10%;
        margin-right: 15%;
        position: relative;
        left: 250px;
    }
</style>