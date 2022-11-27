<template>
  <main>
    <div class="container">
      <header>
        <div class="header-title">
          <h1 class="logo">Product Management</h1>
        </div>
      </header>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
        <tr v-for="item in listproduct" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.amount }}</td>
          <td>
            <div class="button-gr">
              <div class="btn-add">
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="this.$router.push('/add')"
                >
                  Add
                </button>
              </div>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="Logout"
              >
                Logout
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      listproduct: [],
    };
  },
  methods: {
    async getAllProduct() {
      let res = await axios.post("http://localhost:3333/getAllProduct", {});
    },
  },
  async mounted() {
    let res = await axios.get("http://localhost:3333/getAllProduct");
    this.listproduct = res.data.result;
  },
};
</script>

<style scoped>
.container {
  height: 550px;
  overflow: hidden;
  overflow-x: hidden;
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
</style>
