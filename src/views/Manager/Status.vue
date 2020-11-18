<template>
    <div id="big">
        <p>学生报道完成状态</p>
        <div id="form">
            <div>
                <div id="form1"></div>
                <div class="title">已完成人数</div>
            </div>
            <div>
                <div id="form2"></div>
                <div class="title">未完成人数</div>
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
        }
    },
    methods:{
        
    },
    mounted(){
        // 引入 ECharts 主模块
        var echarts = require('echarts/lib/echarts');
        // 引入柱状图
        require('echarts/lib/chart/bar');
        // 引入提示框和标题组件
        require('echarts/lib/component/tooltip');
        require('echarts/lib/component/title');

        // 基于准备好的dom，初始化echarts实例
        var chart1 = echarts.init(document.getElementById('form1'));
        var chart2 = echarts.init(document.getElementById('form2'));
        // 绘制图表
        // "sum": 1300,
        //         "infro": 1080,
        //         "reportinfro":890,
        //         "reportnow":760,
        //         "affair":680,
        //         "pay":555
        var obj = {
            'id': this.$store.state.id
        };
        var qs = require('qs');
        this.axios.post("/manager/getstatus",qs.stringify(obj),{
            withCredentials:true
        }).then(res=>{
            if(res.data.msg!="获取信息成功"){
                this.$message.error({
                    message: res.data.msg,
                    duration:1500
                });
                this.$router.push('/login');
            }else{
                chart1.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['信息确认', '报道信息', '现场报道', '事务办理','学费支付']
                    },
                    yAxis: {},
                    series: [
                        {
                            type: 'bar',
                            name: '已完成人数',
                            data: [res.data.detail.infro, res.data.detail.reportinfro, res.data.detail.reportnow, res.data.detail.affair,res.data.detail.pay],
                            itemStyle:{
                                normal:{
                                    color:function(params){
                                        var colorList = ['#cca272','#74608f','#d7a02b','#c8ba23',];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        formatter: function (params) {
                            return params[0].data+'人';
                        }
                    },
                });
                // var params=[res.data.detail.sum-res.data.detail.infro, res.data.detail.sum-res.data.detail.reportinfro, res.data.detail.sum-res.data.detail.reportnow, res.data.detail.sum-res.data.detail.affair,res.data.detail.sum-res.data.detail.pay];
                chart2.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['信息确认', '报道信息', '现场报道', '事务办理','学费支付']
                    },
                    yAxis: {},
                    series: [
                        {
                            type: 'bar',
                            name: '未完成人数',
                            data: [res.data.detail.sum-res.data.detail.infro, res.data.detail.sum-res.data.detail.reportinfro, res.data.detail.sum-res.data.detail.reportnow, res.data.detail.sum-res.data.detail.affair,res.data.detail.sum-res.data.detail.pay],
                            itemStyle:{
                                normal:{
                                    color:function(params){
                                        var colorList = ['#cca272','#74608f','#d7a02b','#c8ba23',];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        formatter: function (params) {
                            return params[0].data+'人';
                        }
                    },
                });
            }
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
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                padding-left: 5%;
                div{
                    width: 50%;
                    display: inline-block;
                    #form1{
                        width:90%;
                        height: 280px;
                        display: inline-block;
                        // border:1px solid black;
                    }
                    #form2{
                        width:90%;
                        height: 280px;
                        display: inline-block;
                        
                    }
                    .title{
                        text-align: center;
                        // border:1px solid black;
                        // position: absolute;
                        margin-left: 17%;
                        // margin-top: -30px;
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