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
    async addProduct() {
      try {
        // const res = await fetch("http://localhost:3333/product", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     name: this.name,
        //     price: this.price,
        //     amount: this.amount,
        //   }),
        // }).then((res) => res.json());

        const newProduct = {
          name: this.name,
          price: this.price,
          amount: this.amount,
        };

        let res = await axios.post("http://localhost:3333/product", newProduct);
        window.alert("Product added successfully!");
        // console.log(newProduct);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
        />
      </div>

      <div class="form-group">
        <label>Price</label>
        <input
          v-model="price"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="form-group">
        <label>Amount</label>
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
          <button type="submit" class="btn btn-success btn-lg">Add</button>
        </span>
      </div>
    </form>
  </div>
</template>

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
