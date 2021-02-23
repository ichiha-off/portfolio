<template>
  <footer class="footer">
    <div class="footer__copyright">
      <small>&copy; Yuki Kanayama</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 40px;
    padding-top: 7.5rem;
    &__copyright {
      text-align: center;
      font-family: 'Roboto', sans-serif;
    }
  }

// レスポンシブ
  .footer {
    @include responsive(lg) {
      padding-top: 240px;
    }
  }
</style>