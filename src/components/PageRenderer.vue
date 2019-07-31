<template>
  <main id="main" :class="'page-'+$route.params.pageName">
    <div class="content">
      <transition name="fadein">
        <loader :state="loading" v-if="loading" />
      </transition>
      <div class="error" v-if="error">
        <p>{{ $t('an error occured') }}</p>
        <p>{{ error }}</p>
      </div>
      <div v-html="renderedContent"></div>
    </div>
  </main>
</template>

<style lang="postcss" src="../style/page.pcss"></style>
<style src="prismjs/themes/prism.css"></style>

<script>
import Loader from "./Loader.vue";
import fetch from "../utils/fetch";
import Prism from "prismjs";
import MarkdownIt from "markdown-it";

import { getSectionByLink } from "../pages";

const md = new MarkdownIt({
  html: true,
  linkify: true
});

export default {
  components: {
    Loader
  },

  data() {
    return {
      content: null,
      error: null,
      loading: "init",
      section: null
    };
  },

  created() {
    this.fetchContent();
  },

  watch: {
    $route() {
      this.loading = "change-page";
      this.error = null;
      this.content = null;
      this.fetchContent();
    },
    "$i18n.locale"() {
      this.loading = "init";
      this.error = null;
      this.content = null;
      this.fetchContent();
    }
  },

  computed: {
    renderedContent() {
      return md.render(this.content || "");
    }
  },

  methods: {
    fetchContent() {
      const vm = this;
      const { pageName } = this.$route.params;

      return Promise.all([
        getSectionByLink(pageName, this.$i18n.locale),
        fetch(`pages/${this.$i18n.locale}/${pageName}.md`)
      ])
        .then(([section, content]) => {
          vm.loading = null;
          vm.error = null;
          vm.section = section;
          vm.content = content
            .replace(/]\(([^)]*)\.md\)/g, "](#/$1)")
            .replace(/href="(.*?)\.md/g, 'href="#/$1');
          vm.$nextTick(() => {
            Prism.highlightAll();
            this.onLoad();
          });
        })
        .catch(error => {
          vm.loading = null;
          console.error(error);
          vm.error = error.status === 404 ? vm.$t("404") : error;
          vm.content = null;
        });
    },

    onLoad() {
      if (this.$route.params.pageName === "checklist") {
        for (let li of document.querySelectorAll("#main .content li")) {
          let cb = document.createElement("input");
          cb.type = "checkbox";
          cb.value = li.textContent
            .slice(0, 50)
            .replace(/\s/g, "_")
            .replace(/[^[\w]/g, "");
          cb.checked = localStorage.getItem(cb.value) === "true";
          cb.addEventListener("change", function() {
            localStorage.setItem(cb.value, cb.checked.toString());
          });
          li.insertBefore(cb, li.firstChild);
        }
      }
    }
  }
};
</script>

<i18n>
{
	"en": {
		"an error occured": "An error occured:",
		"404": "Page not found :("
	},
	"fr": {
		"an error occured": "Une erreur est survenue:",
		"404": "Page introuvable :("
	}
}
</i18n>
