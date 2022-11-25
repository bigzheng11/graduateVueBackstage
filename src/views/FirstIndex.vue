<template>
  <div  style="background: #f0f0f0;padding:15px 8px 0px 8px;height: 90%">
    <el-row :gutter="16">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 352px">
          <div class="user-info">
            <el-image
                style="width: 100px; height: 100px;border-radius: 40px"
                :src="imgurl"
                fit="contain"
            ></el-image>
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            项目完成时间：
            <span>2022-11-25</span>
          </div>
          <br>
          <div class="user-info-list">
            毕业答辩地点：
            <span>浙江湖州</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 252px">
          <template #header>
            <div class="clearfix">
              <span>语言详情</span>
            </div>
          </template>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          CSS
          <el-progress :percentage="13.7"></el-progress>
          HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <el-icon class="grid-con-icon">
                  <User/>
                </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">{{userSize}}</div>
                  <div>用户总数</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <el-icon class="grid-con-icon">
                  <ChatDotRound/>
                </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">{{messageSize}}</div>
                  <div>留言总数</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <el-icon class="grid-con-icon">
                  <Goods/>
                </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">{{goodsSize}}</div>
                  <div>商品数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height: 503px">
          <template #header>
            <div class="clearfix">
              <span>待办事项</span>
              <el-button style="float: right; padding: 3px 0" text>添加</el-button>
            </div>
          </template>

          <el-table :show-header="false" :data="todoList" style="width: 100%">
            <el-table-column width="40">
              <template #default="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <div
                    class="todo-item"
                    :class="{
										'todo-item-del': scope.row.status
									}"
                >
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    </el-row>
  </div>
</template>

<script >
export default {
  data() {
    return {
      userSize:0,
      messageSize:0,
      goodsSize:0,
      imgurl:require("@/assets/admin.jpeg"),
      name: "Bigzheng",
      // role: name === 'admin    ' ? '超级管理员' : '普通用户',
      role: '超级管理员',
      options: {
        type: 'bar',
        xRorate: 25,
      },
      todoList: [
        {
          title: '吃饭 , 睡觉 , 在吃饭!!',
          status: false
        },
        {
          title: '今天又出现了20个BUG',
          status: false
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: true
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: true
        }
      ]
    }
  },

  created() {
    // 获取首页信息
    console.log("indexFirst发送请求")
    this.$axios
        .get("/api/interest/backstageIndexAll")
        .then((response) => {
          console.log(response.data);
          this.userSize=response.data[0]
          this.messageSize=response.data[1]
          this.goodsSize=response.data[2]
          //     userSize:0,
          //     messageSize:0,
          //     goodsSize:0,
        })
        .catch((error) => {
          console.log(error);
        });
  }
};
</script>

<style scoped>
body{
  background: #494949;
}


.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 300px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

/*.schart {*/
/*  width: 100%;*/
/*  height: 300px;*/
/*}*/
</style>