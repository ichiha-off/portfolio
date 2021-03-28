<template>
  <section class="contact" id="contact" ref="testBlock">
    <div class="contact__inner">
      <h1 class="contact__headline">
        <span class="contact__headline--front">CONTACT</span>
        <span class="contact__headline--back">CONTACT</span>
      </h1>

      <div class="contact__text">
        <div class="contact__text--ja">
          <h3>ありがとうございます！</h3>
          <p>
            ここまでご覧頂いたことに感謝します。
            少しでも私に興味を持って頂ければ幸いです。
            <br>なんでもお気軽に、お問い合わせください。
          </p>
        </div>
        <div class="contact__text--en">
          <h3>THANK YOU!</h3>
          <p>
            I appreciate that you've seen this far.
            I hope that you are interested in me at least a little.
            <br>Please feel free to contact me with any questions you may have.
          </p>
        </div>
      </div>
    </div>
    <button class="contact__button">
      <div class="contact__button--inner">
        <a class="contact__button--link" href="https://forms.gle/hMygmavQxkEHZCv37">
          <div class="contact__button--text">
            "GO TO THE CONTACT FORM."
          </div>
        </a>
      </div>
    </button>
  </section>
</template>

<script>
export default {
  name: 'TheContact',
}
</script>

<style lang="scss" scoped>
  .contact {
    @include responsiveSize('margin-top', 320px, 1280px, 120px, 240px);
    overflow: hidden;
    @include responsiveSize('padding-left', 375px, 1280px, 20px, 40px);
    @include responsiveSize('padding-right', 375px, 1280px, 20px, 40px);
    &__headline {
      position: relative;
      font-weight: 700;
      letter-spacing: -0.04em;
      &--front {
        @include headline-front;
      }
      &--back {
        @include headline-back;
        top: 850%;
      }
    }

    &__text {
      position: relative;
      margin-top: 1.5rem;
      & h3 {
        @include responsiveSize('font-size', 320px, 1280px, 32px, 64px);
        font-weight: 700;
      }

      & p {
        @include responsiveSize('font-size', 320px, 1280px, 12px, 16px);
        @include responsiveSize('margin-top', 320px, 1280px, 8px, 16px);
        line-height: 1.6;
      }

      &--en {
        margin-top: 1.5rem
      }
    }

    &__button {
      position: relative;
      width: 100%;
      z-index: 1;
      @include responsiveSize('margin-top', 320px, 1280px, 80px, 160px);
      display: block;
      &--inner {
        text-align: center;
        width: 0%;
        transition: all 0.6s ease-out;
        background: $GradationColor;
      }

      &--link {
        @include responsiveSize('font-size', 320px, 1920px, 24px, 160px);
        font-weight: 700;
        @include responsiveSize('width', 320px, 768px, 280px, 728px);
        height: 100%;
        display: inline-block;
        background-color: $BackColorB;
        mix-blend-mode: darken;
        border: 4px solid #453a94;
        border-image: $GradationColor;
        border-image-slice: 1;
      }

      &--text {
        color: $TextColorW;
        padding: 1rem 0.5rem;
      }
    }
  }

.contact__button:hover .contact__button--inner {
  width: 100%;
}

  .contact {
    @include responsive(md) {
      padding-right: 0;
      &__inner {
        @include responsiveSize('width', 1px, 1920px, 1px, 1660px);
        margin-left: auto;
      }

      &__button {
        @include responsiveSize('width', 1px, 1920px, 1px, 1400px);
        margin: 10rem auto 0;

        &--link {
          @include responsiveSize('width', 1px, 1920px, 1px, 1400px);
          border: 8px solid #453a94;
          border-image: $GradationColor;
          border-image-slice: 1;
        }
      }
    }
  }
</style>