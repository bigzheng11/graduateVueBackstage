<!-- 用户管理组件 -->
<template>
   <div class="goodsDetail">
      <div>
         <el-descriptions title="商品" :column="3" border>
            <el-descriptions-item
               label="用户名"
               label-class-name="my-label"
               content-class-name="my-content"
               >kooriookami</el-descriptions-item
            >
            <el-descriptions-item label="手机号"
               >18100000000</el-descriptions-item
            >
            <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
               <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item
               label="联系地址"
               :contentStyle="{ 'text-align': 'right' }"
               >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
            >
         </el-descriptions>
      </div>
      goodsID
   </div>
</template>
   
   <script>
export default {
   data() {
      return { goodsID: this.$route.query.goodsID };
   },
   created() {
      console.log("接收到的goodsID为", this.goodsID);
   },
};
</script>

<style scoped>
.my-label {
   background: #e1f3d8;
}

.my-content {
   background: #fde2e2;
}
</style>