<template>
  <div class="container">
    <h1>Modify</h1>
    <form @submit.prevent="modifyProduct">
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Price</label>
        <input
          v-model="price"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Amount</label>
        <input
          v-model="amount"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="add-btn">
        <span>
          <button
            type="button"
            class="btn btn-danger btn-lg"
            @click="this.$router.push('/')"
          >
            Back
          </button>
        </span>
        <span>
          <button type="submit" class="btn btn-success btn-lg">Save</button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      price: "",
      amount: "",
    };
  },
  methods: {
    async modifyProduct() {
      const id = location.pathname.split("/")[2];
      const updatedProduct = {
        name: this.name,
        price: this.price,
        amount: this.amount,
      };
      const res = axios.put(
        `http://localhost:3333/product/${id}`,
        updatedProduct
      );
      window.alert("Product modified successfully!");
    },
    async retrieveProductData() {
      const id = location.pathname.split("/")[2];
      const res = await axios.get(`http://localhost:3333/product/${id}`);
      this.name = res.data.result[0].name;
      this.price = res.data.result[0].price;
      this.amount = res.data.result[0].amount;
    },
  },
  mounted() {
    this.retrieveProductData();
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 40%;
  padding-top: 60px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
}

.gr-btn {
  display: flex;
  padding-top: 10px;
}

span {
  padding-right: 10px;
}
</style>
