<template>
  <div>Feed {{ apiUrl }}</div>
</template>

<script>
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log('feed')
    // this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
    this.$store.dispatch('getFeed', {apiUrl: this.apiUrl})
  },
}
</script>
