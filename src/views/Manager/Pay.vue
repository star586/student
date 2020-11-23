<template>
    <div id="big">
        <p>现场缴费</p>
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
                    <th>类型</th>
                    <th>凭证</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,index) in valueList" :key="index">
                    <th>{{data.school}}</th>
                    <th>{{data.type}}</th>
                    <th>{{data.name}}</th>
                    <th>{{data.id}}</th>
                    <th>{{data.lei}}</th>
                    <th>{{data.img}}</th>
                    <th @click="sure(index)">确认</th>
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
            valueList:[
                {"school":"计算机科学学院" ,"type":"软件工程","name":"ccx","id":"20181111111","img":1,"lei":"绿色通道"},
                {"school":"计算机科学学院" ,"type":"软件工程","name":"ccx","id":"20181111111","img":1,"lei":"绿色通道"},
                {"school":"计算机科学学院" ,"type":"软件工程","name":"ccx","id":"20181111111","img":1,"lei":"绿色通道"},  
            ],
        }
    },
    methods:{
        findById(){

        },
        sure(index){
            console.log(index);
        }
    }
}
</script>


<style lang="scss" scoped>
    #big{
        width:86%;
        min-height:400px;
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
                    width: 130px;
                    text-align: center;
                    border: 1px solid black;
                    tr{
                        font-size: 15px;
                        line-height: 30px;
                        height: 30px;
                        width: 130px;
                        
                    }
                }
            tbody{
                tr{
                    height: 100px;
                    th:last-child{
                        color: #0099FF;
                        cursor: pointer;
                    }
                    th:nth-child(6){
                        width: 200px;
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