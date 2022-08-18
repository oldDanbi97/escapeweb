<template>
  <div>
    <basic-layout>
      <router-view />
    </basic-layout>
  </div>
</template>

<script>
import BasicLayout from '@/components/common/BasicLayout.vue'

export default {
  name: 'App',
  components: {
    BasicLayout
  }
}
</script>

<style>
</style>
