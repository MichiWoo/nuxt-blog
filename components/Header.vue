<template lang="pug">
  header.py-6.px-5.w-full.mx-auto
    nav
      div(class='flex flex-col sm:flex-row items-center')
        ul.text-base.flex.justify-center.items-center
          li
            NuxtLink(class='flex items-center text-light-primary dark:text-dark-accent font-bold text-lg mr-6 nuxt-link-exact-active nuxt-link-active' to='/')
              div(class='responsive-image-container overflow-hidden inline-block w-10 h-10 mr-2 rounded-full border-2 border-light-primary dark:border-dark-primary')
                Logo(class='object-cover responsive-image-placeholder pt-2' alt='Imagen Logo de Michiwoo')
              span
                | Michiwoo
          li(class='sm:hidden')
            button(class='text-light-primary transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'light'" aria-label="Modo Oscuro")
              font-awesome-icon(:icon="['fas', 'moon']")
            button(class='text-dark-primary transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'dark'" aria-label="Modo Light")
              font-awesome-icon(:icon="['fas', 'sun']")
        div(class='flex-1 hidden sm:block')
        ul(class='top-navigation hidden items-center flex-wrap space-x-4 sm:space-x-6 mt-6 sm:mt-0 hidden sm:flex')
          li
            button(class='text-light-accent transition-colors duration-300 ease-linear focus:outline-none hover:text-light-primary' @click="toggle" v-show="color === 'light'" aria-label="Modo Oscuro")
              font-awesome-icon(:icon="['fas', 'moon']")
            button(class='text-dark-accent transition-colors duration-300 ease-linear focus:outline-none dark-hover:text-dark-primary' @click="toggle" v-show="color === 'dark'" aria-label="Modo Light")
              font-awesome-icon(:icon="['fas', 'sun']")
          li
            NuxtLink(class='border-b-2 font-bold border-transparent border-b-transparent text-light-danger hover:text-light-primary hover:border-light-primary dark:text-dark-accent dark-hover:border-dark-secondary dark-hover:text-dark-primary text-base transition-all transition-duration-300 transition duration-500 ease-in-out' to='/blog')
              | Blog
          li
            NuxtLink(class='border-b-2 font-bold border-transparent border-b-transparent text-light-danger hover:text-light-primary hover:border-light-primary dark:text-dark-accent dark-hover:border-dark-secondary dark-hover:text-dark-primary text-base transition-all transition-duration-300 transition duration-500 ease-in-out' to='/acerca')
              | Acerca
          div(class='flex-1 block sm:hidden')
          li
            NuxtLink(class='bg-transparent text-light-danger dark:text-dark-danger font-semibold py-2 px-4 border-2 border-light-danger dark:border-dark-danger transition transition-all duration-200 rounded-lg hover:border-transparent hover:bg-light-danger dark-hover:bg-dark-danger hover:text-light-accent dark-hover:text-dark-primary get-in-touch text-base sm:text-base' to='contacto')
              | Contáctame
      ul(class='bottom-navigation fixed bottom-0 left-0 z-20 bg-light dark:bg-dark w-full flex items-center justify-evenly sm:hidden h-20')
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-accent font-bold')
          NuxtLink(class='flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/' exact)
            div
              font-awesome-icon(:icon="['fas', 'home']")
            div
              | Home
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-danger font-bold')
          NuxtLink(class='flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/blog')
            div
              font-awesome-icon(:icon="['fas', 'feather']")
            div
              | Blog
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-accent font-bold')
          NuxtLink(class='flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/acerca' exact)
            div
              font-awesome-icon(:icon="['fas', 'question-circle']")
            div
              | Acerca
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-accent font-bold')
          NuxtLink(class='flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/contacto' exact)
            div
              font-awesome-icon(:icon="['fas', 'paper-plane']")
            div
              | Contacto
</template>

<script>
export default {
  name: 'Header',
  components: {
    Logo: () => import('../components/Logo')
  },
  data () {
    return {
      color: this.$colorMode.value
    }
  },
  methods: {
    toggle () {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
        this.color = 'dark'
      } else {
        this.$colorMode.preference = 'light'
        this.color = 'light'
      }
    }
  }
}
</script>

<style scoped>
.border-transparent {
  border-color: transparent;
}
</style>
