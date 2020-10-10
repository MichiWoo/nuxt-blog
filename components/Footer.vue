<template lang="pug">
  footer(class='relative w-full bg-light-elevatedSurface dark:bg-dark-elevatedSurface text-light-secondary dark:text-dark-secondary text-center p-5 mt-12 hidden sm:block')
    div(class='w-full flex flex-col justify-center')
      div
        | code
        span
          span.sr-only
            | love
          span
            | icon
          span
            | icon
          | por Michiwoo © 2020
      div(class='flex space-x-2 justify-center text-xl mt-2')
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Twitter')
          | Twitter
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Github')
          | Github
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Gmail')
          | Gmail
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped></style>
