<template>
  <div class="menu_layout">
    <div>
      <a class="title"><h1>Title</h1></a>
    </div>
    <ul class="nav_menu">
      <li
        v-for="menu in menuList"
        :key="menu.key"
      >
        {{ menu.menuNm }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavigtionMenu",
  computed: {
  },
  data() {
    return {
      menuList: [
        {
          menuNm: "Home",
          key: "home"
        },
        {
          menuNm: "Menu1",
          key: "menu1"
        },
        {
          menuNm: "Menu2",
          key: "menu2"
        },
        {
          menuNm: "Menu3",
          key: "menu3"
        },
        {
          menuNm: "Menu4",
          key: "menu4"
        },
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>