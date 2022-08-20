<template>
  <div class="home-background">
    <div class="color-area">
      <div class="content-area">
        <navigation-menu />
        <div class="main-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationMenu from '@/components/home/NavigationMenu.vue'

export default {
  components: {
    NavigationMenu
  }    
}
</script>
<style lang="">
    
</style>