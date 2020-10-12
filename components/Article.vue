<template lang="pug">
  div(class='my-10')
    NuxtLink(class='text-light-primary dark:text-dark-primary' :to="`/blog/${article.slug}`")
      h3(class="text-2xl inline rounded-tl rounded-br bg-gradient-to-r from-light via-light-accent to-light-danger dark:from-dark-accent dark:via-dark dark:to-dark font-bold leading-tight text-light-primary dark:text-dark-secondary")
        | {{ article.title }}
      div
        h5(class="inline font-bold text-light-accent dark:text-dark-accent")
          |  {{ formatDate(article.createdAt) }}
        h5(class="inline text-light-accent dark:text-dark-accent") - 1 min read
      p(class="p-0mb-5 text-light-primary dark:text-dark-accent")
        | {{ article.description }}
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    }
  }
}
</script>

<style scoped></style>
