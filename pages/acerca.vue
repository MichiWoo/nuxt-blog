<template lang="pug">
  div(class='acerca max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full mx-auto flex-1 mb-24 sm:mb-0')
    div(class='flex flex-col md:flex-row')
      div(class='responsive-image-container overflow-hidden inline-block mt-8 w-48 h-48 mr-0 mb-12 sm:mb-16 rounded-full shadow-sm self-center md:mr-20 md:mb-8')
        img(class='object-cover' src="/avatarMichiwoo.jpg")
      div(class='flex-1')
        h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-2 sm:mt-8')
          | Hola mundo ... !
        p(class='text-base text-justify mb-8 mt-4 text-light-secondary dark:text-dark-secondary')
          | Soy Michel, desarrollador frontend, empezando a formarme como backend, amante del café ☕️, me encantan las series 📺 y adoro a mis 🐶🐶🐶.
        p(class='text-base text-justify mb-8 mt-4 text-light-secondary dark:text-dark-secondary')
          | Actualmente vivo en México 🇲🇽, mi meta es nunca parar de aprender 👨🏿‍💻
    h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-8')
      | Proyectos&nbsp
      font-awesome-icon(:icon="['fas', 'laptop-code']")
    section(class='flex items-center py-6' v-for="p in proyects" :key='p.id')
      span(class='relative flex h-4 w-4 mr-6')
        font-awesome-icon(:icon="['fas', 'code-branch']" class='animate-ping duration-300 absolute inline-flex h-full w-full rounded-full bg-transparent border-1 border-light-accent dark:border-dark-accent text-light-primary dark:text-dark-accent')
        font-awesome-icon(:icon="['fas', 'code-branch']" class='relative inline-flex rounded-full h-4 w-6 bg-transparent text-light-primary dark:text-dark-primary')
      div(class='flex-1')
        h1(class='text-base font-bold text-light-primary dark:text-dark-primary')
          | {{ p.name }}
        h2(class='text-sm text-light-secondary dark:text-dark-secondary font-bold')
          | {{ p.description }}
        a(class='text-xs text-light-danger dark:text-dark-danger' :href="p.url" target='_blank' rel='noopener noreferer' :alt='p.alt')
          | {{ p.url }}&nbsp
          font-awesome-icon(:icon="['fas', 'link']")
      div(class='h-24 bg-gradient-to-r from-text-light- via-text-light-primary to-text-light-accent')
    h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-8')
      | Habilidades&nbsp
      font-awesome-icon(:icon="['fas', 'tools']")
</template>

<script>
export default {
  name: 'Acerca',
  data () {
    return {
      proyects: [
        {
          id: 1,
          name: 'PokeRex',
          description: 'Aplicación pokedex para visualizar pokemones, contruída con React, Hooks y styled components.',
          url: 'https://pokerex.netlify.app',
          tags: ['react', 'frontend', 'javascript', 'styled components'],
          alt: 'Link a proyecto Pokerex'
        },
        {
          id: 2,
          name: 'Covid Monitor',
          description: 'Aplicación para visualizar el estado actual de la pandemia mundial, contruída con Vue.',
          url: 'https://covid-monitor.netlify.app',
          tags: ['vue', 'frontend', 'javascript'],
          alt: 'Link a proyecto Covid Monitor'
        },
        {
          id: 3,
          name: 'Michiwoo web',
          description: 'Sitio web y blog personal, realizado con Nuxt.',
          url: 'https://blog-michiwoo.netlify.app',
          tags: ['nuxt', 'frontend', 'javascript', 'tailwind'],
          alt: 'Link a proyecto Michiwoo web'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
