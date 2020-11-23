<template>
  <div class="information">
    <div class="container">
      <div class="box info-box">
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学生姓名：</span>
            <span class="info-item-txt">小明</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">学生学号：</span>
            <span class="info-item-txt">2020170111</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">学生身份证号：</span>
            <span class="info-item-txt">51056320010708284x</span>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学生性别：</span>
            <span class="info-item-txt">男</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">学生年龄：</span>
            <span class="info-item-txt">18</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">学生民族：</span>
            <span class="info-item-txt">汉族</span>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学院：</span>
            <span class="info-item-txt">计算机科学学院</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">专业：</span>
            <span class="info-item-txt">软件工程</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">年级：</span>
            <span class="info-item-txt">大一</span>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">班级：</span>
            <span class="info-item-txt">1班</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">宿舍：</span>
            <span class="info-item-txt">东苑三栋</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">学制：</span>
            <span class="info-item-txt">4年</span>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学生类别：</span>
            <span class="info-item-txt">应届生</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">学习形式：</span>
            <span class="info-item-txt">线下</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">政治面貌：</span>
            <span class="info-item-txt">共青团员</span>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">辅导员姓名：</span>
            <span class="info-item-txt">潘瑞英</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">辅导员电话：</span>
            <span class="info-item-txt">11111111111</span>
          </div>
          <div class="info-item">
            <span class="info-item-name">学籍状态：</span>
            <span class="info-item-txt">注册学籍</span>
          </div>
        </div>
        <div class="info-btns">
          <el-button type="primary" id="correct-btn" @click="correct"
            >确认信息无误</el-button
          >
          <el-button type="primary" id="worry-btn" @click="modify"
            >信息有误</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import bus from "../../components/eventbus/eventBus.js";
export default {
  // name: "information"
  data() {
    return {};
  },
  methods: {
    modify() {
      this.$router.push("/student/modify_info");
    },
    correct() {
      this.$confirm("确定信息无误?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })

        .then(() => {
          this.$message(
            {
              type: "success",
              message: "已确认"
            },
            // bus.$emit("confirm"),
            this.$router.push("/student/Check_info"),
            console.log("tiao")
          );
        })
        .catch(() => {
          this.$message(
            {
              type: "info",
              message: "已取消"
            },
            console.log("cuo")
          );
        });
    }
  }
  // created() {
  //   console.log("infonew");
  // }
};
</script>
<style lang="scss" scoped>
.box {
  font-size: 14px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  // padding: 10px;
  border: 1px solid #797979;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  color: #fff;
  padding: 50px 100px;
  padding-top: 100px;
}
.info-box {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  .info-row {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    .info-item {
      flex: 1;
    }
  }
}
.info-btns {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  #correct-btn {
    width: 140px;
    margin-right: 50px;
  }
  #worry-btn {
    width: 140px;
    margin-left: 50px;
  }
}
</style>