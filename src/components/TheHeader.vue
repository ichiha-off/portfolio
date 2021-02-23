<template>
  <header class="header">
    <div class="header__inner">
      <a class="header__link" href="/">
        <img class="header__logo" src="@/assets/logo.svg" alt="Yuki Kanayama's LOGO">
        <div class="header__logo-text">
          Yuki Kanayama's Portfolio
        </div>
      </a>
      <nav class="header__nav">
        <ul class="header__nav--list">
          <li class="header__nav--item">
            <a href="/#products" class="header__nav--link">
              My Products
            </a>
          </li>
          <li class="header__nav--item">
            <a href="/#profile" class="header__nav--link">
              My Profile
            </a>
          </li>
        </ul>
      </nav>
      <button class="header__mobile-menu" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="mobile-menu__area">
        <nav class="mobile-menu__nav">
          <ul class="mobile-menu__list">
            <li class="mobile-menu__item">
              <a href="#products" class="mobile-menu__link" @click="openMenu">
                My Products
              </a>
            </li>
            <li class="mobile-menu__item">
              <a href="#profile" class="mobile-menu__link" @click="openMenu">
                My Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    openMenu() {
      const main = document.querySelector('.main');
      const menu = document.querySelector('.mobile-menu__area');
      const btn = document.querySelector('.header__mobile-menu');
      btn.classList.toggle('menu-open');
      if (main.classList.contains('menu-open')) {
        setTimeout(() => {
          main.classList.toggle('menu-open');
        }, 250);
        menu.classList.toggle('menu-open');
      } else {
        setTimeout(() => {
          menu.classList.toggle('menu-open');
        }, 250);
        main.classList.toggle('menu-open');
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: $BackColorB;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    &__inner {
      padding: 0 1.5rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__link {
      display: flex;
      align-items: center;
    }
    &__logo-text {
      display: none;
      margin-left: 1rem;
      font-size: clamp(24px, 2vw, 32px);
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      }
    &__nav {
      display: none; 
      &--list {
        display: flex;
      }
      &--item {
        font-family: 'Roboto', sans-serif;
        &:first-child {
          margin-right: 2rem;
        }
      }
    }
    &__mobile-menu {
      background-color: unset;
      cursor: pointer;
      transition: opacity 0.3s, visibility 0.3s;
      > span {
        background-color: #fff;
        display: block;
        width: 16px;
        height: 1px;
        margin-top: 4px;
        margin-left: auto;
        transition: transform 0.4s;
        &:first-child {
          width: 24px;
          margin-top: 0px;
        }
      }
      &.menu-open {
        > span {
        &:nth-child(1) {
          transition-delay: 0;
          transform: translateX(-24px) scaleX(0);
        }
        &:nth-child(2) {
          transition-delay: 70ms;
          transform: translateY(5px) rotate(135deg);
        }
        &:nth-child(3) {
          transition-delay: 140ms;
          transform: rotate(-135deg);
        }
        }
      }
    }
  }

  .mobile-menu {
  &__area {
    position: absolute;
    top: 79px;
    left: 0;
    background-color: $BackColorB;
    height: 0;
    width: 100vw;
    visibility: hidden;
    opacity: 0;
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
      height: 120px;
      &__inner {
        padding: 0 2.5rem;
      }
      &__logo {
        width: 80px;
        height: 80px;
      }
      &__logo-text {
        display: block;
      }
      &__nav {
        display: block;
      }
      &__mobile-menu {
        display: none;
      }
    }
  }
</style>