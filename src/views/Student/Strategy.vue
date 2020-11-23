<template>
    <div id="strategy">
        <div id="container">
            <ul type=disc>
            <div id="background1"><p>校园攻略</p></div>
            <div id="background2"><div><li v-text="msg1title" @click="tomsg1"></li></div><div  id="p1">{{time}}</div></div>
            <div id="background3"><div><li v-text="msg2title" @click="tomsg2"></li></div><div  id="p1">{{time}}</div></div>
            <div id="background4"><div><li v-text="msg3title" @click="tomsg3"></li></div><div  id="p1">{{time}}</div></div>
            <div id="background5"><div><li v-text="msg4title" @click="tomsg4"></li></div><div  id="p1">{{time}}</div></div>
            <div id="background6"><div><li v-text="msg5title" @click="tomsg5"></li></div><div  id="p1">{{time}}</div></div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"report",
    data(){
        return{
            msg1title:"关于新生报道期间实施交通管制的通告",
            msg2title:"四川师范大学2020级新生校园一卡通使用简介",
            msg3title:"乘车路线指南",
            msg4title:"狮子山校区（地图）",
            msg5title:"成龙校区（地图）",
            time:"2020-09-18",
        }
    },
    methods:{
        tomsg1(){
            //  this.$router.push('/student/msg1')
        },
        tomsg2(){
            //  this.$router.push('/student/msg2')
        },
        tomsg3(){
            //  this.$router.push('/student/msg3')
        },
        tomsg4(){
            //  this.$router.push('/student/msg4')
        },
        tomsg5(){
            //  this.$router.push('/student/msg5')
        }
        


    }
}
</script>
<style lang="scss" scoped>
#strategy{
    position: relative;
    width: 100%;
}
#container{
    margin-top:50px;
    margin-bottom: 50px;
    min-height:360px;
    margin-right: 150px;
    margin-left: 150px;
    border-style: solid;
    border-color: #797979;
    border-width: 1px;
    color:#FFFFFF;
    #background1{
        margin-top: 0;
        min-height: 58px;
        border: solid #797979 ;
        border-width: 1px;
        border-style: dashed;
        // color:#ffffff;
        // background:opacity 0.5 #000000;
        background-color: rgba($color: #000000, $alpha: 0.5);
    }
    #background2{
        display: flex;
        justify-content:space-between;
        margin-top: 0;
        border-color:rgba($color: white, $alpha: 0.1);
        border-width: 1px;
        border-style: dashed;
        min-height: 58px;
        background-color:rgba($color: #000000, $alpha: 0.3);
       
    }
    #background3{
        display: flex;
        justify-content:space-between;
        margin-top:0;
        margin-left: 0;
        min-height: 58px;
        border-color:#797979 ;
        border-width: 1px;
        border-style: dashed;
        background-color:rgba($color: #000000, $alpha: 0.3);
    }
    #background4{
        display: flex;
        justify-content:space-between;
        margin-top:0;
        margin-left: 0;
        border-color:rgba($color: white, $alpha: 0.1);
        border-width: 1px;
        border-style: dashed;
        min-height: 58px;
        background-color:rgba($color: #000000, $alpha: 0.3);
    }
    #background5{
        display: flex;
        justify-content:space-between;
        margin-top:0;
        margin-left: 0;
        min-height: 58px;
        border-width: 1px;
        border-color: #797979;
        border-style: dashed;
        background-color:rgba($color: #000000, $alpha: 0.3);
    }
    #background6{
        display: flex;
        justify-content:space-between;
        margin-top:0;
        margin-left: 0;
        border-width: 1px;        
        border-color:rgba($color: white, $alpha: 0.1);
        border-style: dashed;
        min-height:58px;
        background-color:rgba($color: #000000, $alpha: 0.3);
    }
p{
    font-size: 20px;
    margin-top: 15px;
    margin-left:20px;
}
li{
    font-family: Arial;
    margin-top: 15px;
    margin-left:50px;
    width: 500px;
}
#p1{
    margin-top: 15px;
    width: 100px;
    color: rgba($color: white, $alpha: 0.7);
}
}

</style>