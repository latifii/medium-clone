<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Something is broken</div>
    <div class="sidebar" v-if="tags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <a
          href=""
          v-for="tag in tags"
          :key="tag"
          class="tag-default tag-pill"
          >{{ tag }}</a
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
