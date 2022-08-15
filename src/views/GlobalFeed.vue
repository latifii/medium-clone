<template>
  <div class="home-page">
    <mcv-banner></mcv-banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <feed-toggler></feed-toggler>
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
        <div class="col-md-3">
          <popular-tags></popular-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed.vue'
import PopularTags from '@/components/PopularTags.vue'
import McvBanner from '@/components/Banner.vue'
export default {
  name: 'McvGlobalFeed',
  components: {
    McvFeed,
    PopularTags,
    McvBanner,
    FeedToggler,
  },
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>
