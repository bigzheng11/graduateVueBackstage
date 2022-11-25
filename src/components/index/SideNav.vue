<!-- ----------------------- -->
<!-- TODO侧边栏----------------- -->
<!-- ----------------------- -->
<template>
    <el-menu default-active="/testManagement" class="el-menu-vertical-demo" router>

      <el-menu-item index="/index/FirstIndex"><i class="el-icon-menu"></i>首页</el-menu-item>

      <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>用户管理</template>
      <el-menu-item-group>
        <el-menu-item index="/index/UserDetail" disabled>用户概况</el-menu-item>
        <el-menu-item index="/index/UserList">用户列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="/index/UserInterest">用户兴趣可视化</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-message"></i>商品管理</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="/index/GoodsEcharts">商品概况</el-menu-item>
        <el-menu-item index="/index/GoodsList">商品列表</el-menu-item>
        <el-menu-item index="/index/" disabled>商品详情</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

<!--    <el-menu-item index="/index/help"><i class="el-icon-menu"></i>商品管理</el-menu-item>-->
    <el-menu-item ><i class="el-icon-setting"></i>意见反馈</el-menu-item>

  </el-menu>
  </el-col>
</template>
