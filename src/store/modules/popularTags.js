import tagsApi from '@/api/popularTags'

const state = {
  data: null,
  isLoading: false,
  error: null,
}
const mutations = {
  getPopularTagsStart(state) {
    state.data = null
    state.isLoading = true
  },
  getPopularTagsSucess(state, payload) {
    state.data = payload
    state.isLoading = false
  },
  getPopularTagsFailure(state) {
    state.isLoading = false
  },
}
const actions = {
  getPopularTags(context) {
    return new Promise((resolve) => {
      context.commit('getPopularTagsStart')
      tagsApi
        .getPopularTags()
        .then((response) => {
          context.commit('getPopularTagsSucess', response)
          console.log('get sucsess apiTag', response)
          resolve(response.data)
        })
        .catch((err) => {
          context.commit('getPopularTagsFailure')
          console.log('Err get tagApi', err)
        })
    })
  },
}
export default {
  state,
  actions,
  mutations,
}
