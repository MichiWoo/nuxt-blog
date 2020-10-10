<template lang="pug">
  footer(class='relative w-full bg-light-elevatedSurface dark:bg-dark-elevatedSurface text-light-secondary dark:text-dark-secondary text-center p-5 mt-12 hidden sm:block')
    div(class='w-full flex flex-col justify-center')
      div
        font-awesome-icon(:icon="['fas', 'code']")
        | &nbspcon&nbsp
        span
          span.sr-only
            | love
          span
            font-awesome-icon(:icon="['fas', 'heart']" class='animate-ping heart-background text-purple-300 z-10 svg-inline--fa fa-heart fa-w-16')
          span
            font-awesome-icon(:icon="['fas', 'heart']" class='text-purple-600 svg-inline--fa fa-heart fa-w-16')
        | &nbsppor Michiwoo © 2020
      div(class='flex space-x-2 justify-center text-xl mt-2')
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Twitter')
          font-awesome-icon(:icon="['fab', 'twitter']")
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Github')
          font-awesome-icon(:icon="['fab', 'github']")
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Gmail')
          font-awesome-icon(:icon="['fas', 'envelope']")
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.heart-background {
  min-width: 1em;
  min-height: 1em;
  position: absolute;
  margin-top: 4px;
  opacity: .2;
}
</style>
