<template>
  <div class="information">
    <div class="container">
      <div class="modify-title">
        <h2 align="center">学生信息修改</h2>
      </div>
      <div class="box info-box">
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学生姓名：</span>
            <input type="text" value="小明" />
          </div>
          <div class="info-item">
            <span class="info-item-name">学生学号：</span>
            <input type="text" value="2020170111" />
          </div>
          <div class="info-item">
            <span class="info-item-name">学生身份证号：</span>
            <input type="text" value="51038320010807495x" />
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学生性别：</span>
            <input type="radio" name="sex" id="man" checked="checked">
            <label for="man">男</label>
            <input type="radio" name="sex" id="woman">
            <label for="woman">女</label>
          </div>
          <div class="info-item">
            <span class="info-item-name">学生年龄：</span>
            <input type="text" value="18" />
          </div>
          <div class="info-item">
            <span class="info-item-name">学生民族：</span>
            <input type="text" value="汉族" />
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学院：</span>
            <input type="text" value="计算机科学学院" />
          </div>
          <div class="info-item">
            <span class="info-item-name">专业：</span>
            <input type="text" value="软件工程专业" />
          </div>
          <div class="info-item">
            <span class="info-item-name">年级：</span>
            <input type="text" value="大一" />
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">班级：</span>
            <input type="text" value="一班" />
          </div>
          <div class="info-item">
            <span class="info-item-name">宿舍：</span>
            <input type="text" value="东苑三栋" />
          </div>
          <div class="info-item">
            <span class="info-item-name">学制：</span>
            <input type="text" value="4年" />
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">学生类别：</span>
            <input type="text" value="应届生" />
          </div>
          <div class="info-item">
            <span class="info-item-name">学习形式：</span>
            <input type="text" value="线下" />
          </div>
          <div class="info-item">
            <span class="info-item-name">政治面貌：</span>
            <input type="text" value="共青团员" />
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <span class="info-item-name">辅导员姓名：</span>
            <input type="text" value="潘瑞英" />
          </div>
          <div class="info-item">
            <span class="info-item-name">辅导员电话：</span>
            <input type="text" value="11111111111" />
          </div>
          <div class="info-item">
            <span class="info-item-name">学籍状态：</span>
            <input type="text" value="注册学籍" />
          </div>
        </div>
        <div class="info-btns">
          <el-button type="primary" id="correct-btn" @click="confirm"
            >确认</el-button
          >
          <el-button type="primary" @click="information">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name: "information"
  data() {
    return {};
  },
  methods: {
    information() {
      console.log("fanghui");
      this.$router.push("/student/information");
    },
    confirm() {
      this.$confirm("确认修改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }) .then(() => {
          this.$message(
            {
              type: "success",
              message: "修改完成"
            },
            // console.log("tiao"),
            this.$router.push("/student/Check_info")
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.modify-title {
  position: relative;
  top: 80px;
  font-size: 20px;
  color: #fff;
}

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
  margin-top: 20px;
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
  }
}

input {
  background-color: transparent;
  border: none;
  color: #fff;
}
</style>