<template>
    <div class="container text-center">

        <hi-scores></hi-scores>

        <div id="buttonBar">

            <button type="button" class="btn btn-primary btn-lg m-3 max-width" @click.prevent="showRules">
                <span v-if="isRules"> Hide Rules </span>
                <span v-else> Show Rules </span>
            </button>

            <button type="button" class="btn btn-success btn-lg m-3" @click.prevent="playGame">
                Start Game
            </button>

        </div>

        <home-rules v-if="isRules"></home-rules>
    </div>
</template>

<script>
import HomeRules from "@/components/HomePage/HomeRules.vue";
import HiScores from "@/components/Game/HiScores.vue";
import { Spinner } from "@/utils/spinner.js";


export default {

    components: {
        HomeRules,
        HiScores,
    },
    data() {
        return {
            isShowRules: false,
        }
    },
    computed: {
        isRules() {
            return this.isShowRules;
        }
    },

    methods: {
        showRules() {

            this.isShowRules = !this.isShowRules;

        },
        playGame() {
            Spinner(true);
            this.$router.push('/game');
        },

    },
    mounted() {
        Spinner(false);
    },
    unmounted() {
        Spinner(false);
    }

}
</script>

<style scoped>
button {
    border-radius: 10px;
}
</style>