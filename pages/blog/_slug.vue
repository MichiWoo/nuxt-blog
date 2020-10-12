<template lang="pug">
  article(class='flex flex-col pt-8 pb-8 w-3/4 border-b-2 border-gray-400')
    h1(class='text-2xl inline rounded-tl rounded-br bg-gradient-to-r from-light via-light-accent to-light-danger dark:from-dark-accent dark:via-dark dark:to-dark font-bold leading-tight text-light-primary dark:text-dark-secondary')
      | {{ blo.title }}
    h3.py-4.text-center {{ blo.description }}
    small.text-pink-primary.font-bold {{ `Actualización: ${formatDate(blo.updatedAt)}`}}
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
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped></style>
