import feedApi from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

const mutations = {
  getFeedStart(state) {
    state.isLoading = true
    state.data = null
  },
  getFeedSuccess(state, payload) {
    state.isLoading = false
    state.data = payload
  },
  getFeedFailure(state) {
    state.isLoading = false
  },
}

const actions = {
  getFeed(context, {apiUrl}) {
    return new Promise((resolve) => {
      context.commit('getFeedStart')
      feedApi
        .getFeed(apiUrl)
        .then((response) => {
          context.commit('getFeedSuccess', response.data)
          console.log('Ok get feed', response.data)
          resolve(response.data)
        })
        .catch((err) => {
          context.commit('getFeedFailure')
          console.log('Error Get Feed', err.response)
        })
    })
  },
}

export default {
  state,
  // getters,
  mutations,
  actions,
}
