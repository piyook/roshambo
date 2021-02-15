<template>

<div class="container">
    <h1 class="text-center pt-4 pb-4">Login To Start</h1>

    <login-form mode="login"> </login-form>

</div>
</template>

<script>

import LoginForm from '../components/UI/LoginForm';

export default {

    components:{
        LoginForm,
    }, 
}
</script>