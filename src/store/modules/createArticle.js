import articleApi from '@/api/article'

const state = {
  isSubmitting: false,
  validationErrors: null,
}

const mutations = {
  createArticleStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  createArticleSuccess(state) {
    state.isSubmitting = false
  },
  createArticleFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

const actions = {
  createArticle(context, {articleInput}) {
    context.commit('createArticleStart')
    return new Promise((resolve) => {
      articleApi
        .createArticle(articleInput)
        .then((article) => {
          context.commit('createArticleSuccess', article)
          resolve(article)
        })
        .catch((result) =>
          context.commit('createArticleFailure', result.response.data.errors)
        )
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
