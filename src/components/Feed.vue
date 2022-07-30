<template>
  <div>
    <loading-page v-if="isLoading">Loading Please a Wait</loading-page>
    <error-message v-if="error" :message="error"></error-message>
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, i) in feed.articles"
        :key="i"
      >
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">ADD TO FAVORITES</div>
        </div>
        <router-link
          :to="{name: 'article', params: {slug: article.slug}}"
          class="preview-link"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          TAG LIST
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ErrorMessage from './ErrorMessage.vue'
import LoadingPage from './LoadingPage.vue'
export default {
  name: 'McvFeed',
  components: {ErrorMessage, LoadingPage},
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
  },
  mounted() {
    console.log('feed')
    this.$store.dispatch('getFeed', {apiUrl: this.apiUrl})
  },
}
</script>
