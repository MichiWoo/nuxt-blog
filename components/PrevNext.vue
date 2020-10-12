<template lang="pug">
  div.flex.justify-between
    NuxtLink.text-text-pink-primary.font-bold(v-if='prev' :to="{ name: 'blog-slug', params: { slug: prev.slug } }" class='hover:underline')
      | {{ prev.title }}
    span(v-else='') &nbsp
    NuxtLink.font-bold(v-if='next' :to="{ name: 'blog-slug', params: { slug: next.slug } }" class='hover:underline')
      | {{ next.title }}
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
