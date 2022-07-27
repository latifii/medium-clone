<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Login</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}">
              Need an account?
            </router-link>
          </p>
          <!-- VALIDATION ERRORS -->
          <validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></validation-errors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors.vue'

export default {
  name: 'McvLogin',
  components: {
    ValidationErrors,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
    },
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({name: 'home'})
          }
        })
        .catch((e) => {
          console.log('ERR', e)
        })
    },
  },
}
</script>
