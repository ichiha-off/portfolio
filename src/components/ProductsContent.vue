<template>
  <section class="products" id="products">
    <div class="products__inner">
      <h1 class="products__headline">
        <span class="products__headline--front">PRODUCTS</span>
        <span class="products__headline--back">PRODUCTS</span>
      </h1>
      <div class="products__slider">
        <swiper
          :thumbs="{ swiper: thumbsSwiper }"
          :slides-per-view="1"
          :speed=600
          :loop='true'
          :navigation="{
          nextEl: '.products__slider--next',
          prevEl: '.products__slider--prev' }"
          :pagination="{
            type: 'custom',
            el: '.products__slider--pagination',
            renderCustom: function (swiper, current, total) {
              return '0' + current;
            }
          }"
        >
          <swiper-slide>
            <router-link to="/product/1">
              <img class="products__img" src="@/assets/product-img01.png" alt="作品のイメージ画像">
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/product/2">
              <img class="products__img" src="@/assets/product-img02.png" alt="作品のイメージ画像">
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/product/3">
              <img class="products__img" src="@/assets/product-img03.png" alt="作品のイメージ画像">
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/product/4">
              <img class="products__img" src="@/assets/product-img04.png" alt="作品のイメージ画像">
            </router-link>
          </swiper-slide>
        </swiper>
        <div class="products__slider--right">
          <div class="products__slider--right-inner">
            <div class="products__slider--right-top">
              <div class="products__slider--pagination">
                <span class="swiper-pagination-current"></span>
              </div>
              <div class="products__slider--title">
                <swiper
                  @swiper="setThumbsSwiper"
                  :speed=600
                  :loop='true'
                  :allowTouchMove='false'
                  watch-slides-visibility
                  watch-slides-progress>
                  <swiper-slide>
                    <h3>Daddy's break</h3>
                    <p>&copy; 2020-Ruby on Rails / Sass / Adobe XD /AWS </p>
                  </swiper-slide>
                  <swiper-slide>
                    <h3>Yuki's Portfolio</h3>
                    <p>&copy; 2020-Vue CLI / Sass / Adobe XD / Firebase </p>
                  </swiper-slide>
                  <swiper-slide>
                    <h3>わかやま幼稚園</h3>
                    <p>&copy; 2021-Vue CLI / Sass / Figma / Firebase </p>
                  </swiper-slide>
                  <swiper-slide>
                    <h3>Yu-k1 blog</h3>
                    <p>&copy; 2021-Nuxt.js / Sass / Figma / Netlify / microCMS</p>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="products__slider--navigation">
              <div>
                <img class="products__slider--prev" src="@/assets/arrow-left.svg" alt="スライダーの前のページへ移行するボタン">
              </div>
              <div>
                <img class="products__slider--next" src="@/assets/arrow-right.svg" alt="スライダーの次のページへ移行するボタン">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SwiperCore, { Navigation, Pagination, EffectFade, Thumbs } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/effect-fade/effect-fade.scss';

  SwiperCore.use([Navigation, Pagination, EffectFade, Thumbs]);

export default {
  name: 'ProductsContent',
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style lang="scss" scoped>
  .products {
    @include responsiveSize('margin-top', 320px, 1280px, 120px, 240px);
    overflow: hidden;
    @include responsiveSize('padding-left', 375px, 1280px, 20px, 40px);
    @include responsiveSize('padding-right', 375px, 1280px, 20px, 40px);
    &__inner {
      width: 100%;
    }

    &__headline {
      position: relative;
      font-weight: 700;
      letter-spacing: -0.04em;
      &--front {
        @include headline-front;
      }
      &--back {
        @include headline-back;
        top: 750%;
      }
    }

    &__list {
      margin-top: 4rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__item {
      margin-right: clamp(16px, 5vw, 110px);
      margin-bottom: 7.5rem;
      flex: 0 1 327px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    &__link {
      display: block;
      overflow: hidden;
      position: relative;
      transition: all 0.4s;
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #fff;
        transform: translateY(-101%);
        transition: all 0.4s;
        opacity: 0.8;
      }

      &::after {
        content: 'More View';
        opacity: 0;
        font-family: 'Roboto', sans-serif;
        color: $BackColorB;
        display: block;
        position: absolute;
        top: 60px;
        width: 100%;
        text-align: center;
        font-size: 24px;
        transition: all 0.5s;
      }

      &:hover {
        &::before {
          transform: translateY(0);
        }
        &::after {
          opacity: 1;
        }
      }
    }

    &__img {
      @include responsiveSize('width', 320px, 1920px, 280px, 1000px);
      height: auto;
    }

    &__title {
      position: absolute;
      right: 0;
      font-size: clamp(16px, 5vw, 24px);
      font-weight: bold;
    }

    &__comment {
      margin-top: 0.75rem;
      font-size: clamp(12px, 3vw, 16px);
      line-height: 1.6;
      &--en {
        font-family: 'Roboto', sans-serif;
        margin-top: 0.75rem;
        letter-spacing: 0.08em;
      }

    }
  }

// スライダーのスタイル
.products {
  &__slider {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    & > .swiper-container {
      @include responsiveSize('width', 320px, 1920px, 280px, 1000px);
      margin: inherit;
    }

    &--navigation {
      display: flex;
      justify-content: center;
      @include responsiveSize('margin-top', 1080px, 1920px, 40px, 80px);
    }

    &--pagination {
      position: relative;
      @include responsiveSize('font-size', 1080px, 1920px, 64px, 160px);
      font-weight: 700;
      bottom: inherit;
    }

    &--right {
      display: flex;
      flex-direction: column;
      &-top {
        display: flex;
        align-items: center;
      }
    }

    &--title {
      @include responsiveSize('font-size', 1080px, 1920px, 24px, 64px);
      font-weight: 700;
      margin-left: 8px;
      & p {
        @include responsiveSize('font-size', 320px, 1920px, 10px, 24px);
        @include responsiveSize('margin-top', 1080px, 1920px, 8px, 40px);
        font-weight: 400;
      }
      & > .swiper-container {
        @include responsiveSize('width', 1080px, 1920px, 249px, 620px);
        margin-right: auto;
        margin-left: inherit;
      }
    }

    &--prev, &--next {
      cursor: pointer;
      @include responsiveSize('width', 1080px, 1920px, 60px, 120px);
      @include responsiveSize('height', 1080px, 1920px, 60px, 120px);
    }

    &--prev {
      @include responsiveSize('margin-right', 1080px, 1920px, 40px, 160px);
    }
  }
}


// レスポンシブ
  .products {
    padding-right: 0;
    @include responsive(md) {
      &__inner {
        @include responsiveSize('width', 1px, 1920px, 1px, 1660px);
        margin-left: auto;
      }

      &__slider {
        flex-direction: row;
        &--right {
          align-items: center;
          justify-content: center;
          &-inner {
            margin-left: 40px;
          }

          &-top {
            display: inherit;
          }
        }

        &--title {
          margin-top: 24px;
          margin-left: inherit;
          & > .swiper-container {
            margin-right: auto;
          }
        }

        &--navigation {
          display: flex;
          justify-content: inherit;
        }
      }
    }

    @include responsive(lg) {
      &__slider {
        &--title {
          & h3,
          p {
            padding-right: 82px;
          }
          & > .swiper-container {
            margin-left: auto;
          }
        }
      }
    }
  }
</style>