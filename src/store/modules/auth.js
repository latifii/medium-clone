import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  registerSucsess(state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

const actions = {
  async register(context, credentials) {
    context.commit('registerStart')
    await authApi
      .register(credentials)
      .then((response) => {
        context.commit('registerSucsess', response.data.user)
        setItem('accessToken', response.data.user.token)
        console.log('okk', response.data.user)
      })
      .catch((result) => {
        context.commit('registerFailure', result.response.data.errors)
        console.log('err', result.response)
      })
  },
}

export default {
  state,
  // getters,
  mutations,
  actions,
}
