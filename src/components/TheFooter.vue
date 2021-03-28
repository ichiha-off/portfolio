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
    padding: 3.75rem 0;
    &__copyright {
      text-align: center;
    }
  }

// レスポンシブ
  .footer {
    @include responsive(lg) {
      padding: 7.5rem 0;
    }
  }
</style>