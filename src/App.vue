<template>
  <div id="app">
    <mcv-topbar></mcv-topbar>
    <router-view />
  </div>
</template>
<script>
import McvTopbar from '@/components/Topbar.vue'

export default {
  name: 'App',
  components: {
    McvTopbar,
  },
  mounted() {
    this.$store.dispatch('getCurrentUser')
  },
}
</script>
