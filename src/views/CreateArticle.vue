<template>
  <div>
    <h2>Create Form</h2>
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
  name: 'CreateArticle',
  components: {ArticleForm},
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
    }
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.createArticle.isSubmitting,
      validationErrors: (state) => state.createArticle.validationErrors,
    }),
  },
  methods: {
    onSubmit(articleInput) {
      this.$store
        .dispatch('createArticle', {articleInput})
        .then((article) =>
          this.$router.push({name: 'article', params: {slug: article.slug}})
        )
    },
  },
}
</script>
