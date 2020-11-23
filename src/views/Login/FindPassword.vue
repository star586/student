<template>
    <div id="log">
        <label for="phone">电话号码：</label>
        <input type="text" id="phone" v-model="phone" @blur="getPhoneErr"><span v-text="phoneErr"></span>
        <input type="button" id="verbtn" v-show='phoneShow' :value="btnValue" :style='verifybtnStyle' @click="getCode" >
        <br>
        <label for="verify">验证码：</label>
        <input type="text" id="verify" v-model="verifyCode" @blur="getVerifyErr" placeholder="验证码为六位"><span v-text="verifyErr"></span>
        <br />
        <label for="paw">密码：</label>
        <input type="password" id="paw" v-model="password" @blur="getPawErr" placeholder="密码必须6位以上"><span v-text="pawErr"></span>
        <br />
        <label for="repaw">确认密码：</label>
        <input type="password" id="repaw" v-model="repassword" @blur="getRepawErr" placeholder="必须与密码一致"><span v-text="repawErr"></span>
        <br />
        <input type="button" id="btn" value="确认" @click="submit">
        <br>
        <p @click="toLog">返回</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // url: "http://127.0.0.1:8080",
            disabled: '',
            btnValue: '获取验证码',
            phone: '',
            verifyCode: '',
            password: '',
            repassword: '',
            verifybtnStyle: {
                height: '30px',
                'background-color': 'transparent',
                outline: 'none',
                cursor: 'pointer',
                border:'none',
                color:'#169BD5'
            },
            time: "null",
            pawFlag: 0,
            repawFlag: 0,
            phoneFlag: 0,
            phoneShow: 1,
            codeFlag: 1,
            verifyFlag: 0,
            phoneErr: '',
            verifyErr: '',
            pawErr: '',
            repawErr: '',
            code: '1234'
        }
        },
        methods: {
            toLog(){
                this.$router.push('/login/log');
            },
            getPhoneErr() {
                this.phoneFlag = 0;
                var phoneReg = /(13|16|18|19|15)[0-9]{9}/g;
                if (this.codeFlag === 1) {
                    if (!phoneReg.test(this.phone) && this.phone != '') {
                        this.phoneShow = 0;
                        this.phoneErr = "格式错误";
                    } else if (this.phone == '') {
                        this.phoneShow = 0;
                        this.phoneErr = "不能为空";
                    } else {
                        this.phoneErr = '';
                        this.phoneShow = 1;
                        this.phoneFlag = 1;
                    }
                }
            },
            getVerifyErr() {
                this.verifyFlag = 0;
                var verifyReg = /^.{6}$/g;
                if (this.verifyCode == '') {
                    this.verifyErr = "不能为空";
                } else if (!verifyReg.test(this.verifyCode)) {
                    this.verifyErr = "格式错误";
                } else {
                    this.verifyErr = '';
                    this.verifyFlag = 1;
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
            getCode() {
                var i;
                if (this.phoneFlag === 0) {
                    this.phoneShow = 0;
                    this.phoneErr = "不能为空";
                } else {
                    if (this.time == "null") {
                        // var obj = {
                        //     "email": this.email
                        // };
                        // axios.post(this.url + "/register/retrievePasswordGetEmailCode",
                        //     obj, {
                        //         withCredentials: true
                        //     }
                        // ).then(function(response) {
                        //     console.log(response);
                        // }, function(error) {
                        //     console.log(error);
                        // });
                        this.phoneShow = 1;
                        this.codeFlag = 0;
                        this.verifybtnStyle['cursor'] = 'default';
                        this.verifybtnStyle['color']='#AAAAAA';
                        this.btnValue = "重新发送(59S)";
                        i = 58;
                        console.log(1);
                        this.time = setInterval(() => {
                            this.btnValue = "重新发送(" + i-- + "S)";
                            if (i == 0) {
                                clearInterval(this.time);
                                this.btnValue = "重新发送";
                                // this.disabled = "false";
                                this.time = "null";
                                this.verifybtnStyle['cursor'] = 'pointer';
                                this.verifybtnStyle['color']='#169BD5';
                                this.codeFlag = 1;
                            }
                        }, 1000);

                    }
                }
            },
            submit() {
                console.log(1);
                if (this.phoneFlag === 1 && this.verifyFlag === 1 && this.pawFlag === 1 && this.repawFlag === 1) {
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
                } else {
                    if (this.phone == '') {
                        this.phoneShow = 0;
                        this.phoneErr = "不能为空";
                    }
                    if (this.verifyCode == '') {
                        this.verifyErr = "不能为空";
                    }
                    if (this.password == '') {
                        this.pawErr = "不能为空";
                    }
                    if (this.repassword == '') {
                        this.repawErr = "不能为空";
                    }
                }
            }
        }
}
</script>
<style lang="scss" scoped>
    #log {
        padding-bottom: 30px;
        width: 400px;
        min-width: 400px;
        height: 250px;
        min-height: 250px;
        background-color: rgba(255, 255, 255, 0.7);
        margin-left: 800px;
        margin-top: -15%;
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
        font-size: 13px;
    }
    
    button{
        font-size: 15px;
    }

    #btn {
        height: 30px;
        width: 100px;
        margin-left: 40%;
        margin-top: 20px;
        background-color: gainsboro;
        outline: none;
        border-radius: 0.3em;
        border: 1px solid gainsboro;
        cursor: pointer;
    }
    
    #btn:hover {
        border-color: lightgray;
        background-color: lightgray;
    }
    
    span {
        font-size: 3px;
        color: red;
    }
    
    #repaw,
    #phone,
    #verify,
    #paw {
        height: 30px;
        width: 40%;
        background-color: transparent;
        outline: none;
        border: none;
        min-width: 40%;
        border-bottom: 1px solid gray;
    }
    
    p {
        margin-left: 340px;
        cursor: pointer;
        color: #169BD5;
        font-size: 13px;
        margin-top: -12px;
    }
</style>