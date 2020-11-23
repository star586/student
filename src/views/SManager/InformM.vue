<template>
    <div class="notice_whole">
        <span class="title">通知管理</span>
        <el-divider></el-divider>
        <span class="first">总登录界面通知</span>
        <br>
        <br>
        <el-table :header-row-style="getRowClass" :row-style="getRowClass" :header-cell-style="{textAlign:'center'}"
            :cell-style="{textAlign:'center'}" tooltip-effect="dark" :data="notice" border class="Biao"
            @selection-change="handelSelectionChange">
            <el-table-column type="selection" label="全部" width="80"></el-table-column>
            <el-table-column prop="title" label="消息" width="493"></el-table-column>
            <el-table-column prop="operation" label="操作" width="180"></el-table-column>
        </el-table>
        <el-button type="primary" class="Button" @click="Delete">删除</el-button>
        <el-button type="primary" class="Button1" @click="showdialog=true">新增</el-button>
        <el-dialog :visible.sync="showdialog" width="40%" center append-to-body>
            <el-form label-width="80px">
                <el-form-item v-model="notice.title" label="标题">
                    <el-input type="textarea" v-model="notice.title"></el-input>
                </el-form-item>
                <el-form-item v-model="notice.title" label="内容">
                    <el-input type="textarea" rows="5" v-model="notice.title"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Confirm" type="primary">确定</el-button>
                <el-button @click="Cancle" type="primary">取消</el-button>
            </span>
        </el-dialog>
        <br>
        <span class="second">学生报道界面通知</span>
        <br>
        <el-input type="textarea" class="Textarea" rows="10"></el-input>
        <el-button type="primary" class="Button2" @click="Update">更新</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notice: [{
                    title: '关于学生学籍异动事务网上办理的通知',
                    operation: '修改'
                }, {
                    title: '关于人才培养方案调整后相关问题处理办法的通知',
                    operation: '修改'
                }, {
                    title: '关于普通类在校学生更改个人基本信息所需材料的温馨提示',
                    operation: '修改'
                }],
                // notice:[],
                notice1:[],
                showdialog:false,
                title:'学校通知',
                content:'',
                userId:'2018'
            }
        },
    methods: {
        //将所选中给的值放入到notice1这个数组中
        handelSelectionChange(val) {
            this.notice1 = val;
        },
        getRowClass() {
            return "background-color:transparent"
        },
        Delete() {
            //遍历删除所选中的内容
            console.log(this.notice1)
            for(let i=0;i<this.notice1.length;i++){
                for(let j=0;j<this.notice.length;j++){
                    if(JSON.stringify(this.notice[j])===JSON.stringify(this.notice1[i])){
                        this.notice.splice(j,1)
                        console.log('aa')
                    }
                }
            }
            this.$confirm('确定删除该条记录？', '提示', {
                confirmButtonText: '确定',
                cancleButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                // var qs = require('qs')
                // var obj1 = {
                //     userId:this.userId
                // }
                // this.axios.post('/SystemManager/deleteInform',qs.stringify(this.notice1))
                // .then(res => {
                //     console.log(res)
                // }).catch(err => {
                //     console.log(err)
                // })
                this.$title({
                    type: 'success',
                    title: '删除成功！'
                });
            }).catch(() => {
                this.$title({
                    type: 'info',
                    title: '已取消删除'
                })
            })
        },
        Confirm(){
            var obj1 = {
                userId:this.userId,
                title:this.title,
                content:this.content
            }
            var qs = require('qs');
            this.axios.post('/SystemManager/addInform',qs.stringify(obj1))
            .then(res => {
                if(res.data.title==="操作失败"){
                    alert("操作失败")
                }else{
                    // this.notice.push({
                    //     title:this.title,
                    //     operation:"修改"
                    // })
                }
            })
            .catch(err => {
                console.log(err)
            })
            this.$title({
                type: 'success',
                title: '添加成功！'
            })
            this.showdialog=false
        },
        Cancle(){
            this.$title({
                type: 'info',
                title: '已取消删除'
            })
            this.showdialog=false
        },
        Increase() {
            this.$confirm('确定添加该条记录？', '提示', {
                confirmButtonText: '确定',
                cancleButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$title({
                    type: 'success',
                    title: '添加成功！'
                });
            }).catch(() => {
                this.$title({
                    type: 'info',
                    title: '已取消添加'
                })
            })
        },
        Update() {
            this.$confirm('确定更新该条记录？', '提示', {
                confirmButtonText: '确定',
                cancleButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$title({
                    type: 'success',
                    title: '更新成功！'
                });
            }).catch(() => {
                this.$title({
                    type: 'info',
                    title: '已取消更新'
                })
            })
        }
    }
    }
</script>

<style lang="less" scoped>
    .notice_whole{
        background-color: #fffde8;
        height: 800px;
        width: 910px;
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

    .first {
        font-size: 30px;
        position: relative;
        left: 20px;
    }

    .second {
        font-size: 30px;
        position: relative;
        left: 20px;
    }

    .Biao {
        width: 83%;
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

    .Button {
        position: relative;
        margin-left: 25%;
        margin-top: 3%;
        margin-bottom: 3%;
    }

    .Button1 {
        position: relative;
        margin-left: 30%;
        margin-top: 3%;
        margin-bottom: 3%;
    }

    .Textarea {
        position: relative;
        margin-top: 3%;
        margin-left: 20%;
        width: 50%;
    }

    .Button2 {
        position: relative;
        margin-left: 5%;
    }

    // .Button{
    // background-color: #169bd5;
    //     color: white;
    //     border: none;
    //     text-align: center;
    //     border-radius: 9px;
    //     text-decoration: none;
    //     display: inline-block;
    //     font-size: 16px;
    //     padding: 15px 40px;
    //     margin-top: 3%;
    //     margin-right: 15%;
    //     position: relative;
    //     left: 300px;
    // }
    // #Textarea{
    //     position: relative;
    //     left: 120px;
    //     width: 500px;
    //     height: 200px;
    //     background-color: transparent;
    // }
    // .Button1{
    //     background-color:  #169bd5;
    //     color: white;
    //     padding: 15px 40px;
    //     text-align: center;
    //     font-size: 16px;
    //     position: absolute;
    //     left: 700px;
    //     top: 550px;
    // }
</style>