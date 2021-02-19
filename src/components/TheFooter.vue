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
    margin-top: 7.5rem;
    &__copyright {
      text-align: center;
      font-family: 'Roboto', sans-serif;
    }
  }
</style>