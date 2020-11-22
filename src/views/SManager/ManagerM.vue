<template>
    <div class="whole">
        <span class="title">管理员管理</span>
        <el-divider></el-divider>
        <button class="student" @click="admin_build">生成管理员</button>
        <button class="student" @click="admin_manager">管理管理员</button>
    </div>
</template>

<script>
export default {
    methods:{
        admin_build(){
            this.$router.push('/smanager/buildadmin');
        },
        admin_manager(){
            this.$router.push('/smanager/madmin')
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
        width: 180px;
        color: white;
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