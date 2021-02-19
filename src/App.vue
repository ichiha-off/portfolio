<template>
  <TheLoading/>
  <TheHeader/>
  <main class="main">
    <TopContent/>
    <ProductsContent/>
    <ProfileContent/>
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
import TopContent from "@/components/TopContent.vue";
import ProductsContent from '@/components/ProductsContent.vue';
import ProfileContent from '@/components/ProfileContent.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheLoading,
    TheHeader,
    TopContent,
    ProductsContent,
    ProfileContent,
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
        }, 3000);
      })
    },
    scrollProductsHeadline() {
      gsap.fromTo(".products__headline", {
        autoAlpha: 0,
        x: 300,
      }, {
        autoAlpha: 1,
        x: 0,
        ease: "power2.out",
        duration: 0.4,
        scrollTrigger: {
          trigger: '.products__headline',
          start: "top 50%", // ウィンドウのどの位置を発火の基準点にするか
          end: "bottom 25%", // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種類
        },
      })
    },
    scrollProfileHeadline() {
      gsap.fromTo(".profile__headline", {
        autoAlpha: 0,
        x: 300,
      }, {
        autoAlpha: 1,
        x: 0,
        ease: "power2.out",
        duration: 0.4,
        scrollTrigger: {
          trigger: '.profile__headline',
          start: "top 50%", // ウィンドウのどの位置を発火の基準点にするか
          end: "bottom 25%", // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種類
        },
      })
    },
    scrollProductsItem() {
      const items = document.querySelectorAll('.products__item');
      for(let item of items) {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out", duration: 0.4 },
          scrollTrigger: {
            trigger: item,
            start: "top 60%", // ウィンドウのどの位置を発火の基準点にするか
            end: "bottom 25%", // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種類
          }
        });

        tl.fromTo(item.childNodes[0], {
          x: 500,
          autoAlpha: 0,
        }, {
          x: 0,
          autoAlpha: 1,
        })
        .fromTo(item.childNodes[1], {
          transformOrigin: 'top',
          scaleY: 0,
          autoAlpha: 0,
        }, {
          scaleY: 1,
          autoAlpha: 1,
        },
        '+=0.1'
        )
        .fromTo(item.childNodes[2], {
          transformOrigin: 'top',
          scaleY: 0,
          autoAlpha: 0,
        }, {
          scaleY: 1,
          autoAlpha: 1,
        },
        '+=0.2'
        );
      }
    },
    scrollProfileContent() {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.4 },
        scrollTrigger: {
          trigger: '.profile__name',
          start: "top 50%", // ウィンドウのどの位置を発火の基準点にするか
          end: "bottom 25%", // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種類
        }
      })
      
      tl.fromTo('.profile__name',{
        transformOrigin: 'top',
        scaleY: 0,
        autoAlpha: 0
      },{
        scaleY: 1,
        autoAlpha: 1,
      })
      .fromTo('.profile__sns-icon-img', {
        transformOrigin: 'left',
        scaleX: 0,
        autoAlpha: 0,
        width: 0,
      }, {
        scaleX: 1,
        autoAlpha: 1,
        width: '100%',
        stagger: {
          from: 'start',
          amount: 0.4
        }
      }, '+=0.2')
      .fromTo('.profile__text',{
        transformOrigin: 'top',
        scaleY: 0,
        autoAlpha: 0
      },{
        scaleY: 1,
        autoAlpha: 1,
      },'+=0.2')
      .fromTo('.profile__text--en',{
        transformOrigin: 'top',
        scaleY: 0,
        autoAlpha: 0
      },{
        scaleY: 1,
        autoAlpha: 1,
      },'+=0.1')
    }
  },
  mounted() {
    this.topTextSlide();
    this.scrollProductsHeadline();
    this.scrollProfileHeadline();
    this.scrollProductsItem();
    this.scrollProfileContent();
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

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

</style>
