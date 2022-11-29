<template>
  <div class="container">
    <h1>Modify</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" />
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Price</label>
        <input type="text" class="form-control" id="exampleInputPassword1" />
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Amount</label>
        <input type="text" class="form-control" id="exampleInputPassword1" />
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
