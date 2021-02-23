<template>
  <TopContent/>
  <ProductsContent/>
  <ProfileContent/>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import TopContent from "@/components/TopContent.vue";
import ProductsContent from '@/components/ProductsContent.vue';
import ProfileContent from '@/components/ProfileContent.vue';

export default {
  name: 'TopView',
  components: {
    TopContent,
    ProductsContent,
    ProfileContent,
  },
  methods: {
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
          start: "top 60%", // ウィンドウのどの位置を発火の基準点にするか
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
          start: "top 60%", // ウィンドウのどの位置を発火の基準点にするか
          end: "bottom 25%", // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種類
        },
      })
    },
    scrollProductsItem() {
      const items = document.querySelectorAll('.products__item');
      for(let item of items) {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out", duration: 0.3 },
          scrollTrigger: {
            trigger: item,
            start: "top 60%", // ウィンドウのどの位置を発火の基準点にするか
            end: "bottom 25%", // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種類
          }
        });

        tl.fromTo(item.childNodes[0], {
          x: 200,
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
        '+=0.2'
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
    headerVisible() {
      const menu = document.querySelector('.header__mobile-menu');
      const nav = document.querySelector('.header__nav');
      menu.setAttribute(
        "style", "opacity: 1; visibility: visible;"
      );
      nav.setAttribute(
        "style", "opacity: 1; visibility: visible;"
      );
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.scrollProductsHeadline();
      this.scrollProfileHeadline();
      this.scrollProductsItem();
    })
    this.headerVisible();
  },
}
</script>

<style lang="scss" scoped>

</style>
