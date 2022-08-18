import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null,
}
const mutations = {
  getArticleStart(state) {
    state.data = null
    state.isLoading = true
  },
  getArticleSuccess(state, payload) {
    state.data = payload
    state.isLoading = false
  },
  getArticleFailer(state) {
    state.isLoading = false
  },
}
const actions = {
  getArticle(context, {slug}) {
    return new Promise((resolve) => {
      context.commit('getArticleStart')
      articleApi
        .getArticle(slug)
        .then((article) => {
          context.commit('getArticleSuccess', article)
          resolve(article)
        })
        .catch(() => context.commit('getArticleFailer'))
    })
  },
}
export default {
  state,
  mutations,
  actions,
}
