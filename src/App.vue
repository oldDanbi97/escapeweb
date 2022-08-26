<template>
  <basic-layout>
    <router-view />
  </basic-layout>
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
