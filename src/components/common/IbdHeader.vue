<template>
  <header class="header">
    <div class="header__left">
      <span class="title">Title</span>
      <navigation-menu />
    </div>
    <ibd-search />
  </header>
</template>
<script>
import NavigationMenu from '@/components/home/NavigationMenu.vue'
import IbdSearch from '@/components/common/IbdSearch.vue'
export default {
  components: {
    NavigationMenu,
    IbdSearch,
  }    
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  right: 0;
  left:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 127px;
  border-bottom: 1px solid #000;
  .title {
    margin-right: 44px;
    font-size: 30px;
  }
  .header__left {
    display: flex;
    justify-content: flex-start;
  }
}
.svg-inline--fa {
  font-size: 25px;
}
</style>