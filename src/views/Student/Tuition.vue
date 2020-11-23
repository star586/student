<template>
    <div id="tuition">
        <div id="container">
            <div id="payment"> 
                <p id="p1">学费支付</p>
            </div>
            <div id="paymentnotice">
                <div id="notice"><p id="p2">缴费须知</p></div>
                <div id="notices">
                <div id="notice1" @click="tomsg2"><span v-text="ntc1"></span></div>
                <div id="notice2" @click="tomsg2"><span v-text="ntc2"></span></div>
                <div id="notice3" @click="tomsg2"><span v-text="ntc3"></span></div>
                </div>
            </div>
            <div id="localpay" @click="tolocalpay"><p id="p3" >现场支付</p></div>
        </div>
</div>
</template>
<script>
export default {
    name:"Tuition",
    data(){
        return{
            ntc1:"四川师范大学2020年新生报到缴费须知",
            ntc2:"2020级新生在线缴费操作流程(微信端)",
            ntc3:"四川师范大学2020级本科学生收费项目及标准的说明"
        }
    },
    methods:{
            tolocalpay(){
                this.$router.push('/student/localpay')
                },
            tomsg2(){
                // this.$router.push('/student/msg2')
            }
    }
}
</script>
<style lang="scss" scoped>
#tuition{
    position: relative;
    width: 100%;
    // height: 550px;
}
#container{
    margin-top:50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    height: 380px;
    width: 70%;
    border-width: 0.5px;
    background: rgba($color: #000000, $alpha: 0.3);
    color: white;
    #payment{
        margin-left: 0;
        margin-top: 0;
        min-height: 50px;
        border-width: 0.5px;
        background: rgba($color: #000000, $alpha: 0.2);
    }
    #localpay{
        margin-left:75%;
        margin-top:-135px;
        height: 150px;
        width: 170px;
        border-color:#797979 ;
        background-color: rgba($color: #ffffff, $alpha: 0.33);
        display: flex;
        justify-content: center;
        }
    #paymentnotice{
        font-size: 13px;
        margin-top:66px;
        margin-left: 50px;
        height: 160px;
        width:50%;
        border-color:rgba($color: #000000, $alpha: 0.1);
        border-width: 1px;
        border-style: dashed;
        flex-direction: row-reverse;   
        #notice{
            padding-top: 2px;
            padding-left: 12px;
            margin-top: 0;
            margin-left: 0;
            border-color:#797979;
            border-width: 1px;
            border-style: dashed;
            min-height: 33px;
        }
        #notices{
            margin-top: 0;
            border-color:#797979;
            border-width: 1px;
            border-style: dashed;
            min-height: 122px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-content: space-between;
            #notice1{
                min-height: 40px;
                padding-top: 20px;
            }
            #notice2{
                min-height: 40px;
                padding-top: 5px;
            }
            #notice3{
                min-height: 40px;
                padding-top: 5px;
            }
        }
    }
    #p1{
        padding-top: 15px;
        height: 40px;
        font-size: 16px;
        text-align: center;
    }
    #p2{
        font-size:20px;
        font-weight:700;
    }
    #p3{
        font-size: 13px;
        height: 13px;
        width: 60px;
        margin-top: 70px;
    }
}
</style>