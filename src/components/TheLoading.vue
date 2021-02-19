<template>
  <div class="loading" id="loading">
    <div class="loading__logo">
      <svg class="loading__logo-img" filter="url(#glitch)" width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M118.055 287.878C116.194 272.371 114.405 248.623 114.405 232.805V173.57L185.739 58.1934L200.196 28.5175C181.028 27.9427 161.91 26.2521 142.938 23.4542C140.767 31.8279 136.425 41.4431 128.361 55.0896L88.3519 124.562L53.5 66.4304L26.8359 115.544L62.6101 173.256V232.8C62.6678 247.105 64.3202 249.798 62.6101 264L118.055 287.878Z" fill="white"/>
        <path d="M195.677 140.7V76.5569C195.677 57.8734 195.914 40.801 197.782 28.9681H141.42C143.528 44.7436 144.593 60.6411 144.608 76.5569V254.38C144.783 268.744 143.951 283.104 142.116 297.352H198.481C196.301 282.716 195.678 273.063 195.678 254.38V140.7H195.677Z" fill="white"/>
        <path d="M231.683 145.49L288.973 87.524L252.923 61.5291C252.923 61.5291 245.002 71.2405 234.234 82.2886L169.904 150.308V204.719L199.372 175.251L231.683 145.49Z" fill="white"/>
        <path d="M230.076 128.109L198.336 157.343L261.852 247.991C268.536 257.736 291.998 212.973 291.998 212.973L230.076 128.109Z" fill="white"/>
        <path d="M299 160C299 236.768 236.768 299 160 299C83.2324 299 21 236.768 21 160C21 83.2324 83.2324 21 160 21C236.768 21 299 83.2324 299 160Z" stroke="white" stroke-width="20"/>
        <path d="M315.468 160C315.468 245.863 245.863 315.468 160 315.468C74.1373 315.468 4.53174 245.863 4.53174 160C4.53174 74.1372 74.1373 4.53165 160 4.53165C245.863 4.53165 315.468 74.1372 315.468 160Z" stroke="white" stroke-width="4"/>
      </svg>
      <svg width="0" height="0">
        <defs>
          <filter
            id="glitch"
            primitiveUnits="objectBoundingBox"
            x="-10%"
            y="0%"
            width="120%"
            height="100%"
            >
            <!-- red: R成分 -->
            <feColorMatrix
                          in="SourceGraphic"
                          result="red"
                          type="matrix"
                          values="1 0 0 0 0
                                  0 0 0 0 0
                                  0 0 0 0 0
                                  0 0 0 1 0"
                          />
            <!-- green: G成分 -->
            <feColorMatrix
                          in="SourceGraphic"
                          result="green"
                          type="matrix"
                          values="0 0 0 0 0
                                  0 1 0 0 0
                                  0 0 0 0 0
                                  0 0 0 1 0"
                          />
            <!-- blue: B成分 -->
            <feColorMatrix
                          in="SourceGraphic"
                          result="blue"
                          type="matrix"
                          values="0 0 0 0 0
                                  0 0 0 0 0
                                  0 0 1 0 0
                                  0 0 0 1 0"
                          />

            <!-- red-shifted: R成分を左にずらしたもの -->
            <feOffset in="red" result="red-shifted" dx="-0.01" dy="0">
              <animate
                      attributeName="dx"
                      values="0; -0.005; 0; -0.007; -0.007"
                      keyTimes="0; 0.3; 0.33; 0.7; 0.75"
                      begin="0s"
                      dur="1s"
                      calcMode="discrete"
                      repeatCount="indefinite"
                      fill="freeze"
                      />
            </feOffset>
            <!-- Green-shifted: G成分を右にずらしたもの -->
            <feOffset in="green" result="green-shifted" dx="0.05" dy="-0.01">
              <animate
                      attributeName="dx"
                      values="0; 0.005; 0; 0.007; 0.007"
                      keyTimes="0; 0.3; 0.33; 0.7; 0.75"
                      begin="0s"
                      dur="1s"
                      calcMode="discrete"
                      repeatCount="indefinite"
                      fill="freeze"
                      />
            </feOffset>
            <!-- blue-shifted: B成分を右にずらしたもの -->
            <feOffset in="blue" result="blue-shifted" dx="0.01" dy="0">
              <animate
                      attributeName="dx"
                      values="0; 0.005; 0; 0.007; 0.007"
                      keyTimes="0; 0.3; 0.33; 0.7; 0.75"
                      begin="0s"
                      dur="1s"
                      calcMode="discrete"
                      repeatCount="indefinite"
                      fill="freeze"
                      />
            </feOffset>

            <!-- blended: ブレンド結果 -->
            <feBlend
                    mode="screen"
                    in="red-shifted"
                    in2="green"
                    result="red-green"
                    />
            <feBlend
                    mode="screen"
                    in="red-green"
                    in2="blue-shifted"
                    result="blended"
                    />

            <!-- スライスごとに横に動かす -->
            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="9%"
              height="2%"
              result="slice"
              >
              <animate
                attributeName="dx"
                values="0; -0.005; 0; -0.01; -0.04; -0.01; -0.06; -0.01; -0.015"
                keyTimes="0; 0.3; 0.33; 0.8; 0.82; 0.84; 0.86; 0.88; 0.9"
                begin="0s"
                dur="1s"
                calcMode="discrete"
                repeatCount="indefinite"
                fill="freeze"
                />
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="0%"
              height="30%"
              result="slice1"
              >
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="30%"
              height="10%"
              result="slice2"
              >
              <animate
                attributeName="dx"
                values="0; -0.015; 0; -0.01"
                keyTimes="0; 0.3; 0.33; 0.7"
                begin="0s"
                dur="1s"
                calcMode="discrete"
                repeatCount="indefinite"
                fill="freeze"
                />
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="40%"
              height="10%"
              result="slice3"
              >
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="50%"
              height="2%"
              result="slice4"
              >
              <animate
                attributeName="dx"
                values="0; 0.01; 0; 0.01; 0.02"
                keyTimes="0; 0.3; 0.33; 0.7; 0.75"
                begin="0s"
                dur="1s"
                calcMode="discrete"
                repeatCount="indefinite"
                fill="freeze"
                />
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="52%"
              height="12%"
              result="slice5"
              >
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="64%"
              height="3%"
              result="slice6"
              >
              <animate
                attributeName="dx"
                values="0; -0.005; 0; -0.01; -0.015; -0.01; -0.015; -0.01; -0.015"
                keyTimes="0; 0.3; 0.33; 0.8; 0.82; 0.84; 0.86; 0.88; 0.9"
                begin="0s"
                dur="1s"
                calcMode="discrete"
                repeatCount="indefinite"
                fill="freeze"
                />
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="67%"
              height="33%"
              result="slice7"
              >
            </feOffset>

            <feOffset
              in="blended"
              dx="0"
              dy="0"
              y="86%"
              height="3%"
              result="slice8"
              >
              <animate
                attributeName="dx"
                values="0; -0.005; 0; -0.01; -0.04; -0.01; -0.06; -0.01; -0.015"
                keyTimes="0; 0.3; 0.33; 0.8; 0.82; 0.84; 0.86; 0.88; 0.9"
                begin="0s"
                dur="1s"
                calcMode="discrete"
                repeatCount="indefinite"
                fill="freeze"
                />
            </feOffset>

            <!-- スライスをマージ -->
            <feMerge>
              <feMergeNode in="slice" />
              <feMergeNode in="slice1" />
              <feMergeNode in="slice2" />
              <feMergeNode in="slice3" />
              <feMergeNode in="slice4" />
              <feMergeNode in="slice5" />
              <feMergeNode in="slice6" />
              <feMergeNode in="slice7" />
              <feMergeNode in="slice8" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="loading__text-area">
      <div class="loading__text en" data-text="HELLO !">
        HELLO !
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLoading',
  methods: {
    fadeIn() {
      const logoImg = document.querySelector('.loading__logo-img');
      const text = document.querySelector('.loading__text-area');
      setTimeout(() => {
        logoImg.classList.add('fade-in');
        text.classList.add('fade-in');
      }, 250);
    }
  },
  mounted() {
    this.fadeIn();
  }
}
</script>

<style lang="scss" scoped>
  .en {
    font-family: 'Oswald', sans-serif;
  }

  .loaded {
    transform: translateY(-100vh);
    visibility: hidden;
  }

  .loading {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: $BackColorB;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform 1s, visibility 1s;
    & .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    &__logo {
      width: clamp(240px, 50vw, 320px);
    }
    &__logo-img {
      width: 100%;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.3s, transform 0.3s;
    }
    &__text-area {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.3s, transform 0.3s;
      transition-delay: 0.2s;
    }
    &__text {
      font-size: clamp(40px, 13vw, 48px);
      position: relative;
      font-weight: bold;
      text-align: center;
      margin-top: 2rem;
      &.en {
        font-size: clamp(48px, 18vw, 64px);
      }
    }
    &__text::before,
    &__text::after {
      content: attr(data-text);
      left: 0;
      position: absolute;
      top: 0;
    }

    &__text,
    &__text::before,
    &__text::after {
      color: transparent;
      mix-blend-mode: screen;
    }

    &__text::before {
      @include buruburu-text(r, #f00);
    }

    &__text {
      @include buruburu-text(g, #0f0);
    }

    &__text::after {
      @include buruburu-text(b, #00f);
    }
  }
</style>