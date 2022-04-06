<template>
  <div class="container-sm">
    <h1 class="text-center pt-4 pb-4">Register Now</h1>

    <login-form mode="register"> </login-form>

     <div class="text-center">
        <router-link to="/userlogin">Already Registered? Login Here </router-link>
     </div>
     
  </div>
</template>

<script>
import LoginForm from "../components/UI/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
 div {
     max-width:400px;
 }
</style>