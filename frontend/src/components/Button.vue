<template>
  <div class="button-gr">
    <div class="btn-add">
      <button
        type="button"
        class="btn btn-success btn-lg"
        @click="this.$router.push('/add')"
      >
        Add
      </button>
    </div>
    <button type="button" class="btn btn-danger btn-lg" @click="Logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  method: "POST",
  methods: {
    async Logout() {
      const res = await fetch("http://localhost:3333/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_token: localStorage.getItem("token"),
        }),
      }).then((res) => res.json());

      if (res.success) {
        localStorage.removeItem("token");
        this.$router.push("/login");
      } else {
        alert(res.message);
      }
    },
  },
};
</script>

<style scoped>
.button-gr {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.btn-add {
    padding-right: 10px;
}
</style>
