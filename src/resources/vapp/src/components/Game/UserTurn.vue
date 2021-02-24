<template>
<section v-if="!isAiTurn">
    <h3 class="text-warning mt-4 mb-5">Click On An Item Below To Choose</h3>

    <div class="mb-5">
         <img 
         :class="isChosen('rock')" 
         src="/img/rock.png"  
         @click='chooseItem("rock")'>

         <img 
         :class="isChosen('paper')" 
         src="/img/paper.png" width=150  
         @click='chooseItem("paper")'>

         <img 
         :class="isChosen('scissors')" 
         src="/img/scissors.png"  
         @click='chooseItem("scissors")'>

         <img 
         :class="isChosen('lizard')" 
         src="/img/lizard.png"  
         @click='chooseItem("lizard")'>

         <img 
         :class="isChosen('spock')" 
         src="/img/spock.png"  
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
    width:150px;
    transition: all 0.4s ease-in-out;
   
}

img:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.selected {
    background-color:rgba(107, 245, 65, 0.589);
    border-radius:50%;
    animation: animateSelect 0.8s ease-in-out forwards;
}

@keyframes animateSelect {

    from {
        transform: scale(1.0) rotateY(0deg);
    }

    to {
        transform: scale(1.1) rotateY(360deg);
    }
}

@media only screen and (max-width: 750px) {
  img {
    width:90px;
    padding:10px;
  }

}



</style>