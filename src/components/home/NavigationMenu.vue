<template>
  <ul class="menu__list">
    <li
      class="menu__item t3"
      v-for="menu in menuList"
      :key="menu.key"
    >
      {{ menu.menuNm }}
    </li>
  </ul>
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
  .menu__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .menu__item {
      margin-right: 52px;
      cursor: pointer;
    }
  }
</style>