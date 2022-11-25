<template>
  <el-row>
    <el-col :xl="6" :lg="7">
      <div class="login-form">
        <h2>欢迎使用VueAdmin后台管理系统</h2>
        <el-image
            style="width: 130px; height: 130px"
            :src="require('@/assets/logo.jpg')"
        ></el-image>
        <p>科文学院毕业设计</p>
        <p>Vue+SpringBoot后台权限管理系统V1.0</p>
      </div>
    </el-col>
    <el-col :span="1">
      <el-divider direction="vertical"></el-divider>
    </el-col>
    <el-col :xl="6" :lg="7">
      <!-- ref="loginForm"就相当于  id="loginForm"  -->
      <el-form
          :model="loginForm"
          label-position="right"
          :rules="rules"
          label-width="80px"
          ref="loginForm"
      >
        <el-form-item label="用户名" style="width: 380px" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" style="width: 380px" prop="password">
          <el-input
              type="password"
              v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="SubmitForm('loginForm')"
          >登录
          </el-button
          >
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script type="text/javascript">
export default {
  name: "Login",
  data() {
    return {
      //登录的用户信息对象
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"},
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
        ],
      },
    };
  },
  methods: {
    open2() {
      this.$message({
        message: '登录成功',
        type: 'success'
      });
    },

    open4(msg) {
      this.$message.error(msg);
    },

    SubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
            if (valid) {

              // this.$axios
              //    .post("/login?" + this.$qs.stringify(this.loginForm))
              //    .then((response) => {
              //       console.log(response.data);
              //       console.log(response.headers);
              //       const jwt = response.headers["token"]; //响应的token的数据只能在Java服务器端实现
              //       this.$router.push("/");
              //    });

              if (this.loginForm.username == "15518745323") {
                if (this.loginForm.password == "123") {
                  this.open2()
                  this.$router.push("/index");
                } else {
                  //  密码错误
                  this.open4("密码错误!!!!")
                  this.loginForm.username = ""
                  this.loginForm.password = ""

                }
              } else {
                //账号错误
                this.open4("账号错误!!!!")
                this.loginForm.username = ""
                this.loginForm.password = ""
              }
            } else {
              console.log("登录提交失败");
              return false;
            }
          }
      )
      ;
    },
  },
  created() {
  }
  ,
}
;
</script>

<style scoped>
.el-row {
  background: #fafafa;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.el-divider {
  height: 200px;
}

.codeImg {
  float: left;
  width: 100px;
  height: 40px;
  margin-left: 8px;
  border-radius: 4px;
}
</style>
 