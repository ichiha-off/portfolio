<template>
  <section class="products" id="products">
    <h1 class="products__headline">
      <span class="products__headline--front">My Products</span>
      <span class="products__headline--back">My Products</span>
    </h1>
    <div class="products__list">
      <div class="products__item">
        <router-link to="/product/1" class="products__link">
          <picture>
            <source media="(min-width: 768px)" srcset="@/assets/product-item1-2x.png">
            <img src="@/assets/product-item1.png" alt="Daddy's breakというアプリのイメージ画像です。" class="products__img">
          </picture>
        </router-link>
        <div class="products__title">
          Daddy’s break
        </div>
        <div class="products__comment">
          自分がパパになり、新米パパたちの悩みを打ち明けられる場所があればと思い作成したWebアプリです。
          <br>ログイン認証のある掲示板です。
          <div class="products__comment--en">
            This is a web application that I created with the hope of becoming a dad myself and having a place where new dads can talk about their problems.
            <br>It is a bulletin board with login authentication.
          </div>
        </div>
      </div>
      
      <div class="products__item">
        <router-link to="/product/2" class="products__link">
          <picture>
            <source media="(min-width: 768px)" srcset="@/assets/product-item2-2x.png">
            <img src="@/assets/product-item2.png" alt="私が作ったより詳しい自己紹介があるサイトのイメージ画像です。" class="products__img">
          </picture>
        </router-link>
        <div class="products__title">
          YK Portfolio
        </div>
        <div class="products__comment">
          VueCLIとVue RouterでSPAを作成しました。
          <br>入れたいアニメーションを使いつつも、くどすぎないように注意して作成しました。
          <br>より詳しく自己紹介しています。
          <div class="products__comment--en">
            I created a SPA with VueCLI and Vue Router.
            <br>I used the animations I wanted to include, but was careful not to overdo it.
            <br>I'm going to introduce myself in more detail.
          </div>
        </div>
      </div>
      
      <div class="products__item">
        <router-link to="/product/3" class="products__link">
        <picture>
          <source media="(min-width: 768px)" srcset="@/assets/product-item3-2x.png">
          <img src="@/assets/product-item3.png" alt="架空の幼稚園のサイトのイメージ画像です。" class="products__img">
        </picture>
        </router-link>
        <div class="products__title">
          わかやま幼稚園（架空）
        </div>
        <div class="products__comment">
          Javascript、Sassの学習として作成しました。
          <br>スクロールアニメーション、クラスの命名を意識してコーディングしました。
          <div class="products__comment--en">
            I created this as a learning tool for Javascript and Sass.
            <br>I coded it with scrolling animation and class naming in mind.
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductsContent',
}
</script>

<style lang="scss" scoped>
  .products {
    padding: 10rem 1.5rem 0;
    // @include content-visibility(1200px);
    overflow: hidden;
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
      width: min(100%, 327px);
      display: block;
    }
    &__title {
      margin-top: 1rem;
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

// レスポンシブ
  .products {
    @include responsive(md) {
      padding: 10rem 5rem 0;
      &__img {
        width: 100%;
        margin: 0 auto;
      }
      &__title {
        margin-top: 2rem;
      }
      &__comment {
        margin-top: 2rem;
      }
    }
    @include responsive(xl) {
      max-width: 1200px;
      margin: 0 auto;
      &__item {
        margin-right: clamp(16px, 5vw, 110px);
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
</style>