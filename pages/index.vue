<template lang="pug">
  Home(:articles="articles")
</template>

<script>
export default {
  components: {
    Home: () => import('../components/Home')
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .sortBy('index', 'asc')
      .fetch()
    return { articles }
  }
}
</script>

<style scoped>

</style>
