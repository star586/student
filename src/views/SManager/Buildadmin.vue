<template>
    <div class="whole">
        <span class="title">生成管理员</span>
        <el-divider></el-divider>
        <el-form ref="form" :model="admin" label-width="100px" label-position="right">
            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="姓名">
                        <el-input v-model="admin.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="工号">
                        <el-input v-model="admin.sno"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="身份证号">
                        <el-input v-model="admin.idcard"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-form-item label="性别">
                        <el-radio-group v-model="admin.sex">
                            <el-radio label="男生"></el-radio>
                            <el-radio label="女生"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="出生日期">
                        <el-date-picker type="date" placeholder="选择日期" v-model="admin.birthday"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="民族">
                        <el-select v-model="admin.nation">
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
                    <el-form-item label="所属学院">
                        <el-select v-model="admin.college">
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
                    <el-form-item label="电话">
                        <el-input v-model="admin.phone"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="政治面貌">
                        <el-select v-model="admin.politics">
                            <el-option label="共青团员" value="共青团员"></el-option>
                            <el-option label="党员" value="党员"></el-option>
                            <el-option label="群众" value="群众"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <span class="export">excel导入大量管理员>></span>
        <el-button type="primary" class="Button">导入</el-button>
        <span class="back">返回</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                admin: {
                    name: '',
                    sno: '',
                    idcard: '',
                    sex: '',
                    birthday: '',
                    nation: '',
                    college: '',
                    phone: '',
                    politics: '',
                },
                count: '123',
                check_sno: '',
                check: [{
                    college: '计算机科学学院',
                    major: '软件工程',
                    name: '小明',
                    sno: '2018110101',
                }, {
                    college: '计算机科学学院',
                    major: '软件工程',
                    name: '小红',
                    sno: '2018110102',
                }, {
                    college: '计算机科学学院',
                    major: '软件工程',
                    name: '小平',
                    sno: '2018110103',
                }, {
                    college: '计算机科学学院',
                    major: '软件工程',
                    name: '小王',
                    sno: '2018110104',
                }, {
                    college: '计算机科学学院',
                    major: '计算机科学与技术',
                    name: '小周',
                    sno: '2018110105',
                }, {
                    college: '计算机科学学院',
                    major: '网络工程',
                    name: '小黄',
                    sno: '2018110106',
                }],
            }
        }
    }
</script>

<style lang="less" scoped>
    .whole {
        background-color: #fffde8;
        height: 400px;
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
    }

    .back {
        position: relative;
        margin-left: 85%;
        color: blue;
    }
</style>