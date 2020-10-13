<template lang="pug">
  div.flex.justify-between
    NuxtLink(v-if='prev' :to="{ name: 'blog-slug', params: { slug: prev.slug } }" class='hover:underline text-light-danger dark:text-dark-danger font-bold')
      font-awesome-icon(:icon="['fas', 'angle-left']")
      | &nbsp
      | {{ prev.title }}
    span(v-else='') &nbsp
    NuxtLink(v-if='next' :to="{ name: 'blog-slug', params: { slug: next.slug } }" class='hover:underline text-light-danger dark:text-dark-danger font-bold')
      | {{ next.title }}
      | &nbsp
      font-awesome-icon(:icon="['fas', 'angle-right']")
    span(v-else='') &nbsp
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
