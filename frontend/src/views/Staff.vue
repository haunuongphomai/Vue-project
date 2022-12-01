<template>
  <Header />
  <StaffList />
  <ButtonStaff />
</template>
<script>
import Header from "@/components/Header.vue";
import StaffList from "@/components/StaffList.vue";
import ButtonStaff from "@/components/ButtonStaff.vue";
export default {
  components: {
    Header,
    StaffList,
    ButtonStaff,
  },
};
</script>

<style scoped></style>
