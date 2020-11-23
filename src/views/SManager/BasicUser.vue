<template>
    <div class="home_whole">
        <span class="title">学生用户管理</span>
        <el-divider></el-divider>
        <div class="part">
            <span class="title">基本信息</span>
            <el-divider></el-divider>
            <el-form ref="form" :model="stu" label-width="100px">
                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="姓名">
                            <el-input v-model="stu.name" class="Input"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="姓名：">
                            <span v-text="stu.name"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="学号">
                            <el-input v-model="stu.sno" class="Input"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="学号：">
                            <span v-text="stu.sno"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="身份证号">
                            <el-input v-model="stu.idcard" class="Input"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="身份证号：">
                            <span v-text="stu.idcard"></span>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="性别">
                            <el-radio-group v-model="stu.sex">
                                <el-radio label="男生"></el-radio>
                                <el-radio label="女生"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item v-show="show2" label="性别：">
                            <span v-text="stu.sex"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="出生日期">
                            <el-date-picker type="date" placeholder="选择日期" v-model="stu.birthday" value-format="yyyy-MM-dd" class="Input">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item v-show="show2" label="出生日期：">
                            <span v-text="stu.birthday"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="民族">
                            <el-select v-model="stu.nation" class="Input">
                                <el-option label="汉族" value="汉族"></el-option>
                                <el-option label="藏族" value="藏族"></el-option>
                                <el-option label="维吾尔族" value="维吾尔族"></el-option>
                                <el-option label="苗族" value="苗族"></el-option>
                                <el-option label="回族" value="回族"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="民族：">
                            <span v-text="stu.nation"></span>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="学院">
                            <el-select v-model="stu.college" class="Input">
                                <el-option label="计算机科学学院" value="计算机科学学院"></el-option>
                                <el-option label="生物科学学院" value="生物科学学院"></el-option>
                                <el-option label="数学学院" value="数学学院"></el-option>
                                <el-option label="音乐学院" value="音乐学院"></el-option>
                                <el-option label="美术学院" value="美术学院"></el-option>
                                <el-option label="舞蹈学院" value="舞蹈学院"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="学院：">
                            <span v-text="stu.college"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="专业">
                            <el-select v-model="stu.major" class="Input">
                                <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
                                <el-option label="网络工程" value="网络工程"></el-option>
                                <el-option label="软件工程" value="软件工程"></el-option>
                                <el-option label="教育技术" value="教育技术"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="专业：">
                            <span v-text="stu.major"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="年级">
                            <el-select v-model="stu.grade" class="Input">
                                <el-option label="2017" value="2017"></el-option>
                                <el-option label="2018" value="2018"></el-option>
                                <el-option label="2019" value="2019"></el-option>
                                <el-option label="2020" value="2020"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="年级：">
                            <span v-text="stu.grade"></span>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="班级">
                            <el-select v-model="stu.class" class="Input">
                                <el-option label="1班" value="1班"></el-option>
                                <el-option label="2班" value="2班"></el-option>
                                <el-option label="3班" value="3班"></el-option>
                                <el-option label="4班" value="4班"></el-option>
                                <el-option label="5班" value="5班"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="班级：">
                            <span v-text="stu.class"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="宿舍">
                            <el-select v-model="stu.dormitory" style="width:75px">
                                <el-option label="东苑" value="东苑"></el-option>
                                <el-option label="西苑" value="西苑"></el-option>
                            </el-select>
                            <el-select v-model="stu.tung" style="width:75px">
                                <el-option label="1栋" value="1栋"></el-option>
                                <el-option label="2栋" value="2栋"></el-option>
                                <el-option label="3栋" value="3栋"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="宿舍：">
                            <span v-text="stu.dormitory"></span>
                            <span v-text="stu.tung"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="学制">
                            <el-select v-model="stu.year" class="Input">
                                <el-option label="3年" value="3年"></el-option>
                                <el-option label="4年" value="4年"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="学制：">
                            <span v-text="stu.year"></span>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="应届生">
                            <el-select v-model="stu.session" class="Input">
                                <el-option label="应届生" value="应届生"></el-option>
                                <el-option label="往届生" value="往届生"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="应届生：">
                            <span v-text="stu.session"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="学习形式">
                            <el-select v-model="stu.study" class="Input">
                                <el-option label="全日制招生" value="全日制招生"></el-option>
                                <el-option label="成人高考" value="成人高考"></el-option>
                                <el-option label="远程教育" value="远程教育"></el-option>
                                <el-option label="自考" value="自考"></el-option>
                                <el-option label="国家开发大学" value="国家开发大学"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="学习形式：">
                            <span v-text="stu.study"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="政治面貌">
                            <el-select v-model="stu.politics" class="Input">
                                <el-option label="共青团员" value="共青团员"></el-option>
                                <el-option label="党员" value="党员"></el-option>
                                <el-option label="群众" value="群众"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="政治面貌：">
                            <span v-text="stu.politics"></span>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="辅导员姓名">
                            <el-input v-model="stu.adname" class="Input"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="辅导员姓名：">
                            <span v-text="stu.adname"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="辅导员电话">
                            <el-input v-model="stu.adphone" class="Input"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="辅导员电话：">
                            <span v-text="stu.adphone"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="学籍状态">
                            <el-select v-model="stu.status" class="Input">
                                <el-option label="注册学籍" value="注册学籍"></el-option>
                                <el-option label="保留学籍" value="保留学籍"></el-option>
                                <el-option label="已离校" value="已离校"></el-option>
                            </el-select>
                        </el-form-item>
                         <el-form-item v-show="show2" label="学籍状态：">
                            <span v-text="stu.status"></span>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <el-button type="primary" class="Button" v-show="show1" @click="Confirm">确认</el-button>
        <el-button type="primary" class="Button1" v-show="show2" @click="Update">更新用户信息</el-button>
        <span class="back">返回</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stu: {
                    name: '小明',
                    sno: '111',
                    idcard: '123456789123456789',
                    sex: '男',
                    birthday: '2000-01-01',
                    nation: '汉族',
                    college: '计算机科学学院',
                    major: '软件工程',
                    grade: '大一',
                    class: '1班',
                    dormitory: '东苑',
                    tung: '三栋',
                    year: '4年',
                    session: '应届生',
                    study: '线下',
                    politics: '共青团员',
                    status: '小红',
                    adname: '12345678912',
                    adphone: '注册学籍',
                },
                show1:false,
                show2:true
            }
        },
        methods:{
            Confirm(){
                this.show1=false;
                this.show2=true;
            },
            Update(){
                this.show1=true;
                this.show2=false;
            }
        },
        watch:{

        }
    }
</script>
<style lang="less" scoped>
    .home_whole {
        background-color: #fffde8;
        height: 600px;
        width: 1000px;
        border-radius: 3px;
        border: 0.2px solid black;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .Button{
        position: relative;
        margin-left: 45%;
        font-size: 25px;
        margin-top: 1%;
    }
    .Button1{
        position: relative;
        margin-left: 40%;
        font-size: 25px;
        margin-top: 1%;
    }
    .back{
        position: relative;
        margin-left: 85%;
        color: blue;
    }
    .part {
        background-color: transparent;
        height: 70%;
        width: 80%;
        border: 1px solid black;
        position: relative;
        margin-top: 3%;
        margin-left: 10%;
    }

    .title {
        font-size: 32px;
        padding: 0%;
        margin-left: 2%;
        position: relative;
        top: 15px;
        margin-bottom: 0.5%;
    }

    .el-input {
        background-color: transparent;
        width: 100%;
    }

    .el-select {
        width: 100%;
    }

    .el-form-item {
        margin-right: 2%;
    }

    .el-input {
        border-radius: 4px;
        min-height: 36px;
    }

    /deep/ .el-row {
        margin-top: 2%;
        // padding-left: 2%;
        padding-right: 2%;
        height: 1%;
        margin: 0%;
    }

    /deep/ .el-form-item {
        padding: 0%;
        margin: 2%;
    }

    // /deep/ .el-col {
    //     align-items: center;
    //     padding: 0px;
    //     height: 1%;
    //     /* margin: 0%; */
    // }

    // /deep/ .el-form {
    //     padding: 0%;
    //     height: 6%;
    //     /* margin: 0%; */
    // }

    // /deep/ .el-input_inner {
    //     background: thistle;
    //     /* width: 30%; */
    //     height: 30px;
    //     /* margin: 0%; */
    // }
</style>