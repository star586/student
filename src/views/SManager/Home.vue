<template>
    <div class="home_whole">
        <span class="first">欢迎进入系统管理员界面：</span>
        <!-- <span class="second">你管理普通给管理员总人数：</span>
        <span class="third">你管理的用户总人数：</span>
        <span class="fourth">当前已完成报道的总人数：</span> -->
        <div class="image_round">
            <div id="photo" style="width:100%;height:300px"></div>
        </div>
        <el-row>
            <el-button type="primary" class="Button" @click="export_admin">导出普通管理员名单</el-button>
            <el-button type="primary" class="Button" @click="export_user">导出用户名单</el-button>
            <el-button type="primary" class="Button" @click="export_finished">导出已完成报道名单</el-button>
            <el-button type="primary" class="Button" @click="export_unfinished">导出未完成报道名单</el-button>
        </el-row>
    </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    // 引入饼状图组件
    require('echarts/lib/chart/pie')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        data() {
            return {
                userId: "2018",
                user_sum: '',
                manager_sum: '',
                finished_sum: '',
            }
        },
        mounted() {
            this.test();
            this.myEcharts();
        },
        methods: {
            test: async function () {
                var qs = require('qs')
                var obj = {
                    'userId': this.userId
                }
                await this.axios.post('/SystemManager/getNumber', qs.stringify(obj))
                    .then(res => {
                        this.flag = 1;
                        this.user_sum = res.data.data.userSum;
                        this.manager_sum = res.data.data.ManagerSum;
                        this.finished_sum = res.data.data.finished;
                    })
                    .catch(err => {
                        console.error(err);
                    })
            },
            myEcharts: async function () {
                await this.test()
                var myChart = echarts.init(document.getElementById('photo'));
                myChart.setOption({
                    title: {
                        text: '系统管理员所进行管理的人数', //主标题
                        // subtext: '纯属虚构', //副标题
                        x: 'center', //x轴方向对齐方式
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 'bottom',
                        data: ['普通管理员', '用户', '已报道']
                    },
                    series: [{
                        name: '管理人数',
                        type: 'pie',
                        radius: '70%',
                        center: ['50%', '60%'],
                        data: [{
                                value: this.manager_sum,
                                name: '普通管理员'
                            },
                            {
                                value: this.user_sum,
                                name: '用户'
                            },
                            {
                                value: this.finished_sum,
                                name: '已报道'
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{b}:{c}',
                                position: 'inside'
                            },
                        }
                    }]
                });
            },
            export_admin() {

            },
            export_user() {

            },
            export_finished() {

            },
            export_unfinished() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .home_whole {
        background-color: #fffde8;
        height: 600px;
        width: 900px;
        border-radius: 3px;
        border: 0.2px solid black;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .image_round {
        position: relative;
        margin-top: 10%;
    }

    .first {
        font-weight: bold;
        font-size: 40px;
        position: absolute;
        top: 1%;
        left: 4%;
    }

    .second {
        font-size: 30px;
        position: absolute;
        top: 20%;
        left: 15%;
    }

    .third {
        font-size: 30px;
        position: absolute;
        top: 35%;
        left: 15%;
    }

    .fourth {
        font-size: 30px;
        position: absolute;
        top: 50%;
        left: 15%;
    }

    .Button {
        font-size: 16px;
        padding: 15px 20px;
        margin: 2%;
        position: relative;
        top: 120px;
        left: 5%;
    }
</style>