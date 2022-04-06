<template>

<div class="container">
    <h1 class="text-center pt-4 pb-4">Login To Start</h1>

    <login-form mode="login"> </login-form>

    <div class="text-center"> 
        <router-link to="/userregister">Not Registered? Register Here </router-link>
    </div>

</div>
</template>

<script>

import LoginForm from '../components/UI/LoginForm.vue';

export default {

    components:{
        LoginForm,
    }, 
}
</script>

<style scoped>
 div {
     max-width:400px;
 }
</style>