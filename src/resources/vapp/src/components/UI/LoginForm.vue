<template>
  <form @submit.prevent="submitForm">
    <div class="form-group" v-if="formMode" >
      <label for="exampleInputEmail1">Choose A Public User Name</label>
      <input
        type="name"
        class="form-control"
        aria-describedby="nameHelp"
        placeholder="Enter a username"
        v-model="name"
      />
      <small class="form-text text-muted">Only your username is shown in hiscore tables</small>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <div v-if="formMode" class="form-group">
      <label for="exampleInputPassword1">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Retype Password"
        v-model="password_confirmation"
      />
    </div>

    <div class="row  justify-content-center">
      <button type="submit" class="btn btn-primary my-5">Submit</button>
    </div>
    
  </form>
</template>

<script>
import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";

export default {
  props: ["mode"],
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      error: null,
    };
  },
  methods: {
    submitForm() {
      let payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      if (this.mode == "register") {
        this.error = null;
        AuthService.registerUser(payload)
          .then(() => this.$router.push({ name: 'Authorized'}))
          .catch((error) => (this.error = getError(error)));
        return;
      }

      AuthService.login(payload)
        .then(() => {
          this.$store.dispatch("auth/setGuest", { value: false });
          this.$router.push({ name: 'Authorized'});
        })
        .catch((error) => (this.error = getError(error)));
    },
  },
  computed: {
    formMode() {
      return this.mode === "register" ? true : false;
    },
  },
};
</script>


<style scoped>
button {
  border-radius: 5px;
}
</style>