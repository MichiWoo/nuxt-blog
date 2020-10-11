<template lang="pug">
  footer(class='relative w-full text-center p-5 mt-12 hidden sm:block')
    div(class='w-full flex flex-col justify-center')
      div
        Code(class='text-light-primary dark:text-dark-primary')
        span(class='text-light-primary dark:text-dark-accent')
          | &nbspcon&nbsp
        span
          span.sr-only
            | love
          span
            Hearth(class='animate-ping heart-background text-light-danger dark:text-dark-danger z-10 svg-inline--fa fa-heart fa-w-16')
          span
            Hearth(class='text-light-secondary dark:text-dark-secondary svg-inline--fa fa-heart fa-w-16')
        span(class='text-light-primary dark:text-dark-accent')
          | &nbsppor Michiwoo © 2020
      div(class='flex space-x-2 justify-center text-xl mt-2')
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Twitter')
          Twitter(class='text-light-primary dark:text-dark-accent')
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Github')
          Github(class='text-light-primary dark:text-dark-accent')
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Gmail')
          Envelope(class='text-light-primary dark:text-dark-accent')
</template>

<script>
export default {
  name: 'Footer',
  components: {
    Code: () => import('../components/icons/Code'),
    Hearth: () => import('../components/icons/Hearth'),
    Github: () => import('../components/icons/Github'),
    Twitter: () => import('../components/icons/Twitter'),
    Envelope: () => import('../components/icons/Envelope')
  }
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
