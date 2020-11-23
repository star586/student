<template>
    <div id="log">
        <label for="ppaw">原密码：</label>
        <input type="password" id="ppaw" v-model="ppassword" @blur="getPpawErr" placeholder="初始密码为身份证后6位"><span v-text="ppawErr"></span>
        <br />
        <label for="paw">密码：</label>
        <input type="password" id="paw" v-model="password" @blur="getPawErr" placeholder="密码必须6位以上"><span v-text="pawErr"></span>
        <br />
        <label for="repaw">确认密码：</label>
        <input type="password" id="repaw" v-model="repassword" @blur="getRepawErr" placeholder="必须与密码一致"><span v-text="repawErr"></span>
        <br />
        <el-button @click="submit" id="btn">确认</el-button>
        <br>
        <a @click="toreturn">返回</a>
    </div>
</template>
<script>
export default {
    data(){
        return{
                // url: "http://127.0.0.1:8080",
            ppassword: '',
            password: '',
            repassword: '',
            pawFlag: 0,
            repawFlag: 0,
            ppawFlag: 0,
            ppawErr: '',
            pawErr: '',
            repawErr: '',
        }
    },
        methods: {
            toreturn(){
                this.$router.push(this.$store.state.url);
            },
            getPpawErr() {
                this.ppawFlag = 0;
                var ppawReg = /^.{6,}$/g;
                if (this.ppassword == '') {
                    this.ppawErr = "不能为空";
                } else if (!ppawReg.test(this.ppassword)) {
                    this.ppawErr = "不能少于六位";
                } else {
                    this.ppawErr = '';
                    this.ppawFlag = 1;
                }
            },
            getPawErr() {
                this.pawFlag = 0;
                var pawReg = /.{6,}/g;
                if (this.password == '') {
                    this.pawErr = "不能为空";
                } else if (!pawReg.test(this.password)) {
                    this.pawErr = "格式错误";
                } else {
                    this.pawErr = '';
                    this.pawFlag = 1;
                }
            },
            getRepawErr() {
                this.repawFlag = 0;
                var repawReg = /.{6,}/g;
                if (this.repassword == '') {
                    this.repawErr = "不能为空";
                } else if (!repawReg.test(this.repassword)) {
                    this.repawErr = "格式错误";
                } else if (this.repassword != this.password) {
                    this.repawErr = "密码不一致";
                } else {
                    this.repawErr = '';
                    this.repawFlag = 1;
                }
            },
            submit() {
                console.log(1);
                if (this.ppawFlag === 1 && this.pawFlag === 1 && this.repawFlag === 1) {
                    console.log("submit");

                    // var obj = {
                    //     "phone": this.phone,
                    //     "code": this.verifyCode,
                    //     "password": this.password
                    // };
                    // console.log(obj);
                    // axios.post(this.url + "/register/retrievePassword",
                    //     obj, {
                    //         withCredentials: true
                    //     }
                    // ).then(function(response) {
                    //     //alert(response.data.message);
                    //     console.log(response);
                    //     if (response.data.message == "操作成功") {
                    //         alert("修改成功");
                    //         window.location.href = "Login.html";
                    //     }
                    // }, function(error) {
                    //     console.log(error);
                    // });
                    // window.location.href = "Login.html";
                    this.$message.error("修改成功");
                } else {
                    if (this.ppassword == '') {
                        this.ppawErr = "不能为空";
                    }
                    if (this.password == '') {
                        this.pawErr = "不能为空";
                    }
                    if (this.repassword == '') {
                        this.repawErr = "不能为空";
                    }
                }
            }
        },
    created(){
        // console.log(this.$store.state.list[0].code)
        if(this.$store.state.list[0].code==1){
            document.body.style.backgroundImage="url(" + require("../assets/sicnu.jpg") + ")";
            document.body.style.backgroundSize="100%";
        }else{
            document.body.style.backgroundImage="none";
        }
    }
}
</script>
<style lang="scss" scoped>
    body{
        background-size: 100%;
        width: 100%;
    }
    #log {
        width: 400px;
        min-width: 400px;
        height: 250px;
        min-height: 250px;
        background-color: rgba(255, 255, 255, 0.7);
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
        padding-top: 30px;
        border: 1px solid black;
    }
    input::placeholder {
        font-size: 5px;
    }
    label {
        display: inline-block;
        margin-top: 25px;
        margin-left: 15%;
        min-width: 20%;
        text-align: right;
        font-size: 15px;
    }
    
    button{
        font-size: 15px;
    }

    #btn {
        height: 30px;
        width: 100px;
        margin-left: 40%;
        margin-top: 20px;
        line-height: 8px;
        // background-color: gainsboro;
    }
        
     
    
    span {
        font-size: 3px;
        color: red;
    }
    
    #repaw,
    #ppaw,
    #paw {
        height: 30px;
        width: 40%;
        background-color: transparent;
        outline: none;
        border: none;
        min-width: 40%;
        border-bottom: 1px solid gray;
    }
    
    a {
        margin-left: 350px;
        cursor: pointer;
        color: #169BD5;
        font-size: 13px;
    }
</style>