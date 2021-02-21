<template>
  <TheLoading/>
  <TheHeader/>
  <main class="main">
    <div id="router-view" v-bind:class="this.class">
      <router-view/>
    </div>
  </main>
  <TheFooter/>
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
  data() {
    return {
      changePage: true,
      class: '_opne'
    }
  },
  watch: {
    'changePage': function () {
      this.changePage ? this.changeStart() : this.changeEnd();
    }
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

    changeStart() {
      this.class = '_open';
    },
    changeEnd() {
      this.class = '_close';
    }
  },
  mounted() {
    this.topTextSlide();
    this.$router.beforeEach((to, from, next) => {
      this.changePage = false;
      setTimeout(() => {
        next();
      }, 400);
    });
    this.$router.afterEach(() => {
      this.changePage = true;
    });
  },
}
</script>

<style lang="scss">

body {
  background-color: $BackColorB;
  font-family: 'Noto-sans JP', sans-serif;
  color: $TextColorW;
}

a {
  text-decoration: none;
  color: $TextColorW;
}

button {
  border: none;
  outline: none;
}

.main {
  padding-top: 80px;
  overflow: hidden;
  transition: transform 0.4s ease-out;
  &.menu-open {
    transform: translateY(48px);
  }
}

._open {
  animation: page-change-start 0.4s ease-out both;
}

._close {
  animation: page-change-end 0.4s ease-in both;
}

@keyframes page-change-start {
  0% {
    opacity: 0;
    transform: translateX(300px);
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
    transform: translateX(-300px);
  }
}

@include responsive(lg) {
  .main {
    padding-top: 120px;
  }
}

</style>
