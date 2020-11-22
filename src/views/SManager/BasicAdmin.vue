<template>
    <div class="whole">
        <span class="title">管理员管理</span>
        <el-divider></el-divider>
        <div class="part">
            <el-form ref="form" :model="admin" label-width="100px" label-position="right">
                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="姓名">
                            <el-input v-model="admin.name"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="姓名：">
                            <span v-text="admin.name"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="工号">
                            <el-input v-model="admin.sno"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="工号：">
                            <span v-text="admin.sno"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="身份证号">
                            <el-input v-model="admin.idcard"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="身份证号：">
                            <span v-text="admin.idcard"></span>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="性别">
                            <el-radio-group v-model="admin.sex">
                                <el-radio label="男生"></el-radio>
                                <el-radio label="女生"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item v-show="show2" label="性别：">
                            <span v-text="admin.sex"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="出生日期">
                            <el-date-picker type="date" placeholder="选择日期" v-model="admin.birthday" value-format="yyyy-MM-dd"></el-date-picker>
                        </el-form-item>
                        <el-form-item v-show="show2" label="出生日期：">
                            <span v-text="admin.birthday"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="民族">
                            <el-select v-model="admin.nation">
                                <el-option label="汉族" value="汉族"></el-option>
                                <el-option label="藏族" value="藏族"></el-option>
                                <el-option label="维吾尔族" value="维吾尔族"></el-option>
                                <el-option label="苗族" value="苗族"></el-option>
                                <el-option label="回族" value="回族"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="民族：">
                            <span v-text="admin.nation"></span>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="所属学院">
                            <el-select v-model="admin.college">
                                <el-option label="计算机科学学院" value="计算机科学学院"></el-option>
                                <el-option label="生物科学学院" value="生物科学学院"></el-option>
                                <el-option label="数学学院" value="数学学院"></el-option>
                                <el-option label="音乐学院" value="音乐学院"></el-option>
                                <el-option label="美术学院" value="美术学院"></el-option>
                                <el-option label="舞蹈学院" value="舞蹈学院"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="所属学院：">
                            <span v-text="admin.college"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="电话">
                            <el-input v-model="admin.phone"></el-input>
                        </el-form-item>
                        <el-form-item v-show="show2" label="电话：">
                            <span v-text="admin.phone"></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item v-show="show1" label="政治面貌">
                            <el-select v-model="admin.politics">
                                <el-option label="共青团员" value="共青团员"></el-option>
                                <el-option label="党员" value="党员"></el-option>
                                <el-option label="群众" value="群众"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="show2" label="政治面貌：">
                            <span v-text="admin.politics"></span>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-button type="primary" v-show="show1" class="Confirm" @click="confirm_true">确认</el-button>
            <br>
            <span class="Count">管理的新生总人数为：</span><span class="Count1" v-text="count"></span>
            <el-form label-width="60px" :inline="true" style="margin-left:50%">
                <el-row>
                    <el-form-item label="学号">
                        <el-input v-model="check_sno"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查找</el-button>
                    </el-form-item>
                </el-row>
            </el-form>
            <el-table v-show="show1" :header-row-style="getRowClass" :row-style="getRowClass" :header-cell-style="{textAlign:'center'}"
                :cell-style="{textAlign:'center'}" tooltip-effect="dark" :data="check" border class="Biao"
                @selection-change="handelSelectionChange">
                <el-table-column type="selection" label="所有" width="60"></el-table-column>
                <el-table-column prop="college" label="学院" width="157"></el-table-column>
                <el-table-column prop="major" label="专业" width="160"></el-table-column>
                <el-table-column prop="name" label="姓名" width="150"></el-table-column>
                <el-table-column prop="sno" label="学号" width="150"></el-table-column>
            </el-table>
            <el-table v-show="show2" :header-row-style="getRowClass" :row-style="getRowClass" :header-cell-style="{textAlign:'center'}"
                :cell-style="{textAlign:'center'}" tooltip-effect="dark" :data="check" border class="Biao"
                @selection-change="handelSelectionChange">
                <el-table-column prop="college" label="学院" width="167"></el-table-column>
                <el-table-column prop="major" label="专业" width="190"></el-table-column>
                <el-table-column prop="name" label="姓名" width="160"></el-table-column>
                <el-table-column prop="sno" label="学号" width="160"></el-table-column>
            </el-table>
        </div>
        <el-button type="primary" v-show="show1" class="Delete">删除</el-button>
        <el-button type="primary" v-show="show1" class="Export">导入新用户名单</el-button>
        <span class="back" v-show="show1">返回</span>
        <el-button type="primary" v-show="show2" @click="Update_message" class="Update">更新信息</el-button>
        <span class="back1" v-show="show2">返回</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                admin: {
                    name: '小李',
                    sno: '123',
                    idcard: '12345678954545',
                    sex: '男',
                    birthday: '1991-01-01',
                    nation: '汉族',
                    college: '计算机科学学院',
                    phone: '12345678912',
                    politics: '党员',
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
                show1:false,
                show2:true
            }
        },
        methods: {
            handelSelectionChange(val) {
                this.mulipleSeletion = val;
            },
            getRowClass() {
                return "background-color:transparent"
            },
            Update_message(){
                this.show1=true;
                this.show2=false;
            },
            confirm_true(){
                this.show1=false;
                this.show2=true;
            }
        }
    }
</script>

<style lang="less" scoped>
    .whole {
        background-color: #fffde8;
        height: 800px;
        width: 1000px;
        border-radius: 3px;
        border: 0.2px solid black;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .part {
        background-color: transparent;
        height: 68%;
        width: 80%;
        position: relative;
        margin-top: 3%;
        margin-left: 10%;
    }

    .Biao {
        width: 86%;
        position: relative;
        left: 8%;
    }

    /deep/ .el-table,
    /deep/ .el-table tr,
    /deep/ .el-table td {
        background-color: transparent;
    }

    /deep/ .el-table th {
        background-color: #f3ffdb;
    }

    .Count {
        color: red;
        font-size: 20px;
        position: relative;
        top: 10px;
        margin-left: 4%;
    }

    .Count1 {
        color: red;
        font-size: 20px;
        position: relative;
        top: 10px;
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
    .Delete{
        position: relative;
        margin-left: 20%;
        margin-top: 10%;
    }
    .Export{
        position: relative;
        margin-left: 45%;
        margin-top: 10%;
    }
    .back{
        color: blue;
        position: relative;
        margin-left: 5%;
        top: 30px;
    }
    .Update{
        position: relative;
        margin-top: 8%;
        margin-left: 47%;
    }
    .back1{
        color: blue;
        position: relative;
        margin-left: 22%;
        top: 30px;
    }
    .Confirm{
        position: relative;
        margin-left: 45%;
        margin-top: 3%;
    }
</style>