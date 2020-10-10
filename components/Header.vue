<template lang="pug">
  header.py-6.px-5.w-full.mx-auto
    nav
      div(class='flex flex-col sm:flex-row items-center')
        ul.text-base.flex.justify-center.items-center
          li
            NuxtLink(class='flex items-center text-light-accent dark:text-dark-accent font-bold text-lg mr-6 nuxt-link-exact-active nuxt-link-active' to='/')
              div(class='responsive-image-container overflow-hidden inline-block w-10 h-10 mr-2 rounded-full border-2 border-light-accent dark:border-dark-accent')
                img(class='object-cover responsive-image-placeholder pt-2' src='icon.png' alt='Imagen Logo de Michiwoo')
              span
                | Michiwoo
          li(class='sm:hidden')
            button(class='text-gray-800 transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'light'")
              font-awesome-icon(:icon="['fas', 'moon']")
            button(class='text-orange-400 transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'dark'")
              font-awesome-icon(:icon="['fas', 'sun']")
        div(class='flex-1 hidden sm:block')
        ul(class='top-navigation hidden items-center flex-wrap space-x-4 sm:space-x-6 mt-6 sm:mt-0 hidden sm:flex')
          li
            button(class='text-gray-800 transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'light'")
              font-awesome-icon(:icon="['fas', 'moon']")
            button(class='text-orange-400 transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'dark'")
              font-awesome-icon(:icon="['fas', 'sun']")
          li
            NuxtLink(class='blog border-b-2 font-bold border-transparent border-b-transparent text-light-secondary hover:border-light-secondary dark:text-dark-primary dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out' to='/blog')
              | Blog
          li
            NuxtLink(class='blog border-b-2 font-bold border-transparent border-b-transparent text-light-secondary hover:border-light-secondary dark:text-dark-primary dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out' to='/acerca')
              | Acerca
          li
            NuxtLink(class='blog border-b-2 font-bold border-transparent border-b-transparent text-light-secondary hover:border-light-secondary dark:text-dark-primary dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out' to='/uso')
              | Uso
          div(class='flex-1 block sm:hidden')
          li
            NuxtLink(class='bg-transparent text-light-accent dark:text-dark-accent font-semibold py-2 px-4 border-2 border-light-accent dark:border-dark-accent transition transition-all duration-300 rounded-lg hover:border-transparent hover:bg-light-accent dark-hover:bg-dark-accent hover:text-light-onAccent dark-hover:text-dark-onAccent get-in-touch text-base sm:text-base' to='contacto')
              | Contáctame
      ul(class='bottom-navigation fixed bottom-0 left-0 z-20 bg-light-elevatedSurface dark:bg-dark-elevatedSurface w-full flex items-center justify-evenly sm:hidden h-20')
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold')
          NuxtLink(class='nuxt-link-active flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/')
            div
              | Home
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold')
          NuxtLink(class='nuxt-link-active flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/blog')
            div
              | Blog
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold')
          NuxtLink(class='nuxt-link-active flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/acerca')
            div
              | Acerca
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold')
          NuxtLink(class='nuxt-link-active flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/uso')
            div
              | Uso
        li(class='nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold')
          NuxtLink(class='nuxt-link-active flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out' to='/contacto')
            div
              | Contacto
</template>

<script>
export default {
  name: 'Header',
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

<style scoped></style>
