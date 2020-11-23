<template>
    <div>
        <p id="title">学生信息查询</p>

        <div id="big">
            <div>
                <p>当前报道状态</p>
                <div id="report">
                    <div>
                        <ul>
                            <li>学生信息确认</li>
                            <li>学生报道信息</li>
                            <li>现场报道</li>
                            <li>事务办理</li>
                            <li>学费支付</li>
                        </ul>
                    </div>
                    <div id="status">
                        <ul>
                            <li :class="fi=='已完成'?'green':'red'" v-text="fi"></li>
                            <li :class="fi=='已完成'?'green':'red'" v-text="fi"></li>
                            <li :class="no=='已完成'?'green':'red'" v-text="no"></li>
                            <li :class="no=='已完成'?'green':'red'" v-text="no"></li>
                            <li :class="no=='已完成'?'green':'red'" v-text="no"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p>基本信息</p>
                    <table>
                        <tr>
                            <th>姓名:</th>
                            <th v-text="list.name"></th>
                            <th>学号:</th>
                            <th v-text="list.sno"></th>
                            <th>类别:</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>性别:</th>
                            <th v-text="list.sex"></th>
                            <th>年龄:</th>
                            <th v-text="list.age"></th>
                            <th>民族:</th>
                            <th v-text="list.man"></th>
                        </tr>
                        <tr>
                            <th>学院:</th>
                            <th v-text="list.school"></th>
                            <th>专业:</th>
                            <th v-text="list.type"></th>
                            <th>年级:</th>
                            <th v-text="list.nianji"></th>
                        </tr>
                        <tr>
                            <th>班级:</th>
                            <th v-text="list.class"></th>
                            <th>宿舍:</th>
                            <th v-text="list.suzhe"></th>
                            <th>学制:</th>
                            <th v-text="list.xuezhi"></th>
                        </tr>
                        <tr>
                            
                            <th>学习形式:</th>
                            <th></th>
                            <th>政治面貌:</th>
                            <th></th>
                            <th>身份证号:</th>
                            <th v-text="list.id"></th>
                        </tr>
                        <tr>
                            <th>辅导员姓名:</th>
                            <th></th>
                            <th>辅导员电话:</th>
                            <th></th>
                            <th>学籍状态:</th>
                            <th></th>
                        </tr>
                    </table>
            </div>
            <div>
                <p>预填学生报道信息</p>
                <table>
                    <tr>
                        <th>预计到校时间:</th>
                        <th v-text="list.ATime"></th>
                    </tr>
                    <tr>
                        <th>到校交通方式:</th>
                        <th v-text="list.ATraffic"></th>
                    </tr>   
                    <tr>
                        <th>随行人员:</th>
                        <th v-text="list.APeople"></th>
                    </tr>
                    <tr>
                        <th>其他:</th>
                        <th v-text="list.AOther"></th>
                    </tr>
                </table>
            </div>
        </div>
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
            fi:"已完成",
            no:"未完成",
            list:{"ATime":"2020-09-03","ATraffic":"car","APeople":"2","AOther":"none","name":"xiaoming","sno":"2018110101","id":"53049993829320123","sex":"m","age":"18","man":"hanzu","school":"计算机科学学院" ,"type":"软件工程","nianji":"dayi","xuezhi":"4","sushe":"xiyuan","class":"3"},
                
        }
    },
    methods:{
        
    }
}
</script>


<style lang="scss" scoped>
    .red{
        color: red;
    }
    .green{
        color: #70B603;
    }
    #title{
        font-size: 30px;
        font-weight: bold;
        height: 60px;
        line-height: 60px;
        margin-left: 10%;
        margin-top: 10px;
    }
    #big{
        width:80%;
        // min-height:1000px;
        border: 0.5px solid black;
        background-color: #FFFDE8;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 30px;
        div{
            width:80%;
            border: 0.5px solid black;
            background-color: transparent;
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
            margin-bottom: 30px;
            p{
                font-size: 30px;
                text-align: left;
                font-weight: bold;
                height: 60px;
                line-height: 60px;
                border-bottom: 1px dashed black;
            }
            #report{
                margin-left: auto;
                margin-right: auto;
                border: none;
                margin-top: -2%;
                margin-bottom: 0%;
                div{
                    display: inline-block;
                    border: none;
                    width: 50%;
                    ul{
                        li{
                            list-style: none;
                            font-size: 20px;
                            width: 80%;
                            border: 0.5px dashed black;
                            margin-top: 10px;
                            text-align: center;
                        }
                    }
                }
                #status{
                    ul{
                        li{
                            border: none;
                            font-weight: lighter;
                        }
                    }
                }
            }
        }
    }
    table{
        margin-top: 2%;
        margin-bottom: 2%;
        margin-left: auto;
        margin-right: auto;
        tr{
            margin-top: 20px;
            th:nth-child(n){
                font-size: 20px;
                font-weight: normal;
                text-align: right;
                padding-left: 5px;
                letter-spacing:3px;
            }
            th:nth-child(2n){
                font-size: 15px;
                font-weight: lighter;
                text-align: left;
                letter-spacing:1px;
            }
        }
    }
    
</style>