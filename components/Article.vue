<template lang="pug">
  div(class='my-10')
    NuxtLink(class='text-light-primary dark:text-dark-primary' :to="`/blog/${article.slug}`")
      h2(class="text-xl inline rounded-tl rounded-br bg-gradient-to-r from-light via-light-accent to-light-danger dark:from-dark dark:via-dark dark:to-dark font-bold leading-tight text-light-primary dark:text-dark-secondary")
        | {{ article.title }}
      div
        h3(class="inline text-sm font-bold text-light-secondary dark:text-dark-danger")
          |  {{ formatDate(article.createdAt) }}
        | &nbsp
        h3(class="inline text-sm font-bold text-light-secondary dark:text-dark-danger") - 1 min read
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
