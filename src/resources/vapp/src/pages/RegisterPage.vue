<template>
  <div class="container-sm">
    <h1 class="text-center pt-4 pb-4">Register Now</h1>

    <login-form mode="register"> </login-form>
  </div>
</template>

<script>
import LoginForm from "../components/UI/LoginForm";

export default {
  components: {
    LoginForm,
  },
};
</script>