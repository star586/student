<template>
    <div id="big">
        <p>现场报道</p>
        <div id="find">
            <span>学号：</span>
            <input type="text" v-model="Id">
            <button @click="findById">查找</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>学院</th>
                    <th>专业</th>
                    <th>姓名</th>
                    <th>学号</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,index) in valueList" :key="data.id">
                    <th>{{data.school}}</th>
                    <th>{{data.type}}</th>
                    <th>{{data.name}}</th>
                    <th>{{data.id}}</th>
                    <th @click="sure(data.id,index)">确认报道</th>
                </tr> 
            </tbody>
        </table>
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
        }
    },
    methods:{
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
        sure(id,index){
            var obj = {
                'id': id
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
                        // console.log(res.data)
                        this.valueList.splice(index,1);
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
                this.$router.push('/login');
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


<style lang="scss" scoped>
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
        table{
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 20px;
            thead{
                background-color: #F3FFDB;
            }
            th{
                font-weight: normal;
                font-size: 15px;
                line-height: 30px;
                height: 30px;
                width: 160px;
                text-align: center;
                    border: 1px solid black;
                tr{
                    font-size: 15px;
                    line-height: 30px;
                    height: 30px;
                    width: 160px;
                    
                }
            }
            tbody{
                tr{
                    th:last-child{
                        color: #0099FF;
                        cursor: pointer;
                    }
                }
            }
        }

    }
    p{
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px dashed black;
    }
    
</style>