<template>
  <main>
    <div class="container">
      <header>
        <div class="header-title">
          <h1 class="logo">Staff</h1>
        </div>
      </header>
      <div class="table-staff">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tr v-for="item in liststaff" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <div class="button-gr">
                <div class="btn-add">
                  <button
                    type="button"
                    class="btn btn-warning"
                    @click="modifyStaff(item.id)"
                  >
                    Modify
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="deleteStaff(item.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      liststaff: [],
    };
  },
  methods: {
    async getAllStaff() {
      let res = await axios.post("http://localhost:3333/getAllStaff", {});
    },
    async deleteStaff(id) {
      console.log(id);
      if (
        window.confirm(`Are you sure you want to delete staff #${id}?`) === true
      ) {
        let res = await axios.delete(`http://localhost:3333/staff/${id}`);
        window.alert(`Staff #${id} has been deleted successfully`);
        location.reload();
        return;
      } else {
        return;
      }
    },
    async modifyStaff(id) {
      this.$router.push(`/modifyStaff/${id}`);
    },
  },
  async mounted() {
    let res = await axios.get("http://localhost:3333/getAllStaff");
    this.liststaff = res.data.result;
  },
};
</script>

<style scoped>
.container {
  height: 550px;
  padding-top: 100px;
}
.header-title {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: -100px;
}
.logo {
  padding-top: 50px;
  font-size: 30px;
  color: var(--dark);
  border-color: var(--dark);
}

table {
  width: 100%;
  border: 1px solid;
  border-collapse: collapse;
}

table td,
.table th {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

th,
td {
  text-align: center;
  padding: 8px;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

th {
  background-color: #004646;
  color: wheat;
}
tr {
  padding: -15px;
}

tr:nth-child(even) {
  background-color: #d6eeee;
}

.button-gr {
  display: flex;
  justify-content: center;
}

.btn-add {
  padding-right: 10px;
}

.table-product {
  overflow-y: scroll;
  height: 500px;
}
.table-product thead th {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
