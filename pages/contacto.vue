<template lang="pug">
  div(class='contacto max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full mx-auto flex-1 mb-2 sm:mb-0')
    h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-8')
      | Salúdame 😉
    div(class='flex flex-col sm:flex-row justify-center space-y-12 space-x-0 sm:space-x-12 sm:space-y-0 items-start')
      Saludos(class='w-full md:w-1/2 xl:w-1/3 h-auto')
      div(class='w-full md:w-1/2 xl:w-2/3 h-auto')
        p(class='text-base mb-8 mt-4 text-light-secondary dark:text-dark-secondary text-justify')
          | Si te haz interesado en realizar algún proyecto, página o aplicación web, o si quieres que hablemos de algunos de mis contenidos, con gusto me puedes conctactar a través de mis redes sociales.
        p(class='text-base mb-8 mt-4 text-light-secondary dark:text-dark-secondary text-justify')
          | Me puedes encontrar&nbsp
          strong preferentemente en&nbsp
          a(class='text-light-danger dark:text-dark-accent font-bold hover:text-light-primary dark-hover:text-dark-primary transition duration-300 ease-in-out' href='https://twitter.com/_michiwoo' target='_blank' rel='noreferer noopener')
            | Twitter&nbsp
            font-awesome-icon(:icon="['fab', 'twitter']")
          | &nbspó&nbsp
          a(class='text-light-danger dark:text-dark-accent font-bold hover:text-light-primary dark-hover:text-dark-primary transition duration-300 ease-in-out' href='mailto:michiwoo.web@gmail.com')
            | Gmail&nbsp
            font-awesome-icon(:icon="['fas', 'envelope']")
        p(class='text-base mb-8 mt-4 text-light-secondary dark:text-dark-secondary mt-8 text-center')
          | Si quieres conocerme un poco más, pueder ver mis redes sociales 👇
        div(class='mt-4 flex flex-wrap justify-evenly space-x-2 text-4xl')
          a(class='relative flex flex-col items-center text-light-secondary dark:text-dark-accent' href='https://twitter.com/_michiwoo' rel='noopener noreferer' target='_blank')
            font-awesome-icon(:icon="['fab', 'twitter']")
          a(class='relative flex flex-col items-center text-light-secondary dark:text-dark-accent' href='https://github.com/MichiWoo' rel='noopener noreferer' target='_blank')
            font-awesome-icon(:icon="['fab', 'github']")
          a(class='relative flex flex-col items-center text-light-secondary dark:text-dark-accent' href='https://www.instagram.com/_michiwoo/' rel='noopener noreferer' target='_blank')
            font-awesome-icon(:icon="['fab', 'instagram']")
</template>

<script>
export default {
  name: 'Contacto',
  components: {
    Saludos: () => import('../components/images/Saludos')
  }
}
</script>

<style scoped></style>
