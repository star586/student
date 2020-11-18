<template>
    <div>
        <div id="conent">
            <h1>四川师范大学数字迎新系统</h1>
            <div id="top">
                <div class="part1">
                    <div id="dao1" @click="toManagerM">普通管理员管理</div>
                    <div id="dao1" @click="toUserM">用户管理</div>
                    <div id="dao1" @click="toInformM">学校通知管理</div>
                    <div id="dao1" @click="toHome">首页</div>
                </div>
                <div class="part2">
                    <div id="dao2">
                        <ul @mouseover="setUlFlag" @mouseleave="delUlFalg"><div id="user">用户中心</div>
                            <li v-show="ulFlag" @click="toUpdatePwd">修改密码</li>
                            <li v-show="ulFlag" @click="logout">退出登录</li>
                        </ul>
                    </div>
                </div>
            </div>
            <router-view/>
        </div>
        <div id="foot">
            <div id="site">
                <div>狮子山校区：成都市锦江区静安路5号 (邮编:610066)</div>
                <div>成龙校区：成都市龙泉驿区成龙大道二段1819号 (邮编:610101)</div>
                <div>© All Right Reserved . 四川师范大学 版权所有  蜀ICP备05026983号</div>
            </div>
            <div id="sicnu">
                <a href="https://www.weibo.com/chuanshida?refer_flag=1015155010_&is_all=1">@四川师范大学微博</a>
                <br><br><br><br>
                <a href="http://www.sicnu.edu.cn/">@四川师范大学官网</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            ulFlag:0,
        }
    },
    methods:{
        logout(){
            this.$store.commit("clearId");
            this.$router.push('/login');
        },
        toUpdatePwd(){
            this.$router.push('/updatepassword');
        },
        setUlFlag() {
            this.ulFlag = 1;
        },
        delUlFalg() {
            this.ulFlag = 0;
        },
        toManagerM(){
            this.$router.push('/smanager/managerm');
        },
        toHome(){
            this.$router.push('/smanager/home');
        },
        toUserM(){
            this.$router.push('/smanager/userm');
        },
        toInformM(){
            this.$router.push('/smanager/informm');
        }
    },
    mounted(){
        document.body.style.background='none';
    }
}
</script>

<style lang="scss" scoped>
    h1{
        text-align: center;
        height: 80px;
        line-height: 80px;
    }
    #conent{
        background-size: 100%;
        width: 100%;
        min-height: 510px;
    }
    
    #top {
        width: 100%;
        background-color:black;
        opacity: 0.6; 
        display: flex;
        justify-content: space-between;
    }
    .part1{
        width: 1000px;
        height: 100%;
    }
    #dao1{
        display: inline-block;
        color: white;
        height: 32px;
        width: 200px;
        line-height: 32px;
        text-align: center;
        border: 1px solid transparent;
        -webkit-user-select: none;
        font-size: 14px;
        float: right;
        cursor: pointer;
    }

    #dao1:hover {
        background-color: rgb(80, 79, 79);
    }
    ul{
        height: 32px;
        line-height: 32px;
        color: white;
        font-size: 14px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        li{
            list-style: none;
            color: white;
            background-color: black;
            width: 100px;
            text-align: center;
            cursor: pointer;
        }
        li:hover{
            background-color: rgb(80, 79, 79);
        }
    }
    #user{
        height: 100%;
        width: 100px;
        display: inline-block;
    }
    #user:hover{
        background-color: rgb(80, 79, 79);
    }
    #foot{
        height: 170px;
        width: 100%;
        background-color:#797979;
        // opacity: 0.6; 
        color: white;
        font-size: 13px;
        #site{
            width: 800px;
            padding-top: 65px;
            padding-left: 5%;
            div{
                display: inline-block;
                height: 30px;
                width: 400px;
            }
        }
    }
    #sicnu{
        position: absolute;
        margin-top: -80px;
        margin-left: 85%;
        font-size: 13px;
        a{
            color: white;
            text-decoration: none;
        }
    }
    
</style>