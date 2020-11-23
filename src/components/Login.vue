<template>
    <div id="back">
        <div id="message">
            <div id="title">学校通知：</div>
            <div class="item" v-for="data in messageList" :key="data" @click="toMessage">{{data}}<br></div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
  data () {
    return {
      messageList: ['关于。。。通知', '1111', '2222'],
    }
  },
  methods:{
    toMessage(){
      this.$store.commit('setMsgId',1);
      this.$router.push('/message');
    }
  },
  mounted(){
    document.body.style.backgroundImage="url(" + require("../assets/sicnu.jpg") + ")";
  }
}
</script>

<style lang="scss" spoced>
body{
  width: 100%;
  background-size: 100%;
}
#message{
  background-color: white;
  border: 1px dashed black;
  opacity: 0.7;
  height: 170px;
  width: 546px;
  margin-top: 200px;
  margin-left: 50px;
  #title{
    width: 544px;
    height: 40px;
    line-height: 40px;
    size: 50px;
    font-weight: bold;
    border-bottom: 1px dashed black;
  }
  .item{
    width: 546px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: black;
    font-size: 5px;
  }
}

</style>

