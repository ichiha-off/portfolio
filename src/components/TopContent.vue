<template>
  <div class="top">
    <picture>
      <source media="(min-width: 768px)" srcset="@/assets/image-pc.png">
      <img src="@/assets/image-phone.png" alt="トップイメージ画像です。" class="top__image">
    </picture>
    <div class="top__catch-copy">
      <span class="top__catch-copy--gradient">Become</span>
      <span class="top__catch-copy--gradient">front-end</span>
      <span class="top__catch-copy--gradient">developer!</span>
    </div>
    <div class="top__scroll">
      scroll
      <span class="top__scroll--bar">
        <span class="top__scroll--inner-bar"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopContent'
}
</script>

<style lang="scss" scoped>
  .slide-text {
    animation: slide-text 0.6s ease-in-out;
    animation-fill-mode: both;
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }

  .top {
    position: relative;
    height: max(calc(100vh - 80px), calc(812px - 80px));
    &__image {
      width: 100%;
      animation: fuwafuwa 3s ease-in-out infinite;
    }
    &__catch-copy {
      position: absolute;
      left: 24px;
      bottom: 80px;
      display: flex;
      flex-direction: column;
      &--gradient {
        font-family: 'Oswald', sans-serif;
        font-size: clamp(64px, 22vw, 80px);
        letter-spacing: -0.04em;
        line-height: 1.2em;
        display: inline-block;
        background: $GradationColor;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        opacity: 0;
      } 
    }
    &__scroll {
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      letter-spacing: 0.08em;
      color: #fff;
      transform: rotate(90deg);
      transform-origin: center right;
      position: absolute;
      right: 24px;
      bottom: 0;
      &--bar {
        width: 64px;
        height: 1px;
        display: block;
        position: relative;
        overflow: hidden;
      }
      &--inner-bar {
        position: absolute;
        top: 0;
        right: -120px;
        width: 120px;
        height: 1px;
        -webkit-animation: scroll-bar 2.4s ease-in-out infinite;
        animation: scroll-bar 2.4s ease-in-out infinite;
        background-color: #fff;
      }
    }
  }

  .top {
    @include responsive(md) {
      &__catch-copy {
        left: clamp(40px, 5vw ,110px);
        &--gradient {
          font-size: clamp(80px, 20vw, 128px);
        } 
      }
      &__scroll {
        font-size: clamp(16px, 2vw, 24px);
        right: 40px;
        bottom: -10px;
        &--bar {
          width: 120px;
        }
        &--inner-bar {
          position: absolute;
          top: 0;
          right: -240px;
          width: 240px;
          height: 1px;
          -webkit-animation: scroll-bar 2.4s ease-in-out infinite;
          animation: scroll-bar 2.4s ease-in-out infinite;
          background-color: #fff;
        }
      }
    }
    @include responsive(lg) {
      height: max(calc(100vh - 120px), calc(812px - 120px));
      &__catch-copy {
        bottom: 120px;
      }
      &__image {
        width: min(60%, 1080px);
        position: absolute;
        right: clamp(40px, 5vw ,110px);
        bottom: 120px;
      }
    }
    @include responsive(xl) {
      height: max(calc(100vh - 120px), calc(812px - 120px));
      &__catch-copy {
        bottom: 80px;
        &--gradient {
          font-size: clamp(160px, 12vw, 240px);
        }
      }
      &__image {
        width: clamp(60%, 60vw, 1080px);
        bottom: 80px;
      }
    }
  }

  @keyframes fuwafuwa {
    0%,
    100% { 
      transform: translateY(-6px) 
    }
    50% { 
      transform: translateY(6px)
    }
  }

  @keyframes scroll-bar {
    0% {
      transform: translate3d(-480px,0,0);
    }

    100% {
      transform: translateZ(0);
    }
  }

  @keyframes slide-text {
    0% {
      transform: translateX(-400px);
      opacity: 0;
    }
    80% {
      transform: translateX(40px);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>