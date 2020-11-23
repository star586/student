<template>
  <div class="affair">
    <div class="container">
      <div class="box affair-box">
        <div class="affair-need">
          <div class="need-title">需要完成的事务</div>
          <ul class="need-list">
            <li><a href="#">宿舍的登记入住</a></li>
            <li><a href="#">一卡通的领取</a></li>
            <li><a href="#">学生证的领取与注册</a></li>
          </ul>
        </div>
        <div class="affair-btns">
          <el-button type="primary" class="con-btn" @click="con"
            >确认完成</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //name: "information"
  data() {
    return {};
  },
  methods: {
    con() {
      this.$confirm("请先完成现场报道", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "已确认!"
          });
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
.box {
  font-size: 14px;
  width: 60%;
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
.affair-need {
  width: 100%;
  height: 200px;
  border: 1px solid #797979;
  .need-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border: 1px solid #797979;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .need-list {
    color: yellow;
    padding: 20px;
    padding-left: 50px;
    li a {
      color: yellow;
      text-decoration: none;
    }
  }
}
.affair-box {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
.affair-btns {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  .con-btn {
    width: 140px;
  }
}
</style>