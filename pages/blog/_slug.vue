<template lang="pug">
  div(class='flex justify-center item-align-center')
    article(class='flex flex-col pt-8 pb-8 w-3/4 border-b-2 border-light-accent')
      h1(class='text-2xl pl-4 py-4 inline rounded-tl-lg rounded-br-lg bg-gradient-to-r from-light-danger via-light-accent to-light dark:from-dark-accent dark:via-dark dark:to-dark font-bold leading-tight text-light-primary dark:text-dark-secondary')
        | {{ blo.title }}
      b(class="my-4 text-light-accent dark:text-dark-accent font-bold") {{ formatDate(blo.updatedAt) }} - 1 min read
      h2(class='p-0 text-center mb-6 font-bold leading-5 text-light-primary dark:text-dark-acccent') {{ blo.title }}
      div.separator
      nuxt-content(:document='blo')
      PrevNext(:prev="prev" :next="next")
</template>

<script>
export default {
  components: {
    PrevNext: () => import('../../components/PrevNext')
  },
  async asyncData ({ $content, params }) {
    const blo = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('index', 'asc')
      .surround(params.slug)
      .fetch()
    return { blo, prev, next }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    }
  }
}
</script>

<style scoped>
.separator {
  margin-bottom: 30px;
}
</style>
