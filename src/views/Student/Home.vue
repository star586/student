<template>
  <!-- <div class="home"> -->
    <div class="container" style="width: 1000px;">
      <div class="box top-box">
        <p class="welcome-word">
          欢迎<span class="student-name">小明</span>同学：
        </p>
        <p class="process-tip">
          请按照下面的报道流程，完成报道，并在下方报道状态完成后提交报道
        </p>
      </div>
      <div class="box process">
        <p style="margin-bottom: 40px;">学生报道流程：</p>
        <div class="process-box">
          <div class="process-row">
            <div class="process-item">学生信息确认</div>
            <div class="process-arow"></div>
            <div
              class="process-item"
              style="font-size: 12px; line-height: 16px; padding: 2px"
            >
              在学生报道模块中进行预报到信息填写
            </div>
            <div class="process-arow"></div>
            <div class="process-item">现场报道</div>
          </div>
        </div>
        <div class="process-box" style="height: 40px">
          <div class="process-arrow-down"></div>
        </div>
        <div class="process-box">
          <div class="process-row">
            <div class="process-item">报道完成</div>
            <div class="process-arow-re"></div>
            <div class="process-item">完成学费的支付</div>
            <div class="process-arow-re"></div>
            <div class="process-item">完成必要事务的办理</div>
          </div>
        </div>
      </div>
      <div class="box state">
        <p>当前报道状态：</p>
        <ul class="state-box">
          <li class="state-item">学生信息确认</li>
          <!-- <li class="state-item" v-if="confirm">已确认</li> -->
          <li class="state-item">学生报道信息</li>
          <li class="state-item">现场报道</li>
          <li class="state-item">事务办理</li>
          <li class="state-item">学费支付</li>
        </ul>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirm: 0
    };
  }

  // mounted() {
  //   bus.$on("confirm", () => {
  //     console.log("confirm");
  //     this.confirm = 1;
  //   });
  // },
  // created() {
  //   console.log("new");
  // },
  // destroyed() {
  //   console.log("die");
  // }
};
</script>

<style lang='scss' scoped>
.container{
  // width: 1000px;
  // background-color: red;
  margin-left: auto;
  margin-right: auto;
}
.state {
  padding-bottom: 20px;
  .state-box {
    list-style: none;
    width: 270px;
    margin: 0 auto;
    text-align: center;
    .state-item {
      width: 270px;
      height: 20px;
      line-height: 14px;
      margin: 10px 0;
      padding: 2px;
      border: 1px solid #797979;
      background-color: #555;
      font-size: 14px;
    }
  }
}
.box {
  width: 1000px;
  padding: 10px;
  border: 1px solid #797979;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom:40px;
  color: #fff;
}
.top-box {
  margin-top: 30px;
  p.welcome-word {
    span.student-name {
      padding-left: 20px;
      padding-right: 20px;
      color: rgb(2, 130, 199);
      font-weight: 700;
    }
  }
  p.process-tip {
    margin: 10px auto;
    text-align: center;
    color: yellow;
  }
}
.process {
  padding-bottom: 40px;
  .process-box {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .process-row {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .process-item {
        display: inline-block;
        font-size: 14px;
        width: 130px;
        max-height: 40px;
        line-height: 38px;
        text-align: center;
        background-color: #555;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }
      .process-arow,
      .process-arow-re {
        display: inline-block;
        position: relative;
        left: 0;
        top: 0;
        width: 126px;
        height: 0;
        border-bottom: 5px solid rgba(0, 0, 0, 0.6);
      }
      .process-arow::after {
        content: "";
        position: absolute;
        right: 0;
        top: -5px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-top: 5px solid rgba(0, 0, 0, 0.6);
        border-right: 5px solid rgba(0, 0, 0, 0.6);
        transform: rotate(45deg);
      }
      .process-arow-re::after {
        content: "";
        position: absolute;
        left: 0;
        top: -5px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-top: 5px solid rgba(0, 0, 0, 0.6);
        border-right: 5px solid rgba(0, 0, 0, 0.6);
        transform: rotate(225deg);
      }
    }
  }
}

.process-arrow-down {
  display: inline-block;
  position: relative;
  left: 256px;
  top: 17px;
  width: 40px;
  height: 0;
  border-bottom: 5px solid rgba(0, 0, 0, 0.6);
  transform: rotate(90deg);
}
.process-arrow-down::after {
  content: "";
  position: absolute;
  right: 0;
  top: -5px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 5px solid rgba(0, 0, 0, 0.6);
  border-right: 5px solid rgba(0, 0, 0, 0.6);
  transform: rotate(45deg);
}
</style>