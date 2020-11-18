<template>
    <div id="big">
        <h2 >欢迎 <span v-text="name"></span> 同学</h2>
        <p>你管理的新生总人数：<span v-text="sum"></span>人；当前已完成报道人数：<span v-text="finished"></span>人</p>
        <div id="form"></div>
        <div id="btn">
            <button @click="reportAll">导出全部名单</button>
            <button @click="reportFinished">导出已完成报道名单</button>
            <button @click="reportUnFinished">导出未完成报道名单</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:"杨洋",
            sum:'',
            finished:'',
        }
    },
    methods:{
        reportAll(){

        },
        reportFinished(){

        },
        reportUnFinished(){

        }
    },
    mounted(){
        // 引入 ECharts 主模块
        var echarts = require('echarts/lib/echarts');
        // 引入柱状图
        require('echarts/lib/chart/pie');
        // 引入提示框和标题组件
        require('echarts/lib/component/tooltip');
        require('echarts/lib/component/title');

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('form'));
        // 绘制图表
        var obj = {
            'id': this.$store.state.id
        };
        var qs = require('qs');
        this.axios.post("/manager/getnum",qs.stringify(obj),{
            withCredentials:true
        }).then(res=>{
            if(res.data.msg!="获取信息成功"){
                this.$message.error({
                    message: res.data.msg,
                    duration:1500
                });
                this.$router.push('/login');
            }else{
                // console.log(res.data)
                this.sum=res.data.detail.sum;
                this.finished=res.data.detail.finished;
                myChart.setOption({
                    series : [
                        {
                            name: '报道人数',
                            type: 'pie',
                            radius: '90%',
                            data:[
                                {value:res.data.detail.finished, name:'已报道'},
                                {value:res.data.detail.sum-res.data.detail.finished, name:'未报道'}
                            ]
                        }
                    ],
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        // position: ['50%', '50%']
                    },
                });
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
        min-height:400px;
        border: 0.5px solid black;
        background-color: #FFFDE8;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        margin-bottom: 30px;
        #form{
            height: 300px;
            width: 600px;
            margin-left: auto;
            margin-right: auto;
            // border: 1px solid black;
            margin-top: 20px;
        }
        #btn{
            margin-top: 20px;
            margin-bottom: 20px;
            button{
                width: 140px;
                height: 40px;
                background-color: #169BD5;
                color: white;
                margin-left: 13%;
                outline: none;
                border: none;
                border-radius: 0.5em;
                cursor: pointer;
            }
        }
    }
    h2{
        margin-top: 20px;
        margin-left: 5%;
        span{
            color: #02A7F0;
        }
    }
    p{
        margin-top: 20px;
        margin-left: 5%;
    }
    
</style>