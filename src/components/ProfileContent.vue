<template>
  <section class="profile" id="profile">
    <div class="profile__inner">
      <h1 class="profile__headline">
        <span class="profile__headline--front">PROFILE</span>
        <span class="profile__headline--back">PROFILE</span>
      </h1>
      
      <div class="profile__contents">
        <div class="profile__contents--left">
          <div class="profile__name">
            <span>
              金山 裕紀
            </span>
            / 
            <span class="profile__name--en">Yuki Kanayama</span>
          </div>
          <div class="profile__sns-icons">
            <a class="profile__sns-link" href="https://twitter.com/mtkana_off">
              <img src="@/assets/twitter.svg" alt="Twitterのアイコン" class="profile__sns-icon-img">
            </a>
            <a class="profile__sns-link" href="https://zenn.dev/yuki_kanayama">
              <img src="@/assets/Zenn.svg" alt="Zennのアイコン" class="profile__sns-icon-img">
            </a>
            <a class="profile__sns-link" href="https://github.com/ichiha-off">
              <img src="@/assets/github.svg" alt="Githubのアイコン" class="profile__sns-icon-img">
            </a>
            <a class="profile__sns-link" href="https://note.com/_ichiha_memo">
              <img src="@/assets/note.svg" alt="noteのアイコン" class="profile__sns-icon-img">
            </a>
          </div>
        </div>

        <div class="profile__contents--right">
          <div class="profile__text">
            <p class="profile__text--jp">
              和歌山生まれの和歌山育ち。
              コロナ禍に退職し、自宅でフロントエンドエンジニアを目指し勉強中。
              妻子持ち。
              よければSNS達を覗いてください。
            </p>
            <p class="profile__text--en">
              Born and raised in Wakayama.
              Retired from Corona disaster and now studying to be a front-end engineer at home.
              wife and children.
              Please take a look at our social networking sites if you like.
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ProfileContent'
}
</script>

<style lang="scss" scoped>
  .profile {
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
        top: 200%;
      }
    }

    &__contents {
      margin-top: 1.5rem;
      &--left {
        flex-shrink: 0;
      }
    }

    &__name {
      @include responsiveSize('font-size', 320px, 1920px, 16px, 32px);
      position: relative;
    }

    &__sns-icons {
      position: relative;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    &__sns-link {
      display: inline-block;
      margin-right: 16px;
      &:last-child {
        margin-right: 0px;
      }
    }
    &__sns-icon-img {
      width: auto;
      height: auto;
    }
    &__text {
      position: relative;
      line-height: 1.6;
      &--jp {
        opacity: 0.8;
      }

      &--en {
        margin-top: 1rem;
        opacity: 0.4;
        letter-spacing: 0.04em;
      }
    }
  }

  // レスポンシブ
  .profile {
    @include responsive(md) {
      padding-right: 0;
      &__inner {
        @include responsiveSize('width', 1px, 1920px, 1px, 1400px);
        margin: 0 auto;
      }
    }

    @include responsive(xl) {
      &__contents {
        display: flex;
        &--right {
          @include responsiveSize('margin-left', 1280px, 1920px, 40px, 120px);
        }
      }
    }
  }
</style>