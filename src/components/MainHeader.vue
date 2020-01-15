<i18n>
{
	"en": {
		"en": "English",
		"fr" : "Français"
	},
	"fr": {
		"en": "English",
		"fr": "Français"
	}
}
</i18n>

<template>
  <div class="md-toolbar-row">
    <div class="md-toolbar-section-start">
      <md-button class="md-icon-button" @click="$emit('toggleMenu')">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Progressive Web Apps Cookbook</h2>
    </div>

    <div class="md-toolbar-section-end">
      <search-bar />

      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          <md-icon>language</md-icon>
          <span>{{ $t($i18n.locale) }}</span>
        </md-button>

        <md-menu-content>
          <md-menu-item v-for="l in locales" :key="l" @click="switchLocale(l)">{{ $t(l) }}</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import { localStore } from "../utils/store";

export default {
  methods: {
    toggleSidenav() {
      this.$root.$emit("toggle-sidenav");
    },

    switchLocale(l) {
      this.$root.$i18n.locale = l;
      localStore.set(localStore.keys.PREF_LOCALE, l);
    }
  },

  computed: {
    locales() {
      return ["fr", "en"].sort((a, b) =>
        a === this.$i18n.locale ? -1 : a < b ? -1 : 1
      );
    }
  },

  components: {
    SearchBar
  }
};
</script>

<style lang="postcss" scoped>
.md-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: calc(100vw - 240px);
}
</style>