<template>
  <div>
    <h2>edit Form</h2>
    <loading-page v-if="isLoading"></loading-page>
    <article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
import {mapState} from 'vuex'

export default {
  name: 'EditArticle',
  components: {ArticleForm},
  computed: {
    ...mapState({
      isSubmitting: (data) => data.editArticle.isSubmitting,
      validationErrors: (data) => data.editArticle.validationErrors,
      isLoading: (data) => data.editArticle.isLoading,
      article: (data) => data.editArticle.article,
    }),
    initialValues() {
      if (!this.article) {
        return null
      }

      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList,
      }
    },
  },
  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug
      this.$store
        .dispatch('updateArticle', {articleInput, slug})
        .then((article) => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    },
  },
  mounted() {
    const slug = this.$route.params.slug
    this.$store.dispatch('getArticle', slug)
  },
}
</script>
