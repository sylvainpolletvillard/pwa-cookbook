<i18n>
	{
		"en": {
			"search": "Search by keyword",
			"no results": "No results"
		},
		"fr": {
			"search": "Rechercher par mot-clé",
			"no results": "Aucune page correspondante"
		}
	}
</i18n>

<template>
  <div class="search-bar">
    <md-button class="md-icon-button" @click.native="onBtnClick">
      <md-icon>search</md-icon>
    </md-button>

    <form
      novalidate
      @keydown.down.prevent="focusSuggestion(+1)"
      @keydown.up.prevent="focusSuggestion(-1)"
      @focusout="checkFocus"
      @focusin="checkFocus"
      @submit.stop.prevent="submit"
    >
      <input
        type="search"
        :placeholder="$t('search')"
        autocomplete="off"
        v-model="query"
        ref="input"
        @input="submit"
      />

      <md-list class="suggestions" ref="suggestions" v-if="query && suggestions">
        <md-list-item
          v-for="section in suggestions"
          :key="section.title"
          :to="'/'+section.link"
          @click="onBlur"
        >{{ section.title }}</md-list-item>

        <li class="no-results" v-if="suggestions.length === 0">{{ $t('no results') }}</li>
      </md-list>
    </form>
  </div>
</template>

<style lang="postcss" src="../style/search-bar.pcss"></style>

<script>
import { search } from "../utils/search";

export default {
  data() {
    return {
      query: "",
      suggestions: null,
      currentSuggestion: null
    };
  },

  methods: {
    checkFocus() {
      setTimeout(() => {
        let hasFocus = document.activeElement.matches(".search-bar *");
        if (hasFocus) {
          this.onFocus();
        } else {
          this.onBlur();
        }
      }, 10);
    },

    onFocus() {
      this.$el.classList.add("focus");
    },

    onBlur() {
      this.resetSuggestions();
      this.$el.classList.remove("focus");
    },

    onBtnClick() {
      this.$refs.input.focus();
      this.checkFocus();
    },

    focusSuggestion(delta) {
      if (!this.suggestions) return;

      const nbSuggestions = this.suggestions.length;
      const suggestions = this.$refs.suggestions.$el.querySelectorAll("a");

      if (this.currentSuggestion === null) {
        this.currentSuggestion = delta > 0 ? 0 : nbSuggestions - 1;
      } else {
        this.currentSuggestion =
          (this.currentSuggestion + delta + nbSuggestions) % nbSuggestions;
      }

      suggestions[this.currentSuggestion].focus();
    },

    resetSuggestions() {
      this.suggestions = null;
      this.currentSuggestion = null;
    },

    submit() {
      this.resetSuggestions();
      search(this.query, this.$i18n.locale).then(pagesMatched => {
        this.suggestions = pagesMatched;
      });
    }
  }
};
</script>
