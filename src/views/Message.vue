<template>
    <div>
        <p @click="toLogin">返回</p>
        <div id="mes">
            <div id="title" v-text="title"></div>
            <div id="values" v-text="content"></div>
        </div>
        <div id="foot">
            <div id="site">
                <div>狮子山校区：成都市锦江区静安路5号 (邮编:610066)</div>
                <div>成龙校区：成都市龙泉驿区成龙大道二段1819号 (邮编:610101)</div>
                <div>© All Right Reserved . 四川师范大学 版权所有  蜀ICP备05026983号</div>
            </div>
            <div id="sicnu">
                <a href="https://www.weibo.com/chuanshida?refer_flag=1015155010_&is_all=1">@四川师范大学微博</a>
                <br><br><br><br>
                <a href="http://www.sicnu.edu.cn/">@四川师范大学官网</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            ulFlag:0,
            title:"关于学生学籍异动事务网上办理的通知",
            content:"各学院、各相关学生：一、启用时间学生可在提交申请3个工作日后查看办理结果，并自行打印学籍异动相应证明。相应学籍异动事务所需材料及详细办理流程可在学校教务处网站（http://jwc.sicnu.edu.cn/）“办事指南”栏目中查询。"
        }
    },
    methods:{
        toLogin(){
            this.$router.push('/login');
        },
        
    },
    mounted(){
        document.body.style.backgroundImage="url(" + require("../assets/sicnu.jpg") + ")";
    }
}
</script>

<style lang="scss" scoped>
    p{
        cursor: pointer;
        color: blue;
        margin-left: 10%;
        margin-top: 3%;
    }
    
    #mes{
        border: 1px solid black;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 30px;
        // padding-bottom: 20px;
        padding-left: 50px;
        padding-right: 50px;
        background-color: white;
        opacity: 0.8;
        font-size: 13px;
        min-height: 300px;
        margin-bottom: 20px;
        #title{
            text-align: center;
            margin-bottom: 5px;
        }
    }
    #foot{
        height: 170px;
        width: 100%;
        background-color:#797979;
        // opacity: 0.6; 
        color: white;
        font-size: 13px;
        #site{
            width: 800px;
            padding-top: 65px;
            padding-left: 5%;
            div{
                display: inline-block;
                height: 30px;
                width: 400px;
            }
        }
    }
    #sicnu{
        position: absolute;
        margin-top: -80px;
        margin-left: 85%;
        font-size: 13px;
        a{
            color: white;
            text-decoration: none;
        }
    }
    
</style>