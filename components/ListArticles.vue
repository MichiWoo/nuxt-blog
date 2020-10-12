<template lang="pug">
  section(class='max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full mx-auto flex-1 mb-24 sm:mb-0')
    h1(class='text-2xl font-bold mb-2 mt-8 text-light-primary dark:text-dark-primary')
      span
        | Artículos&nbsp
        Pencil(class='text-light-secondary dark:text-dark-secondary')
    h3(class='text-light-primary dark:text-dark-accent')
      span
        | Me gusta compartir un poco de lo que hago, de vez en cuando escribo, aquí estan algunos de los más recientes.
    ul
      li(v-for="article in articles")
        Article(:article="article" :key="article.index")
</template>

<script>
export default {
  name: 'ListArticles',
  components: {
    Article: () => import('../components/Article'),
    Pencil: () => import('../components/icons/Pencil')
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped></style>
