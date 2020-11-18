<template>
    <div id="login">
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username" @blur="inputUsername" placeholder="请输入已绑定的学号/工号"><span v-text="userErr"></span>
        <br>
        <label for="paw">密码：</label>
        <input type="password" id="paw" v-model="password" @blur="inputPassword" placeholder="初始密码为身份证后六位"><span v-text="pawErr"></span>
        <br>
        <el-button @click="login" id="btn">确认</el-button>
        <div>
            <a @click="toFindPwd">忘记密码</a>
            <a @click="toFindId" id="aaa">学号查找</a>
        </div>
    </div>
</template>
<script>
// import axios from "axios"
export default {
    data(){
        return{
            username: '',
            password: '',
            userErr: '',
            pawErr: '',
            userFlag: 0,
            pawFlag: 0,
        }
        },
        methods: {
            toFindPwd(){
                this.$router.push('/login/findPassword');
            },
            toFindId(){
                this.$router.push('/login/findId');
            },
            inputUsername() {
                var userReg = /^[0-9]{10}$/g;
                if (userReg.test(this.username)) {
                    this.userFlag = 1;
                    this.userErr = "";
                } else {
                    this.userFlag = 0;
                    if (this.username === '') {
                        this.userErr = "不能为空";
                    } else {
                        this.userErr = "格式错误";
                    }
                }
            },
            inputPassword() {
                var pawReg = /^.{6,}$/g;
                if (pawReg.test(this.password)) {
                    this.pawFlag = 1;
                    this.pawErr = "";
                } else {
                    this.pawFlag = 0;
                    if (this.password === '') {
                        this.pawErr = "不能为空";
                    } else if (this.password.length < 8) {
                        this.pawErr = "不能小于6位";
                    }
                }
            },
            login() {
                if (this.userFlag === 1 && this.pawFlag === 1) {
                    var obj = {
                        'username': this.username,
                        'password': this.password
                    }
                    var code;
                    // console.log(obj);
                    var qs = require('qs');
                    // this.axios.post("/user/login",qs.stringify(obj),{
                    this.axios.post("/login",qs.stringify(obj),{
                        withCredentials:true
                    }).then(res=>{
                        // console.log(res.data);
                        if(res.data.msg!="登录成功"){
                            this.$message.error({
                                message: res.data.msg,
                                duration:1500
                            });
                        }else{
                            this.$message({
                                message: res.data.msg,
                                type: 'success',
                                duration:1500
                            });
                        }
                        code=res.data.detail.code;
                        this.$store.commit("setId",{id:this.username,code:code});
                        if(this.$store.state.code==1){
                            this.$router.push('/smanager');
                        }else if(this.$store.state.code==2){
                            this.$router.push('/manager');
                        }else if(this.$store.state.code==3){
                            this.$router.push('/student');
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                 }else {
                    if (this.username == '') {
                         this.userErr = "不能为空";
                         this.userFlag = 0;
                    }
                    if (this.password == '') {
                         this.pawErr = "不能为空";
                         this.pawFlag = 0;
                    }
                }  
            }
        },
        mounted(){
            // this.axios.get("/user/all").then(
            //     res=>{
            //         console.log(res.data)
            //     }
            // )
            // console.log(this.id)
            // var obj={
            //     "id": "1323341",
            // };
            // this.axios.post('/user/query',obj).then(
            //     res=>{
            //         console.log(res.data);
            //     }).catch(err=>{
            //         console.log(err);
            //     }
            // )
        }
}
</script>
<style lang="scss" scoped>
 #login {
        padding-top: 30px;
        width: 400px;
        min-width: 400px;
        height: 250px;
        min-height: 250px;
        background-color: rgba(255, 255, 255, 0.7);
        margin-left: 800px;
        margin-top: -15%;
        div{
            margin-top: 25px;
        }
    }
    
    label {
        display: inline-block;
        margin-top: 35px;
        margin-left: 15%;
        min-width: 20%;
        text-align: right;
        font-size: 13px;
    }
    input::placeholder {
        font-size: 5px;
    }
    #username,
    #paw {
        height: 30px;
        width: 40%;
        outline: none;
        border: none;
        min-width: 40%;
        background-color: transparent;
        border-bottom: 1px solid gray;
    }
    
    #btn {
        height: 30px;
        width: 100px;
        margin-left: 40%;
        margin-top: 30px;
        line-height: 8px;
    }
    
    span {
        font-size: 3px;
        color: red;
    }
    
    a {
        color: #169BD5;
        margin-left: 5%;
        cursor: pointer;
        font-size: 13px;
    }
    #aaa{
        margin-left: 260px;
    }
</style>