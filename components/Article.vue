<template lang="pug">
  div
    NuxtLink(class='text-light-primary' to='article.path')
      h3(class="inline rounded-tl rounded-br bg-gradient-to-r from-light via-light-accent to-light-danger dark:from-dark dark:via-dark-accent dark:to-dark-danger font-bold leading-tight text-light-primary dark:text-dark-accent")
        | {{ article.title }}
      div
        h5(class="inline font-bold text-light-primary dark:text-dark-accent")
          |  {{ formatDate(article.createdAt) }}
        h5(class="inline text-light-primary dark:text-dark-accent") - 1 min read
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
