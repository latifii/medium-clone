import articleApi from '@/api/article'

const state = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null,
}
const mutations = {
  updateArticleStart(state) {
    state.isSubmitting = true
  },
  updateArticleSuccess(state) {
    state.isSubmitting = false
  },
  updateArticleFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  getArticleStart(state) {
    state.isLoading = true
  },
  getArticleSuccess(state, payload) {
    state.isLoading = false
    state.article = payload
  },
  getArticleFailure(state) {
    state.isLoading = false
  },
}
const actions = {
  updateArticle(context, {slug, articleInput}) {
    context.commit('updateArticleStart')
    return new Promise((resolve) => {
      articleApi
        .updateArticle(slug, articleInput)
        .then((article) => {
          context.commit('updateArticleSuccess', article)
          resolve(article)
        })
        .catch((res) =>
          context.commit('updateArticleFailure', res.response.data.errors)
        )
    })
  },
  getArticles(context, {slug}) {
    context.commit('getArticleStart')
    return new Promise((resolve) => {
      articleApi
        .getArticle(slug)
        .then((article) => {
          context.commit('getArticleSuccess', article)
          resolve(article)
        })
        .catch(() => context.commit('getArticleFailure'))
    })
  },
}
export default {
  state,
  actions,
  mutations,
}
