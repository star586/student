<template>
    <div class="whole">
        <span class="title">管理员管理</span>
        <el-divider></el-divider>
        <el-form label-width="60px" :inline="true" :model="ma">
            <el-row>
                <el-form-item label="学院" style="margin-right:22%;margin-left:5%">
                    <el-select v-model="ma.college" placeholder="请选择相应的学院">
                        <el-option v-for="item in colleges" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工号">
                    <el-input v-model="ma.sno"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查找</el-button>
                </el-form-item>
            </el-row>
        </el-form>
        <el-table :header-row-style="getRowClass" :row-style="getRowClass" :header-cell-style="{textAlign:'center'}" :cell-style="{textAlign:'center'}" tooltip-effect="dark" :data="check" border class="Biao" @selection-change="handelSelectionChange">
            <el-table-column type="selection" label="所有" width="80" ></el-table-column>
            <el-table-column prop="college" label="学院" width="220" ></el-table-column>
            <el-table-column prop="name" label="姓名" width="180" ></el-table-column>
            <el-table-column prop="sno" label="工号" width="190" ></el-table-column>
            <el-table-column prop="operation" label="操作" width="158">
                <template slot-scope="scope">
                    <!-- <a @click="deTails(scope.row)" style="color:blue;cursor:pointer"></a> -->
                    <el-button @click="deTails(scope.row)" type="text">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" class="Delete">删除</el-button>
        <span class="back">返回</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colleges: [{
                    value: 1,
                    label: '所有'
                }, {
                    value: 2,
                    label: '计算机科学学院'
                }, {
                    value: 3,
                    label: '美术学院'
                }, {
                    value: 4,
                    label: '音乐学院'
                }, {
                    value: 5,
                    label: '舞蹈学院'
                }, {
                    value: 6,
                    label: '数学学院'
                }, {
                    value: 7,
                    label: '生物科学学院'
                }],
                majors: [{
                    value: 1,
                    label: '计算机科学与技术'
                }, {
                    value: 2,
                    label: '网络工程'
                }, {
                    value: 3,
                    label: '软件工程'
                }, {
                    value: 4,
                    label: '教育技术'
                }],
                check:[{
                    college:'计算机科学学院',
                    major:'软件工程',
                    name:'小明',
                    sno:'2018110101',
                    operation:'详情'
                },{
                   college:'计算机科学学院',
                    major:'软件工程',
                    name:'小红',
                    sno:'2018110102',
                    operation:'详情' 
                },{
                    college:'计算机科学学院',
                    major:'软件工程',
                    name:'小平',
                    sno:'2018110103',
                    operation:'详情'
                },{
                    college:'计算机科学学院',
                    major:'软件工程',
                    name:'小王',
                    sno:'2018110104',
                    operation:'详情'
                },{
                    college:'计算机科学学院',
                    major:'计算机科学与技术',
                    name:'小周',
                    sno:'2018110105',
                    operation:'详情'
                },{
                    college:'计算机科学学院',
                    major:'网络工程',
                    name:'小黄',
                    sno:'2018110106',
                    operation:'详情'
                }],
                ma:{
                    college:'',
                    major:'',
                    sno:''
                }
            }
        },
        methods:{
            handelSelectionChange(val){
                this.mulipleSeletion=val;
            },
            getRowClass(){
                return "background-color:transparent"
            },
            deTails(row){
                this.check.sno=row.sno;
                this.$router.push('/smanager/basicadmin')
            }
            // deTails(){
            //     this.$router.push('/smanager/basicuser');
            // }
        }
    }
</script>

<style lang="less" scoped>
    .whole {
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

    .title {
        font-size: 32px;
        padding: 0%;
        margin-left: 2%;
        position: relative;
        top: 15px;
        margin-bottom: 0.5%;
    }
    .Biao{
        width: 83%;
        position: relative;
        left: 8%;
    }
    /deep/ .el-table,
    /deep/ .el-table tr,
    /deep/ .el-table td{
        background-color: transparent;
    }
    /deep/ .el-table th{
        background-color: #f3ffdb;
    }
    .Delete{
        position: relative;
        left: 8%;
        margin-top: 2%;
    }
    .back{
        position: relative;
        left: 80%;
        color: blue;
    }
</style>