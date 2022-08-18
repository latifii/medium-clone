<template>
  <div>
    <h2>Create Form</h2>
    <article-form
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
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
      validationErrors: null,
      isSubmitting: false,
    }
  },
  methods: {
    onSubmit(data) {
      console.log('On Event', data)
    },
  },
}
</script>
