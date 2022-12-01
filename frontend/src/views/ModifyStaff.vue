<template>
  <div class="container">
    <h1>Modify Staff</h1>
    <form @submit.prevent="modifyStaff">
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
        <label for="exampleInputPassword1">Gender</label>
        <input
          v-model="gender"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Phone</label>
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
      gender: "",
      phone: "",
    };
  },
  methods: {
    async modifyStaff() {
      const id = location.pathname.split("/")[2];

      const updatedStaff = {
        name: this.name,
        gender: this.gender,
        phone: this.phone,
      };
      const res = axios.put(`http://localhost:3333/staff/${id}`, updatedStaff);
      window.alert("Staff modified successfully!");
    },
    async retrieveStaffData() {
      const id = location.pathname.split("/")[2];
      const res = await axios.get(`http://localhost:3333/staff/${id}`);
      this.name = res.data.result[0].name;
      this.gender = res.data.result[0].gender;
      this.phone = res.data.result[0].phone;
    },
  },
  mounted() {
    this.retrieveStaffData();
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
