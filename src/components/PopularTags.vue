<template>
  <div>
    <loading-page v-if="isLoading"></loading-page>
    <div v-if="error">Something is broken</div>
    <div class="sidebar" v-if="tags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="tag in tags"
          :key="tag"
          :to="{name: 'tag', params: {slug: tag}}"
          class="tag-default tag-pill"
          >{{ tag }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'PopularTags',
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      tags: (state) => state.popularTags.data,
      error: (state) => state.popularTags.error,
    }),
  },
  mounted() {
    this.$store.dispatch('getPopularTags')
  },
}
</script>

<style></style>
