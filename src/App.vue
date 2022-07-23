<template>
  <div id="app">
    <base-topbar></base-topbar>
    <router-view />
  </div>
</template>
<script>
import BaseTopbar from '@/components/BaseTopbar.vue'

export default {
  name: 'App',
  components: {
    BaseTopbar,
  },
  mounted() {
    this.$store.dispatch('getCurrentUser')
  },
}
</script>
