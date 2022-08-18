<template>
  <div>
    <ul class="tag-list" v-for="tag in tags" :key="tag">
      <li class="tag-default tag-pill tag-outline ng-binding ng-scope">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>
