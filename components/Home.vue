<template lang="pug">
  div(class='home max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full mx-auto flex-1 mb-24 sm:mb-0')
    h1(class='text-2xl font-bold mb-2 mt-8 text-light-primary dark:text-dark-accent')
      | Hola, soy Michel&nbsp
      span(class='saludo' aria-hidden='true')
        | 👋
      br
      | y yo&nbsp
      Hearth(class='text-light-secondary dark:text-dark-secondary')
      | &nbspel desarrollo web.
    Frontend(class='w-full')
    p(class='text-base mb-8 mt-4 text-light-secondary dark:text-dark-accent')
      | Soy un desarrollador web&nbsp
      strong full-stack,
      | &nbspvivo en México&nbsp
      span(role='emoji' aria-label='emoji')
        | 🇲🇽
      | , en el bello estado de Veracruz. Me apasionan las tencologías web, con las que más he trabajado son&nbsp
      b Javascript, Vue, Nuxt,
      | &nbspno obstante también he trabajo con&nbsp
      b PHP, C# y Node.
    p(class='text-base mb-8 mt-4 text-light-secondary dark:text-dark-accent')
      | Te invito a
      NuxtLink(to='contacto')
        strong(class='text-light-primary dark:text-dark-primary cursor-pointer')
          | &nbspcontactarme
      | &nbspsi necesitas desarrollar alguna página o aplicación web, o si quieres saber un poco
      NuxtLink(to='acerca')
        strong(class='text-light-primary dark:text-dark-primary cursor-pointer')
          | &nbspmás de mi
      | &nbspno dudes en hacerlo.
    ListArticles(:config="config" :articles="articles")
</template>

<script>
export default {
  name: 'Home',
  components: {
    Hearth: () => import('../components/icons/Hearth'),
    Frontend: () => import('../components/images/Frontend'),
    ListArticles: () => import('../components/ListArticles')
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      config: {
        title: 'Algunos de mis escritos:'
      }
    }
  }
}
</script>

<style scoped>
.saludo {
  -webkit-animation-name: move-hand;
  animation-name: move-hand;
  -webkit-animation-duration: 2.5s;
  animation-duration: 2.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}
@keyframes move-hand {
  0% {
      transform: rotate(0);
  }
  10% {
      transform: rotate(14deg);
  }
  20% {
      transform: rotate(-8deg);
  }
  30% {
      transform: rotate(14deg);
  }
  40% {
      transform: rotate(-4deg);
  }
  50% {
      transform: rotate(10deg);
  }
  60% {
      transform: rotate(0);
  }
  100% {
      transform: rotate(0);
  }
}
</style>
