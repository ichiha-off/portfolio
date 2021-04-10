<template>
  <div class="product-item" id="product-item">
    <div class="product-item__inner">
      <div class="slide-img-anime">
        <picture>
          <source media="(min-width: 768px)" :srcset="'/product-img/product' + productItem[$route.params.id - 1].id + '-pc.png'">
          <img class="product-item__img" :src="'/product-img/product' + productItem[$route.params.id - 1].id + '.png'" alt="イメージ画像です">
        </picture>
      </div>

      <div class="slide-img-anime">
        <picture>
          <source media="(min-width: 768px)" :srcset="'/product-img/product' + productItem[$route.params.id - 1].id + '-bottom-pc.png'">
          <img class="product-item__img--bottom" :src="'/product-img/product' + productItem[$route.params.id - 1].id + '-bottom.png'" alt="イメージ画像です">
        </picture>
      </div>

      <div class="product-item__text">
        <div class="product-item__title">
          {{ productItem[$route.params.id - 1].title }}
        </div>

        <dl class="product-item__info">
          <div class="product-item__info--date">
            <dt>作成期間</dt>
            <dd>
              {{ productItem[$route.params.id - 1].date }}
            </dd>
          </div>
          <div class="product-item__info--lang">
            <dt>使用技術</dt>
            <dd>
              {{ productItem[$route.params.id - 1].lang }}
            </dd>
          </div>
          <div class="product-item__info--url">
            <dt>URL</dt>
            <dd>
              <a :href="productItem[$route.params.id - 1].url">
                {{ productItem[$route.params.id - 1].url }}
              </a>
            </dd>
          </div>
        </dl>

        <div class="product-item__comment">
          <div class="product-item__comment--product">
            <h3 class="product-item__comment--title">
              作品経緯
            </h3>

            <div class="product-item__comment--bottom">
              <p class="product-item__comment--content">
                {{ productItem[$route.params.id - 1].content }}
              </p>
            </div>
          </div>

          <div class="product-item__comment--design">
            <h3 class="product-item__comment--title">デザインについて</h3>
            
            <div class="product-item__comment--bottom">
              <p class="product-item__comment--content" v-for="contentDesign in productItem[$route.params.id - 1].contentDesigns" :key="contentDesign.id">
                {{ contentDesign }}
              </p>
            </div>
          </div>
        </div>

        <div class="product-item__back">
          <router-link to="/" class="product-item__back-link">
            <img src="@/assets/back-arrow.svg" alt="戻るボタンのアイコン">
            <span>back</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductItem',
  data() {
    return {
      productItem: [
        {
          id: 1,
          title: "Daddy's break",
          date: "約1ヶ月",
          lang: "Ruby on Rails / AWS(EC2,RDS) / XD",
          url: "http://18.177.170.11/",
          content: "父親になり、相談できる場所が欲しいと思い開発しました。所謂開示版でスレッドを立てることで、その議題について話あう場所です。ログイン認証を作ることでアカウントのフォロー機能追加し、より密なコミュニケーションができるようにと意識しました。",
          contentDesigns: [
            "最初は白色の背景で作成していましたが、目があまりにもチカチカしたため薄めのグレーにしました。掲示板は文字で気持ちを伝える場所なので、目の疲労感の軽減は大事だと思い変更を実施しました。",
            "最初のAboutページ以外はアニメーションを少なくすることで掲示板の利用をしやすさを意識し、逆にAboutは目を引くためにアニメーションを多く使用しました。",
            "ファーストビューにインパクトのある動画を配置したかったのですが知識がなく、Youtubeで調べてXDで作成しました。"
          ]
        },
        {
          id: 2,
          title: "YK Protfolio",
          date: "約1週間",
          lang: "Vue CLI / Firebase(Hosting) / XD",
          url: "https://yk-portfolio-4ce6e.web.app/",
          content: "フロントエンドの学習をしていく中で、Javascriptのフレームワークを学びたいと思い、学習コストが低く始めやすいという友人の勧めでVueの学習を始めました。そこで学習したVueを用いてSPAを開発したいと思い自己紹介を行う目的で作成しました。",
          contentDesigns: [
            "自分のことを伝えるポートフォリオということで自分好きなアニメーションを好きなだけ入れました。ただ入れるだけだはなく、煩わしさを感じない心地よいアニメーションを意識しました。",
            "レスポンシブをより意識し、スマホとPCの両方はしっかりとアニメーションを楽しめるように、自分の考えが伝わるように制作しました。"
          ]
        },
        {
          id: 3,
          title: "わかやま幼稚園",
          date: "約1週間",
          lang: "Vue CLI / Firebase(Hosting) / Figma",
          url: "https://wakayama-kindergarten.web.app/",
          content: "Udemyで学んだJavascriptの知識をアウトプットするために制作しました。タイミング的に娘が保育園に入るタイミングでもあったので、父親目線で入れたくなるようなサイトを意識しました。すこしかっちり目で制作しています。",
          contentDesigns: [
            "テーマカラーを1つ決めてサブカラーに彩度を変えたものを採用しました。ファーストビューは派手にして下はシンプルにしています。",
            "デザインの4原則を意識して、基本を整えようという目的でデザインをしました。"
          ]
        },
        {
          id: 4,
          title: "Yu-k1 blog",
          date: "約1週間",
          lang: "Nuxt.js / Netlify / microCMS / Figma ",
          url: "https://yu-k1blog.netlify.app/",
          content: "Web制作におけるフロントエンドのトレンドを調べているとJamstackでの制作が流行っていると発見し、自分が学んでいるNuxt.jsのSSGを用いて行えるとのことでチャレンジ。日本製のmicroCMSが日本語のドキュメントが豊富はわかりやすく、実行することができた。Jamstackでの開発は静的ページを事前に作成する必要があるため、ブログサイトや企業サイトなど静的サイトが最適（動的もできるが難しい）。自分が投稿サイトで投稿してきたものをまとめたいとも思っていたので、自身のアウトプットサイトとしても運用することを想定し、ブログを制作すると決めました。",
          contentDesigns: [
            "あくまで、情報を発信するブログのサイトなので、『文字を読む』のをメインで想定し、デザインしました。あまり凝った色、インタラクションを使わずに文字をスムーズに読めるように余白を多めにしました。SSGのおかげで既にある静的ページを読み込むだけでさくさく記事ページに移動できるため、デザイン案時点ではロードアニメーションを入れていましたが、利点を壊してしまっていたので削除しました。"
          ]
        },
      ]
    }
  },
  methods: {
    headerHidden() {
      const nav = document.querySelector('.header__nav');
      nav.setAttribute(
        "style", "opacity: 0; visibility: hidden;"
      );
    }
  },
  mounted() {
    this.headerHidden();
  }
}
</script>

<style lang="scss" scoped>
.product-item {
  position: relative;
  margin-top: 2.5rem;
  &__inner {
    width: min(100%, 1080px);
    margin: 0 auto;
  }
  &__img {
    width: min(100%, 1080px);
    height: 100%;
    &--bottom {
      margin-top: 1rem;
      width: min(100%, 1080px);
      height: 100%;
    }
  }
  &__text {
    padding: 0 24px;
  }
  &__title {
    font-size: 3rem;
    font-weight: bold;
    margin: 40px 0;
  }
  &__info {
    font-size: 12px;
    &--date,
    &--lang,
    &--url {
      display: flex;
      & dt {
        width: 100px;
      }
    }

    &--lang,
    &--url {
      margin-top: 1rem;
    }
  }
  &__comment {
    margin-top: 5rem;
    &--title {
      font-size: 1.5rem;
      letter-spacing: 0.08em;
      font-weight: bold;
    }

    &--design {
      margin-top: 2.5rem;
    }

    &--bottom {
      margin-top: 1rem;
    }

    &--content {
      line-height: 2.4;
      letter-spacing: 0.08em;
      font-size: 12px;
    }
  }
  &__back {
    margin-top: 2.5rem;
  }
  &__back-link {
    vertical-align: middle;
    & > img {
      vertical-align: middle;
    }
    & > span {
      margin-left: 1rem;
    }
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

  &__link {
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

// レスポンシブ
.product-item {
  @include responsive(xl) {
    &__img {
      &--bottom {
        margin-top: 2.5rem;
      }
    }
  }
}

.slide-img-anime {
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: $BackColorB;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: right;
    animation: slide-img-anime 0.4s ease-in-out both;
    animation-delay: 0.4s;
  }
}

@keyframes slide-img-anime {
  100% {
    width: 0;
  }
}
</style>
