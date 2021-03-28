<template>
<div class="container">
  <TheLoading/>
  <TheHeader/>
  <main class="main">
    <div id="router-view">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
  <TheFooter/>
</div>
</template>

<script>
import 'reset.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import TheLoading from '@/components/TheLoading.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheLoading,
    TheHeader,
    TheFooter,
  },
  methods: {
    loadingHide: async function() {
      const loading = document.getElementById('loading');
      setTimeout(() => {
        loading.classList.add('loaded');
      }, 2000);
    },

    topTextSlide: async function() {
      await this.loadingHide().then(function(){
        const texts = document.getElementsByClassName('top__catch-copy--gradient');
        setTimeout(() => {
          texts.forEach(function(text) {
            text.classList.add('slide-text');
          });
        }, 1000);
      })
    },

  },
  mounted() {
    this.topTextSlide();
  },
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  scroll-padding-top: 120px;
  @include responsive(lg) {
    scroll-padding-top: 40px;
  }
}

body {
  background-color: $BackColorB;
  font-family: 'Roboto Condensed', 'Sawarabi Gothic', sans-serif;
  color: $TextColorW;
  &.__open {
    overflow: hidden;
    & .container {
      overflow: hidden;
    }
  }
}

::selection {
  background-color: $TextColorW;
  color: $BackColorB;
}

a {
  text-decoration: none;
  color: $TextColorW;
}

button {
  border: none;
  outline: none;
  background-color: inherit;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.main {
  overflow: hidden;
  transition: transform 0.4s ease-out;
  padding-top: 80px;
  @include responsive(lg) {
    padding-top: 0px;
  }
}

.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(1, 0.8, 0.4, 1);
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

@keyframes page-change-start {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes page-change-end {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(100px);
  }
}

</style>
