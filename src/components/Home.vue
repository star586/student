<template>
    <div>
        <div id="conent">
            <h1>四川师范大学数字迎新系统</h1>
            <div id="top">
                <div class="part1">
                    <div v-for="data in List" :key="data.link" @click="toOther(data.link)" :class="(data.code==1 & data.name!='按学号查找信息')?'Block':'None'" class="home">{{data.name}}</div>
                </div>
                <div id="part3" v-if="List[10].code">
                    <input type="text" id="inputId" placeholder="学号" />
                    <el-button  size="mini"  icon="el-icon-search" id="search" @click="toFindById"></el-button>
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
            List:[]
        }
    },
    methods:{
        logout(){
            this.$store.commit("clearId");
            this.$router.push('/login');
        },
        toFindById(){
            this.$router.push('/manager/findbyid')
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
        toOther(id){
            // console.log(index)
            if (this.$route.path !== id) {
                this.$router.push(id);
            }

            
        },
    },
    created(){
        this.List=this.$store.state.list;
        // console.log(this.$store.state.list)
        
    },
    mounted(){
        var a=document.getElementsByClassName('home');
        var i=0;
        if(this.List[0].code==1){
            document.body.style.backgroundImage="url(" + require("../assets/sicnu.jpg") + ")";
            document.body.style.backgroundSize="100%";
            for(i = 0; i < a.length; i++){
                a[i].style.width = "150px";
            }
        }else{
            if(this.List[6].code==1){
                // document.getElementsByClassName('home').style.width="190px";
                for(i = 0; i < a.length; i++){
                    a[i].style.width = "190px";
                }
            }else{
                //  document.getElementsByClassName('home').style.width="200px";
                for(i = 0; i < a.length; i++){
                    a[i].style.width = "200px";
                }
            }
            document.body.style.backgroundImage="none";
        }
        
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
        min-height: 410px;
    }
    
    #top{
        width: 100%;
        background-color:black;
        opacity: 0.6; 
        display: flex;
        z-index: 0;
        justify-content: space-between;
    }
    .part1{
        // width: 60%;
        height: 100%;
        margin-left: 15%;
        div{
            // display: inline;
            color: white;
            height: 32px;
            // width: 150px;
            line-height: 32px;
            text-align: center;
            border: 1px solid transparent;
            -webkit-user-select: none;
            font-size: 14px;
            float: left;
            cursor: pointer;
        }
        div:hover {
            background-color: rgb(80, 79, 79);
        }
    }
    
    #part3{
        display: inline-block;
    }
    
    #inputId{
        display: inline-block;
        width: 120px;
        height: 20px;
        border-radius: 0.7em;
        outline: none;
        border: none;
        padding-top: 5px;
    }
    #search{
        display: inline-block;
        color: white;
        border: none;
        outline: none;
        font-size: 20px;
        background-color: transparent;
        z-index: 1;
        cursor: pointer;
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
    .None{
        display: none;
    }
    .Block{
        display: inline;
    }

    
</style>