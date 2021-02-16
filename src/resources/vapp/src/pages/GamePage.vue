<template>
<div class="container text-center">

    <h4 class="my-2 text-primary"> Place a Bet from 0 to Everything in Your Bank !</h4>
    <score-card> </score-card>
    <br>
    <user-turn></user-turn>
    <br>
    <api-turn></api-turn>

</div>
    
</template>

<script>
import ApiTurn from '../components/Game/ApiTurn';
import UserTurn from '../components/Game/UserTurn';
import ScoreCard from '../components/Game/ScoreCard';

export default {

    components:{
        ApiTurn,
        UserTurn,
        ScoreCard,
    }
    
}
</script>

<style scoped>
   

</style>