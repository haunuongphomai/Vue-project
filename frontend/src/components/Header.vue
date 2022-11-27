<template>
  <header>
    <div class="home-btn">
      <a href="/">Home</a>
    </div>

    <div class="staff-btn">
      <a href="/staff">Staff</a>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: black;
  display: flex;
}

a {
  color: white;
  text-decoration: none;
  font-size: 30px;
}

a:hover {
  background-color: white;
  color: black;
  padding: 16px 5px 18px 5px;
}

.home-btn {
  padding: 15px 0 15px 30px;
}

.staff-btn {
  padding: 15px 0 15px 30px;
}
</style>
