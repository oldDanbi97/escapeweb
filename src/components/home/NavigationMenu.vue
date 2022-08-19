<template>
  <div class="nav_menu">
    <div>
      <a class="title"><h1>Title</h1></a>
    </div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">Home</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Menu</template>
        <el-menu-item index="2-1">Sub Menu1</el-menu-item>
        <el-menu-item index="2-2">Sub Menu2</el-menu-item>
        <el-menu-item index="2-3">Sub Menu3</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
</style>