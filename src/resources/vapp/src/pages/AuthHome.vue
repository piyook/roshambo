<template>
    <div class="container text-center">

        <hi-scores></hi-scores>

        <div id="buttonBar">

            <button 
                type="button" 
                class="btn btn-primary btn-lg m-3" 
                @click.prevent="showRules"
            >
                <span v-if="isRules"> Hide Rules </span>
                <span v-else> Show Rules </span>
            </button>

            <button 
                type="button" 
                class="btn btn-danger btn-lg m-3" 
                @click.prevent="playGame"
            >
               Start Game
            </button>

        </div>

            <home-rules v-if="isRules"></home-rules>
    </div>
</template>

<script>
import HomeRules from "@/components/HomePage/HomeRules";
import HiScores from "@/components/Game/HiScores";

export default {

    components: {
        HomeRules,
        HiScores,
    },
    data(){
        return {
            isShowRules:false,
        }
    },
    computed:{
        isRules(){
            return this.isShowRules;
        }
    },

    methods:{
        showRules(){
          
            this.isShowRules = !this.isShowRules;
          
        },
        playGame(){
            this.$router.push('/game');
        }
    }
    
}
</script>

<style scoped>

button {
    border-radius:10px;
}

</style>