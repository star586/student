<template>
    <div class="home_whole">
        <span class="title">生成用户</span>
        <el-divider></el-divider>
        <el-form ref="form" :model="stu" label-width="100px">
            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="姓名">
                        <el-input v-model="stu.name" class="Input"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="学号">
                        <el-input v-model="stu.sno" class="Input"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="身份证号">
                        <el-input v-model="stu.idcard" class="Input"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="性别">
                        <el-radio-group v-model="stu.sex">
                            <el-radio label="男生"></el-radio>
                            <el-radio label="女生"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="出生日期">
                        <el-date-picker type="date" placeholder="选择日期" v-model="stu.birthday" class="Input">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="民族">
                        <el-select v-model="stu.nation" class="Input">
                            <el-option label="汉族" value="汉族"></el-option>
                            <el-option label="藏族" value="藏族"></el-option>
                            <el-option label="维吾尔族" value="维吾尔族"></el-option>
                            <el-option label="苗族" value="苗族"></el-option>
                            <el-option label="回族" value="回族"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="学院">
                        <el-select v-model="stu.college" class="Input">
                            <el-option label="计算机科学学院" value="计算机科学学院"></el-option>
                            <el-option label="生物科学学院" value="生物科学学院"></el-option>
                            <el-option label="数学学院" value="数学学院"></el-option>
                            <el-option label="音乐学院" value="音乐学院"></el-option>
                            <el-option label="美术学院" value="美术学院"></el-option>
                            <el-option label="舞蹈学院" value="舞蹈学院"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="专业">
                        <el-select v-model="stu.major" class="Input">
                            <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
                            <el-option label="网络工程" value="网络工程"></el-option>
                            <el-option label="软件工程" value="软件工程"></el-option>
                            <el-option label="教育技术" value="教育技术"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="年级">
                        <el-select v-model="stu.grade" class="Input">
                            <el-option label="2017" value="2017"></el-option>
                            <el-option label="2018" value="2018"></el-option>
                            <el-option label="2019" value="2019"></el-option>
                            <el-option label="2020" value="2020"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="班级">
                        <el-select v-model="stu.class" class="Input">
                            <el-option label="1班" value="1班"></el-option>
                            <el-option label="2班" value="2班"></el-option>
                            <el-option label="3班" value="3班"></el-option>
                            <el-option label="4班" value="4班"></el-option>
                            <el-option label="5班" value="5班"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="宿舍">
                        <el-select v-model="stu.dormitory" style="width:107px">
                            <el-option label="东苑" value="东苑"></el-option>
                            <el-option label="西苑" value="西苑"></el-option>
                        </el-select>
                        <el-select v-model="stu.tung" style="width:107px">
                            <el-option label="1栋" value="1栋"></el-option>
                            <el-option label="2栋" value="2栋"></el-option>
                            <el-option label="3栋" value="3栋"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="学制">
                        <el-select v-model="stu.year" class="Input">
                            <el-option label="3年" value="3年"></el-option>
                            <el-option label="4年" value="4年"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="应届生">
                        <el-select v-model="stu.session" class="Input">
                            <el-option label="应届生" value="应届生"></el-option>
                            <el-option label="往届生" value="往届生"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="学习形式">
                        <el-select v-model="stu.study" class="Input">
                            <el-option label="全日制招生" value="全日制招生"></el-option>
                            <el-option label="成人高考" value="成人高考"></el-option>
                            <el-option label="远程教育" value="远程教育"></el-option>
                            <el-option label="自考" value="自考"></el-option>
                            <el-option label="国家开发大学" value="国家开发大学"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="政治面貌">
                        <el-select v-model="stu.politics" class="Input">
                            <el-option label="共青团员" value="共青团员"></el-option>
                            <el-option label="党员" value="党员"></el-option>
                            <el-option label="群众" value="群众"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="辅导员姓名">
                        <el-input v-model="stu.adname" class="Input"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="辅导员电话">
                        <el-input v-model="stu.adphone" class="Input"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="学籍状态">
                        <el-select v-model="stu.status" class="Input">
                            <el-option label="注册学籍" value="注册学籍"></el-option>
                            <el-option label="保留学籍" value="保留学籍"></el-option>
                            <el-option label="已离校" value="已离校"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <span class="export">excel导入大量用户>></span>
        <el-button type="primary" class="Button">导入</el-button>
        <span class="back" @click="user_manager">返回</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stu: {
                    name: '',
                    sno: '',
                    idcard: '',
                    sex: '',
                    birthday: '',
                    nation: '',
                    college: '',
                    major: '',
                    grade: '',
                    class: '',
                    dormitory: '',
                    tung: '',
                    year: '',
                    session: '',
                    study: '',
                    politics: '',
                    status: '',
                    adname: '',
                    adphone: '',
                }
            }
        },
        methods:{
            user_manager(){
                this.$router.push('/smanager/userm');
            }
        }
    }
</script>
<style lang="less" scoped>
    .home_whole {
        background-color: #fffde8;
        height: 600px;
        width: 900px;
        border-radius: 3px;
        border: 0.2px solid black;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .Button {
        position: relative;
        margin-left: 20%;
        font-size: 25px;
        margin-top: 1%;
    }
    .export{
        position: relative;
        margin-left: 5%;
        top: 35px;
        color: blue;
        cursor: pointer;
    }

    .back {
        position: relative;
        margin-left: 85%;
        color: blue;
        cursor: pointer;
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

    // /deep/ .el-form-item {
    //     padding: 0%;
    //     margin: 2%;
    // }

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