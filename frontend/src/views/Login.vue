<template>
  <main>
    <div class="container">
      <header>
        <h4>PRODUCT MANAGEMENT</h4>
      </header>
      <div class="row">
        <form @submit.prevent="Login">
          <div class="column">
            <h2 class="mb-3">LOGIN</h2>

            <label>
              <span>Enter your email</span>
              <input v-model="email" type="email" />
            </label>

            <label>
              <span>Enter your password</span>
              <input v-model="password" type="password" />
            </label>

            <div class="alternative-option mt-5">
              <p>
                You don't have an account?
                <span><router-link to="/register">Register</router-link></span>
              </p>
            </div>

            <div class="login-btn">
              <button type="submit" class="btn btn-outline-danger btn-lg">
                Login
              </button>
            </div>
          </div>
          <div class="column">
            <img
              src="https://img.freepik.com/free-vector/linear-flat-industrial-manufacture-conveyor-warehouse-storage-machines-illustration-set-business-production-process-concept-packaging-transporting-managing-control-center_126523-2664.jpg?w=826&t=st=1669241887~exp=1669242487~hmac=3f0fd3c250e3eeefc60c847d5594669c77b0abd17c71319eabede4e1712fb419"
            />
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<!-- 
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();

const email = ref("");
const password = ref("");

const Login = async () => {
  if (!email.value || !password.value) {
    return alert("Please fill in all fields");
  }

  const res = await fetch("http://localhost:3333/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  }).then((res) => res.json());

  if (res.success) {
    localStorage.setItem("token", res.token);
    router.push("/");
  } else {
    alert(res.message);
  }
};
</script> -->

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async Login() {
      try {
        if (!this.email || !this.password) {
          return alert("Please fill in all fields");
        }
        const res = await fetch("http://localhost:3333/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        }).then((res) => res.json());

        if (res.success) {
          localStorage.setItem("token", res.token);
          this.$router.push("/");
        } else {
          alert(res.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
main {
  background-image: url("https://production-tcf.imgix.net/app/uploads/2018/10/18161243/GettyImages-881358614-e1539893628948.jpg?auto=format%2Ccompress&q=80&fit=crop&w=1200&h=600");
  height: 100vh;
  background-size: cover;
}
.container {
  margin: auto;
  width: 50%;
  padding: 10px;
  padding-top: 60px;
}

h2 {
  font-weight: bold;
  font-family: Cambria, "Hoefler Text", "Liberation Serif", Times,
    "Times New Roman", "serif";
}

label {
  font-family: Cambria, "Hoefler Text", "Liberation Serif", Times,
    "Times New Roman", "serif";
}

a {
  color: #dc3545;
}

p {
  font-size: 18px;
  font-family: Cambria, "Hoefler Text", "Liberation Serif", Times,
    "Times New Roman", "serif";
}

header {
  width: fit-content;
  font-size: 25px;
  font-family: "Kanit", sans-serif;
  font-style: italic;
  letter-spacing: 2px;
  color: black;
  border: 2px solid black;
  background-color: white;
  padding: 0 10px;
  margin-left: -15px;
  margin-bottom: 30px;
  padding-top: 15px;
  border-radius: 5px;
  text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 2px lightpink;
}

form {
  font-family: "Kanit", sans-serif;
  border-radius: 20px;
  padding: 100px 200px 100px 70px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
}

input:not([type="submit"]) {
  padding: 8px;
  border-radius: 5px;
}

input::placeholder {
  opacity: 0.4;
}
.login-btn {
  padding-top: 20px;
  margin-left: 25%;
}

label {
  color: grey;
  font-size: 20px;
  padding: 5px;
  font-style: italic;
}

.column {
  float: left;
  width: 50%;
}

img {
  height: 480px;
}
</style>
