<template>
  <div>
    <md-toolbar>{{ $t("navigation") }}</md-toolbar>

    <md-list v-if="index" :md-expand-single="true">
      <md-list-item
        v-for="chapter in index.chapters"
        :key="chapter.title"
        :md-expand="chapter.sections"
      >
        <span class="md-list-item-text">{{ chapter.title }}</span>
        <md-list slot="md-expand" v-if="chapter.sections">
          <md-list-item
            v-for="section in chapter.sections"
            :key="section.title"
            class="md-inset"
            :to="'/'+section.link"
          >{{ section.title }}</md-list-item>
        </md-list>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import { getIndex } from "../pages";

export default {
  created: function() {
    this.fetchIndex();
  },

  data() {
    return {
      index: null
    };
  },

  methods: {
    fetchIndex() {
      getIndex(this.$i18n.locale).then(index => {
        this.index = index;
      });
    }
  },

  watch: {
    "$i18n.locale": "fetchIndex"
  }
};
</script>

<i18n>
{
	"en": {
		"navigation": "Navigation"
	},
	"fr": {
		"navigation": "Table des matières"
	}
}
</i18n>

<style lang="postcss">
.md-drawer .md-list-item-container {
  font-size: 16px;
}

.md-list-item.md-inset .md-list-item-content {
  padding-left: 32px;
}
</style>