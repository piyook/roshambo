<template>

<section class="text-center p-4 mt-4 border border-primary">

    <h1 class="display-5 text-primary">Rock, Paper, Scissors, Lizard, Spock</h1>
    <div class="display-4">
        A Simple Vue/Laravel Demo App
    </div>

    <button 
        type="button" 
        class="btn btn-primary btn-lg m-3" 
        @click.prevent="login"
    >
    Play now 
    </button>

</section>
    
</template>

<script>


export default {

    methods:{
        login(){
            this.$router.push({ name: 'Authorized'});
        }
    }
    
}
</script>

<style scoped>

button {
        border-radius:10px;
}

</style>

