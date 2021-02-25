<template>
<section>

        <alert-modal :isActive="errorModal">
        <template v-slot:title>SERVER ERROR</template>
    There Was An Error Connecting To The Server.<br> Please Try Again Later
    <template v-slot:yesButton>OK</template>
    <template v-slot:cancelButton>CANCEL</template>
    </alert-modal>

     <img src="@/assets/piyook_logo.png">
     <h5 class="text-center"> Rock, Paper, Scissors, Lizard, Spock </h5>
    <div v-if="!authUser" id="nav" class="text-center mt-2">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link>
    </div>

    <div v-else id="nav" class="text-center mt-2">
        <router-link to="/userhome">Home</router-link> | 
        <router-link to="/about">About</router-link>
    </div>

    <div class="text-right mr-5 mt-4 fixed-top userDetails" v-if="authUser">
        <p id ="userName"> Player:&nbsp;{{authUser}}</p>
        <button type="button" class="btn btn-secondary" @click="logout">Logout</button>
    </div>
</section>

</template>

<script>
import {mapGetters } from 'vuex';
export default {

    computed:{
        ...mapGetters('auth',['authUser']),
         errorModal() {
                return this.$store.getters['modal/isModalVisible'] === 'errorModal' ? true : false;
    },
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

.userDetails {
    opacity:0.8;
}

@media only screen and (max-width: 750px) {
  #userName{
      display:none;
  }
}
</style>