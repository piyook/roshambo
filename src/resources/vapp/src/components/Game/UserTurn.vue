<template>
<section v-if="!isAiTurn">
    <h2 class="display-4 text-warning">Click On One Item Below To Choose</h2>

    <div>
         <img 
         :class="isChosen('rock')" 
         src="/img/rock.png" 
         width=150 
         @click='chooseItem("rock")'>

         <img 
         :class="isChosen('paper')" 
         src="/img/paper.png" width=150  
         @click='chooseItem("paper")'>

         <img 
         :class="isChosen('scissors')" 
         src="/img/scissors.png"
         width=150  
         @click='chooseItem("scissors")'>

         <img 
         :class="isChosen('lizard')" 
         src="/img/lizard.png" 
         width=150  
         @click='chooseItem("lizard")'>

         <img 
         :class="isChosen('spock')" 
         src="/img/spock.png" 
         width=150  
         @click='chooseItem("spock")'>

    </div>
</section>
</template>

<script>
export default {

    data(){
        return {
            userChoice : 'scissors',
        }
    },
    computed: {
             isAiTurn(){
                return this.$store.getters['api/getIsAiTurn'];
        },

    },
    methods:{
        chooseItem(item){
            this.userChoice = item;
            this.$store.dispatch("api/updateUserChoice",  {userChoice : this.userChoice});
        },
        isChosen(item){
            if (this.userChoice === item) {return 'selected'}
            return false;
        }
    },
    watch:{


    }
    
}
</script>

<style scoped>

div {
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

img {
    padding:20px;
}

.selected {
    border: 2px red solid;
    border-radius:50%;
}

</style>