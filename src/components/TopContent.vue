<template>
  <div class="top">
    <div class="top__inner">
      <div class="top__catch-copy">
        <span class="top__catch-copy--gradient">BECOME</span>
        <span class="top__catch-copy--gradient">FRONT-END</span>
        <span class="top__catch-copy--gradient">DEVELOPER!</span>
      </div>
      <div class="top__text">
        <div class="top__text--left">
          <div class="top__text--agree">
            WELLCOME!
            <br>I AM YUKI KANAYAMA
          </div>
        </div>
        <div class="top__text--right">
          <div class="top__text--content">
            <p class="top__text--content-en">
              Nice to meet you. I'm glad you're here. Thank you very much. I hope you enjoy my work.
              </p>
            <p class="top__text--content-jp">
              はじめまして。良くここに来てくれました。ありがとうございます。頑張って制作したので楽しんでいったください。
            </p>
          </div>
        </div>
      </div>
      <div class="top__scroll">
        scroll
        <span class="top__scroll--bar">
          <span class="top__scroll--inner-bar"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopContent',
}
</script>

<style lang="scss" scoped>
  .slide-text {
    animation: slide-text 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 2.3s;
    }
    &:nth-child(3) {
      animation-delay: 2.6s;
    }
  }

  .top {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 80px);
    @include responsiveSize('padding-left', 375px, 1280px, 20px, 40px);
    @include responsiveSize('padding-right', 375px, 1280px, 20px, 40px);
    &__inner {
      width: 100%;
    }

    &__catch-copy {
      &--gradient {
        display: inline-block;
        @include responsiveSize('font-size', 1px, 1920px, 16px, 240px);
        font-weight: 700;
        line-height: 90%;
        letter-spacing: -0.04em;
        background: $GradationColor;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      } 
    }

    &__text {
      display: flex;
      flex-direction: column;
      @include responsiveSize('margin-top', 1280px, 320px, 32px, 64px);

      &--agree {
        @include responsiveSize('font-size', 375px, 1920px, 24px, 40px);
        width: max-content;
      }

      &--content {
        opacity: 0.4;
        margin-top: 1rem;
        @include responsiveSize('font-size', 375px, 1920px, 12px, 16px);
        &-jp {
          margin-top: 8px;
        }
      }
    }

    &__scroll {
      font-size: 12px;
      letter-spacing: 0.08em;
      color: #fff;
      transform: rotate(90deg);
      transform-origin: center right;
      letter-spacing: 0.08rem;
      position: absolute;
      right: 50%;
      bottom: -5%;
      &--bar {
        width: 120px;
        height: 1px;
        display: block;
        position: relative;
        overflow: hidden;
      }
      &--inner-bar {
        position: absolute;
        top: 0;
        right: -160px;
        width: 160px;
        height: 1px;
        animation: scroll-bar 2.4s ease-in-out infinite;
        background-color: #fff;
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
      transform: translate3d(-320px,0,0);
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

  // レスポンシブ
  .top {
    @include responsive(md) {
      &__inner {
        @include responsiveSize('width', 1px, 1920px, 1px, 1400px);
      }

      &__text {
        flex-direction: row;
        align-items: center;
        &--agree {
          @include responsiveSize('margin-right', 1080px, 1920px, 80px, 160px);
        }

        &--content {
          margin-top: 0;
        }
      }

      &__catch-copy {
        left: clamp(40px, 5vw ,110px);
      }

      &__scroll {
        right: 32px;
        bottom: -5%;
        &--bar {
          width: 160px;
        }
        &--inner-bar {
          right: -320px;
          width: 320px;
          animation: scroll-bar 2.4s ease-in-out infinite;
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
    }

    @include responsive(lg) {
      height: calc(100vh - 120px);
    }
  }
</style>