<template>
  <div id="app" class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
        <main-header @toggleMenu="menuVisible = !menuVisible"></main-header>
      </md-app-toolbar>

      <md-app-drawer md-persistent="full" :md-active.sync="menuVisible">
        <side-nav @pageChanged="menuVisible = false"></side-nav>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="postcss" src="./style/main.pcss"></style>

<script>
import MainHeader from "./components/MainHeader.vue";
import SideNav from "./components/SideNav.vue";

export default {
  name: "app",
  components: {
    MainHeader,
    SideNav
  },
  data() {
    return {
      menuVisible: true
    };
  }
};
</script>

<style lang="postcss">
.md-app {
  height: 100vh;
}
</style>
