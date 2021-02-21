<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a href="/">もどる</a>
  </div>
  <div class="product-item">
    <div class="product-item__name">
      {{ productItem[$route.params.id - 1].name }}
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
          name: "Daddy's break",
        },
        {
          id: 2,
          name: "YK Protfolio"
        },
        {
          id: 3,
          name: "わかやま幼稚園"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
