<template lang="pug">
  div.flex.flex-col.h-screen
    Header
    Nuxt
    Footer
</template>

<script>
export default {
  components: {
    Header: () => import('../components/Header'),
    Footer: () => import('../components/Footer')
  }
}
</script>

<style></style>
