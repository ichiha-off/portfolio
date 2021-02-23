<template>
  <section class="profile" id="profile">
    <h1 class="profile__headline">
      <span class="profile__headline--front">My Profile</span>
      <span class="profile__headline--back">My Profile</span>
    </h1>

    <div class="profile__inner">
      <div class="profile__inner--left">
        <div class="profile__name">
          金山 裕紀 / <span class="profile__name--en">Yuki Kanayama</span>
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

      <div class="profile__inner--right">
        <div class="profile__text">
          和歌山生まれの和歌山育ち。
          <br>コロナ禍に退職し、自宅でフロントエンドエンジニアを目指し勉強中。
          <br>妻子持ち。
          <br>よければSNS達を覗いてください。
          <div class="profile__text--en">
            Born and raised in Wakayama.
            <br>Retired from Corona disaster and now studying to be a front-end engineer at home.
            <br>wife and children.
            <br>Please take a look at our social networking sites if you like.
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
    margin-top: 10rem;
    padding: 0 1.5rem;
    // @include content-visibility(1000px);
    &__headline {
      position: relative;
      font-family: 'Oswald', sans-serif;
      letter-spacing: -0.04em;
      &--front {
        @include headline-front;
      }
      &--back {
        @include headline-back;
      }
    }
    &__inner {
      margin-top: 4rem;
    }
    &__name {
      &--en {
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.08em;
      }
    }
    &__sns-icons {
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
    &__text {
      line-height: 1.6;
      &--en {
        margin-top: 1rem;
        font-family: 'Roboto', sans-serif;
      }
    }
  }

  // レスポンシブ
  .profile {
    @include responsive(md) {
      padding: 0 5rem;
    }
    @include responsive(lg) {
      &__inner {
        display: flex;
        &--left {
          width: 40%;
        }
        &--right {
          width: 60%;
        }
      }
      &__name {
        font-size: 24px;
      }
      &__sns-icons {
        margin-top: 2rem;
      }
    }
    @include responsive(xl) {
      max-width: 1200px;
      margin: 10rem auto 0;
    }
  }
</style>