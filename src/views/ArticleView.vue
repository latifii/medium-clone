<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <a>
            <img :src="article.author.image" />
          </a>
          <div class="info">
            <a> {{ article.author.username }} </a>
            <span class="date">{{ article.createdAt }} </span>
          </div>
          <span v-if="isAuthor">
            <a class="btn btn-outline-secondary btn-sm">
              <i class="ion-edit" />
              Edit Article
            </a>
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a" />
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <!-- <mcv-loading v-if="isLoading" /> -->
      <loading-page v-if="isLoading" />
      <error-message v-if="false"></error-message>
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          <tag-list :tags="article.tagList"></tag-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ErrorMessage from '@/components/ErrorMessage.vue'
import {mapGetters, mapState} from 'vuex'
import TagList from '@/components/TagList.vue'

export default {
  name: 'ArticleView',
  components: {
    ErrorMessage,
    TagList,
  },
  computed: {
    ...mapState({
      article: (state) => state.article.data,
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
    }),
    ...mapGetters(['currentUser']),
    isAuthor() {
      if (!this.article || !this.currentUser) {
        return false
      }
      return this.currentUser.username === this.article.author.username
    },
  },
  mounted() {
    this.$store.dispatch('getArticle', this.$route.params)
  },
}
</script>
