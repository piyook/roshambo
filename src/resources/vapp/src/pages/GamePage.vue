<template>
<div class="container mb-5 text-center">
    <Teleport to="body">
    <alert-modal :isActive="ModalOne">
        <template v-slot:title>NOT ENOUGH FUNDS</template>
    Enter a Lower Stake or Buy Some More Tokens<br>
    As Its a Demo, Just Start A New Game<br>
    to Get Another 100 Tokens.
    <template v-slot:yesButton>NEW GAME</template>
    <template v-slot:cancelButton>CANCEL</template>
    </alert-modal>
    </Teleport>

    <Teleport to="body">
    <alert-modal :isActive="ModalTwo">
        <template v-slot:title>INVALID STAKE</template>
    Please Enter A Number Greater Than Zero
    <template v-slot:yesButton>OK</template>
    <template v-slot:cancelButton>CANCEL</template>
    </alert-modal>
    </Teleport>

    <score-card> </score-card>
    <br>
    <user-turn></user-turn>
    <br>
    <api-turn></api-turn>

</div>
    
</template>

<script>
import ApiTurn from '../components/Game/ApiTurn.vue';
import UserTurn from '../components/Game/UserTurn.vue';
import ScoreCard from '../components/Game/ScoreCard.vue';

export default {

    

    computed:{
            ModalOne() {
                return this.$store.getters['modal/isModalVisible'] === 'modalOne' ? true : false;
    },
            ModalTwo() {
                return this.$store.getters['modal/isModalVisible'] === 'modalTwo' ? true : false;
    },

    },

    components:{
        
        ApiTurn,
        UserTurn,
        ScoreCard,
    }
    
}
</script>

<style scoped>
   

</style>