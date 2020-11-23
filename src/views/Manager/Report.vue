<template>
    <div id="big">
        <p>现场报道</p>
        <div id="find">
            <span>学号：</span>
            <input type="text" v-model="Id">
            <button @click="findById">查找</button>
        </div>

        <el-table :header-row-style="getRowClass" :row-style="getRowClass" border 
        :header-cell-style="{textAlign:'center'}" :cell-style="{textAlign:'center'}"
        :data="valueList.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
         id="table">
            <!-- <el-table-column type="index"></el-table-column> -->
            <el-table-column prop="school" label="学院"></el-table-column>
            <el-table-column prop="type" label="专业"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="id" label="学号" sortable></el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="scope">
                    <div @click="sure(scope.row)" type="text" class="sure">确认报道</div>
                </template>
            </el-table-column>
            
        </el-table>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagesize"
        :total="valueList.length"
        layout="total, sizes, prev, pager, next, jumper"
        id="page">
        </el-pagination>
    </div>
</template>

<script>

export default {
    data(){
        return{
            name:"杨洋",
            sum:430,
            finished:200,
            Id:"",
            valueList:[],
            currentPage:1,
            pagesize:10,
        }
    },
    methods:{
        getRowClass(){
            return "background-color:transparent"
        },
        handleSizeChange: function(val) {
            this.pagesize = val;
        },
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
        },
        findById(){
            var obj = {
                'id': this.Id
            };
            var qs = require('qs');
            this.axios.post("/manager/getreportbyid",qs.stringify(obj),{
            // this.axios.post("/baodao/find",qs.stringify(obj),{
                withCredentials:true
            }).then(res=>{
                console.log(res.data)
                if(res.data.msg!="获取信息成功"){
                    this.$message.error({
                        message: res.data.msg,
                        duration:1500
                    });
                }else{
                    // console.log(res.data)
                    this.valueList=res.data.detail;
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        sure(item){
            // console.log(item)
            var obj = {
                'id': item.id
            };
            var qs = require('qs');
            // console.log(id);
            this.$confirm('确认报道?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                // type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '确认成功!',
                    duration:1500
                });
                this.axios.post("/manager/surereport",qs.stringify(obj),{
                    withCredentials:true
                }).then(res=>{
                    // console.log(res.data.detail)
                    if(res.data.msg!="确认信息成功"){
                        this.$message.error({
                            message: res.data.msg,
                            duration:1500
                        });
                    }else{
                        var index = this.valueList.findIndex(i =>{
                            if(i.id==item.id){
                                return true
                            }
                        });
                        this.valueList.splice(index,1)
                        // console.log(res.data)
                        // this.valueList.splice(index,1);
                    }
                }).catch(err=>{
                    console.log(err);
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消确认',
                    duration:1500
                });          
            });
        }
    },
    mounted(){
        var obj = {
            'id': this.$store.state.id
        };
        var qs = require('qs');
        this.axios.post("/manager/getreport",qs.stringify(obj),{
        // this.axios.post("/baodao/find",qs.stringify(obj),{
            withCredentials:true
        }).then(res=>{
            console.log(res.data)
            if(res.data.msg!="获取信息成功"){
                this.$message.error({
                    message: res.data.msg,
                    duration:1500
                });
                // this.$router.push('/login');
            }else{
                // console.log(res.data)
                this.valueList=res.data.detail;
            }
        }).catch(err=>{
            console.log(err);
        });
    }
}
</script>


<style lang="less" scoped>
    #big{
        width:70%;
        // min-height:400px;
        border: 0.5px solid black;
        background-color: #FFFDE8;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        margin-bottom: 30px;
        #find{
            margin-left: 5%;
            margin-top: 20px;
            span{
                font-weight: bold;
            }
            input{
                margin-left: 10px;
                height: 30px;
                width: 120px;
            }
            button{
                height: 30px;
                width: 80px;
                background-color: #02A7F0;
                color: white;
                outline: none;
                border: none;
                border-radius: 0.5em;
                margin-left: 20px;
            }
        }
    }
    #page{
        padding-left: 5%;
        padding-bottom: 20px;
    }
    .el-table{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
    /deep/ .el-table,
    /deep/ .el-table tr,
    /deep/ .el-table td{
        background-color: transparent;
        
    }
    /deep/ .el-table th{
        background-color: #f3ffdb;
    }
    .sure{
        color: #0099FF;
        cursor: pointer;
    }
	/* 表格内背景颜色 */
	/deep/ .el-table__header tr,
    /deep/ .el-table__header th {
            padding: 0;
            height: 40px;
            line-height: 40px;
        }
    // /deep/.el-table__body tr,
    // /deep/ .el-table__body td {
    //         // padding: 0;
    //         // height: 30px;
    //         // line-height: 30px;
    //     }

	/* 双数行背景颜色 */
	// .el-table--striped .el-table__body tr.el-table__row--striped td {

	// 	background-color: #fff;
	// 	background-color: rgba(148, 144, 144, 0.3)
	// }

	/* 使表格背景透明 */
	// .el-table th,
	// .el-table tr {
	// 	background-color: transparent;
	// }

	/* 删除表格下横线 */
	// .el-table::before {
	// 	left: 0;
	// 	bottom: 0;
	// 	width: 100%;
	// 	height: 0px;
	// }

	/* 表格表头字体颜色 */
	// /deep/ .el-table thead tr{
    //     height: 30px;
	// 	// color: black;
	// 	// font-weight: 500;
	// 	// background-color: #F3FFDB;
	// }s

    
    p{
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px dashed black;
    }
    
</style>