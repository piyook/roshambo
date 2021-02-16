<template>
<section>
     <img src="@/assets/piyook_logo.png">
     <h5 class="text-center"> Rock, Paper, Scissors, Lizard, Spock </h5>
    <div id="nav" class="text-center mt-2">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>

    <div class="text-right mr-2 mt-2 fixed-top" v-if="authUser">
        <p> Username: {{authUser}}</p>
        <button type="button" class="btn btn-secondary" @click="logout">Logout</button>
    </div>
</section>

</template>

<script>
import {mapGetters } from 'vuex';
export default {

    computed:{
        ...mapGetters('auth',['authUser'])
    },

    methods:{
        logout(){
           this.$store.dispatch('auth/logout');
        }
    }
    
}
</script>

<style scoped>

button {
    border-radius:10px;
}

img {
    width:200px;
    display:block;
   margin-left:auto;
   margin-right:auto;
   margin-top: 20px;
}
</style>