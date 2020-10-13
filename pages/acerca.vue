<template lang="pug">
  div(class='acerca max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full mx-auto flex-1 mb-24 sm:mb-0')
    div(class='flex flex-col md:flex-row')
      div(class='responsive-image-container overflow-hidden inline-block mt-8 w-48 h-48 mr-0 mb-12 sm:mb-16 rounded-full shadow-sm self-center md:mr-20 md:mb-8')
        img(class='object-cover' src="/avatarMichiwoo.jpg")
      div(class='flex-1')
        h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-2 sm:mt-8')
          | Hola mundo ... !
        p(class='text-xl mb-8 mt-4 text-light-secondary dark:text-dark-secondary')
          | Soy Michel, desarrollador frontend, empezando a formarme como backend, amante del café ☕️, me encantan las series 📺 y adoro a mis 🐶🐶🐶.
        p(class='text-xl mb-8 mt-4 text-light-secondary dark:text-dark-secondary')
          | Actualmente vivo en México 🇲🇽, mi meta es nunca parar de aprender 👨🏿‍💻
    h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-8')
      | Experiencia&nbsp
      font-awesome-icon(:icon="['fas', 'laptop-code']")
    div(class='flex flex-col space-y-6')
      div(class='flex items-center')
        span Algo
</template>

<script>
export default {
  name: 'Acerca'
}
</script>

<style scoped></style>
