<template>
  <ibd-header />
  <ibd-content>
    <slot></slot>
  </ibd-content>
</template>
<script>
import IbdHeader from '@/components/common/IbdHeader.vue'
import IbdContent from '@/components/common/IbdContent.vue'

export default {
  components: {
    IbdHeader,
    IbdContent
  }    
}
</script>
<style lang="">
    
</style>