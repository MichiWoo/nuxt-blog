<template lang="pug">
  div(class='acerca max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full mx-auto flex-1 mb-2 sm:mb-0')
    div(class='flex flex-col md:flex-row')
      div(class='responsive-image-container overflow-hidden inline-block mt-8 w-48 h-48 mr-0 mb-12 sm:mb-16 rounded-full shadow-sm self-center md:mr-20 md:mb-8')
        img(class='object-cover' src="/avatarMichiwoo.jpg")
      div(class='flex-1')
        h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-2 sm:mt-8')
          | Hola mundo ... !
        p(class='text-base text-justify mb-8 mt-4 text-light-secondary dark:text-dark-secondary')
          | Soy Michel, mejor conocido como
          b &nbspMichiwoo.
          | &nbspSoy desarrollador frontend, empiezo a formarme como backend, amante del café ☕️, me encantan las series 📺 y adoro a mis 🐶🐶🐶.
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
        div(class='flex flex-wrap justify-start items-center')
          span(v-for="(tag, index) in p.tags" class='text-xs font-medium capitalize bg-light-accent dark:bg-dark-accent py-1 px-1 rounded text-light-primary dark:text-dark-primary align-middle mx-1 my-1')
            | {{ tag }}&nbsp
        a(class='text-xs text-light-danger dark:text-dark-danger' :href="p.url" target='_blank' rel='noopener noreferer' :alt='p.alt')
          | {{ p.url }}&nbsp
          font-awesome-icon(:icon="['fas', 'link']")
    h1(class='text-2xl font-bold text-light-primary dark:text-dark-primary mb-2 mt-8')
      | Habilidades&nbsp
      font-awesome-icon(:icon="['fas', 'tools']")
    section(class='flex justity-center justify-items-center py-6')
      div(class='items-center grid grid-flow-row grid-cols-3 gap-6 sm:grid-cols-4 w-full')
        button(class="flex items-center justify-center text-4xl text-light-accent dark:text-dark-accent hover:text-light-primary dark-hover:text-dark-primary" v-for='s in skills' :key='s.id' v-tooltip.bottom.start='s.name')
          font-awesome-icon(:icon="[s.icon.type, s.icon.name]")

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
          url: 'https://covid19-monitor.netlify.app',
          tags: ['vue', 'frontend', 'javascript'],
          alt: 'Link a proyecto Covid Monitor'
        },
        {
          id: 3,
          name: 'Michiwoo web',
          description: 'Sitio web y blog personal, realizado con Nuxt.',
          url: 'https://michiwoo.netlify.app',
          tags: ['nuxt', 'frontend', 'javascript', 'tailwind'],
          alt: 'Link a proyecto Michiwoo web'
        }
      ],
      skills: [
        {
          id: 1,
          name: 'HTML',
          icon: {
            type: 'fab',
            name: 'html5'
          }
        },
        {
          id: 2,
          name: 'JAVASCRIPT',
          icon: {
            type: 'fab',
            name: 'js-square'
          }
        },
        {
          id: 3,
          name: 'CSS',
          icon: {
            type: 'fab',
            name: 'css3'
          }
        },
        {
          id: 4,
          name: 'VUE',
          icon: {
            type: 'fab',
            name: 'vuejs'
          }
        },
        {
          id: 5,
          name: 'GIT',
          icon: {
            type: 'fab',
            name: 'git-alt'
          }
        },
        {
          id: 6,
          name: 'PHP',
          icon: {
            type: 'fab',
            name: 'php'
          }
        },
        {
          id: 7,
          name: 'LINUX',
          icon: {
            type: 'fab',
            name: 'html5'
          }
        },
        {
          id: 8,
          name: 'GITHUB',
          icon: {
            type: 'fab',
            name: 'github'
          }
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: #7009f6;
    color: #d2c4ff;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #7009f6;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #d2c4ff;

    .popover-inner {
      background: $color;
      color: #7009f6;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}

.dark {
  .tooltip {
    display: block !important;
    z-index: 10000;

    .tooltip-inner {
      background: #a1fff3;
      color: #3adbb9;
      border-radius: 16px;
      padding: 5px 10px 4px;
    }

    .tooltip-arrow {
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      margin: 5px;
      border-color: #a1fff3;
      z-index: 1;
    }

    &[x-placement^="top"] {
      margin-bottom: 5px;

      .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="bottom"] {
      margin-top: 5px;

      .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="right"] {
      margin-left: 5px;

      .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }

    &[x-placement^="left"] {
      margin-right: 5px;

      .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }

    &.popover {
      $color: #3adbb9;

      .popover-inner {
        background: $color;
        color: #d0fff9;
        padding: 24px;
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(#d0fff9, .1);
      }

      .popover-arrow {
        border-color: $color;
      }
    }

    &[aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      transition: opacity .15s, visibility .15s;
    }

    &[aria-hidden='false'] {
      visibility: visible;
      opacity: 1;
      transition: opacity .15s;
    }
  }
}
</style>
