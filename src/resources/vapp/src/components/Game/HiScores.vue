<template>
    <section>
        <h1 class="text-primary mt-3"> Rock, Paper, Scissors, Lizard, Spock </h1>
        <h1 class="mt-2"> Higest Scorers </h1>

        <table class="table mt-3">
            <thead class="bg-secondary text-white">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody v-for="score in hiScores" :key="score.created_at">
                <tr>
                <td>{{score.name}}</td>
                <td>{{score.score}}</td>
                </tr>
            </tbody>
    </table>
       
    </section>
</template>

<script>
export default {

    data(){
        return{
            hiScores:[],
        }
    },

    async mounted(){

    this.hiScores = await this.$store.dispatch('api/loadHiScores');
   
    }
    
}
</script>

<style scoped>

    table tr th {
        border-top:2px solid white;
        border-bottom:2px solid white;
      
    }

    table tr td {
      
        border-bottom:1px solid white;
        border-top:1px solid white;
    }


</style>