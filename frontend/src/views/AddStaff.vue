<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      gender: "",
      phone: "",
    };
  },
  methods: {
    async addStaff() {
      try {
        const newStaff = {
          name: this.name,
          gender: this.gender,
          phone: this.phone,
        };

        let res = await axios.post("http://localhost:3333/staff", newStaff);
        window.alert("Staff added successfully!");
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
    <h1>Add Staff</h1>
    <form @submit.prevent="addStaff">
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
        <label>Gender</label>
        <input
          v-model="gender"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="form-group">
        <label>Phone</label>
        <input
          v-model="phone"
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
            @click="this.$router.push('/staff')"
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
