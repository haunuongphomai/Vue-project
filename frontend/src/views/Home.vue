<template>
  <Header />
  <ProductList />
  <Button />
</template>
<script>
import Header from "@/components/Header.vue";
import ProductList from "@/components/ProductList.vue";
import Button from "@/components/ButtonProduct.vue";
export default {
  components: {
    Header,
    ProductList,
    Button,
  },
};
</script>

<style scoped></style>
