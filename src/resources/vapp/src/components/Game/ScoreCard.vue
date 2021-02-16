<template>
    <section> 
        
        <div id="bankCard">
            <h3>Session Winnings: {{ winnings}} </h3>
            <h3>Your Bank: {{bank}}</h3>
        </div>

    <div id="scoreCard">
        <div class="scoreItem text-success"> 
            <h2> Wins: {{wins}}</h2> 
        </div>
         <div class="scoreItem text-danger"> 
            <h2> Losses: {{losses}}</h2>
         </div>
         <div class="scoreItem text-primary"> 
            <h2> Draws: {{draws}}</h2>
         </div>
    </div>

    </section>

</template>

<script>
export default {

    data(){
       
    },
    computed:{
        
        wins(){
            return this.$store.getters['api/getScores'][0]
        },
        losses(){
             return this.$store.getters['api/getScores'][1]
        },
        draws(){
            return this.$store.getters['api/getScores'][2]
        },
        games(){
            return (10 - (this.wins+this.losses+this.draws));
        },
        bank(){
            return this.$store.getters['api/getUserBank'];
        },
        winnings(){
            return this.$store.getters['api/getSessionWinnings'];
        }
    },
    mounted(){
        this.$store.dispatch('api/getUserBank');
    }
    
}
</script>

<style scoped>



 #scoreCard {
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        flex-wrap:wrap;
        padding:10px;
        border: 3px solid lightblue;
    }

.scoreItem {
    margin : 10px 40px 10px 40px;

}

#bankCard {
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        flex-wrap:wrap;
}

</style>