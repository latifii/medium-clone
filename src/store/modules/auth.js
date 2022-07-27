import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  isLoggedIn: null,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
}

const getters = {
  currentUser: (state) => state.currentUser,
  isLoggedIn: (state) => Boolean(state.isLoggedIn),
  // isAnonymous: (state) => state.isLoggedIn === false,
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

  loginStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  loginSucsess(state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  loginFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  getCurrentUserStart(state) {
    state.isLoading = true
  },
  getCurrentUserSucsess(state, payload) {
    state.isLoading = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  getCurrentUserFailure(state) {
    state.isLoading = false
    state.isLoggedIn = false
    state.currentUser = null
  },
}

const actions = {
  register(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then((response) => {
          context.commit('registerSucsess', response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response)
        })
        .catch((result) => {
          context.commit('registerFailure', result.response.data.errors)
          console.log('err', result.response)
        })
    })
  },
  login(context, credentials) {
    context.commit('loginStart')
    return new Promise((resolve) => {
      authApi
        .login(credentials)
        .then((response) => {
          context.commit('loginSucsess', response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response)
        })
        .catch((result) => {
          context.commit('loginFailure', result.response.data.errors)
          console.log('err', result.response)
        })
    })
  },
  getCurrentUser(context) {
    return new Promise((resolve) => {
      context.commit('getCurrentUserStart')
      authApi
        .getCurrentUser()
        .then((response) => {
          context.commit('getCurrentUserSucsess', response.data.user)
          resolve(response)
        })
        .catch((result) => {
          context.commit('getCurrentUserFailure')
          console.log('err', result.response)
        })
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
