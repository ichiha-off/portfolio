<template>
  <header class="header">
    <div class="header__inner">
      <a class="header__link" href="/">
        <img class="header__logo" src="@/assets/logo.svg" alt="Yuki Kanayama's LOGO">
        <div class="header__logo-text">
          YUKI KANAYAMA's Portfolio
        </div>
      </a>
      <nav class="header__nav">
        <ul class="header__nav--list">
          <li class="header__nav--item">
            <a @click="toScroll('contact')" class="header__nav--link">
              CONTACT
            </a>
          </li>
          <li class="header__nav--item">
            <a @click="toScroll('profile')" class="header__nav--link">
              PROFILE
            </a>
          </li>
          <li class="header__nav--item">
            <a @click="toScroll('products')" class="header__nav--link">
              PRODUCTS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    toScroll(el) {
      const id = document.getElementById(el);
      id.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
  },
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    z-index: 100;
    background: linear-gradient(180deg ,#1c1c1c,rgba(22,22,22,0));
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    &__inner {
      position: relative;
      @include responsiveSize('padding-left', 375px, 1280px, 20px, 40px);
      @include responsiveSize('padding-right', 375px, 1280px, 20px, 40px);
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__link {
      display: flex;
      align-items: center;
    }
    &__logo {
      @include responsiveSize('height', 320px, 1280px, 40px, 60px);
      @include responsiveSize('width', 320px, 1280px, 40px, 60px);
    }
    &__logo-text {
      display: none;
      margin-left: 1rem;
      font-size: clamp(24px, 2vw, 32px);
      }
    &__nav {
      &--list {
        display: flex;
        @include responsiveSize('font-size', 320px, 1920px, 16px, 24px);
      }
      &--item {
        &:nth-child(n + 2) {
          margin-left: 1rem;
        }
      }

      &--link {
        cursor: pointer;
        @include responsiveSize(
          "font-size",
          320px,
          768px,
          12px,
          16px
        );
        padding: 0 8px;
        box-shadow: inset 0 0 0 0 $TextColorW;
        transition: all 0.4s ease-in-out 0s;
        &:hover{
          box-shadow: inset 300px 0 0 0 $TextColorW;
          color: $BackColorB;
        }
      }
    }
  }

  .mobile-menu {
  &__area {
    position: absolute;
    top: 79px;
    left: 0;
    background-color: $TextColorW;
    height: 0;
    width: 100vw;
    transition: opacity 0.4s ease-out,
                height 0.4s ease-out,
                visibility 0.4s ease-out;
    &.menu-open {
      visibility: visible;
      height: 48px;
      opacity: 1;
    }
  }
  &__nav {
    height: 100%;
    padding: 0 1.5rem;
  }
  &__list {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__item {
    font-size: clamp(12px, 3vw, 16px);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    letter-spacing: 0.08em;
    &:first-child {
      margin-right: 1rem;
    }
  }
}

// レスポンシブ
  .header {
    @include responsive(lg) {
      position: inherit;
      height: 120px;
      &__logo-text {
        display: block;
      }

      &__nav {
        position: fixed;
        top: 40px;
        right: 60px;
        z-index: 1000;
        transform: rotate(-90deg);
        transform-origin: bottom right;
        z-index: 100;
        &--list {
          display: flex;
          @include responsiveSize('font-size', 320px, 1920px, 16px, 24px);
        }
        &--item {
          &:nth-child(n + 2) {
            margin-left: 1.5rem;
          }
        }
      }
    }
  }
</style>