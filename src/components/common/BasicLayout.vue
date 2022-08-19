<template>
  <div class="home-background">
    <navigation-menu style="position:absolute"/>
    <slot />
    <div class="home-color">
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