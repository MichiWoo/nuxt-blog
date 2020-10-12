<template lang="pug">
  div(class='blog max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full mx-auto flex-1 mb-24 sm:mb-0')
    h1(class='text-2xl font-bold mb-2 mt-8 text-light-primary dark:text-dark-accent')
      | Blog
    ListArticles(:articles='articles')
</template>

<script>
export default {
  name: 'Blog',
  components: {
    ListArticles: () => import('../../components/ListArticles')
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .sortBy('index', 'asc')
      .fetch()
    return { articles }
  }
}
</script>

<style scoped></style>
