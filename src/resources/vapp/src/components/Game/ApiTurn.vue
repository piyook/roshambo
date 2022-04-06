<template>
  <div>
    <div v-if="!isAiTurn" class="centreFlex">
      <h2 class="text-primary mr-2">Enter Stake</h2>
      <form  class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            id="userStakeInput"
            type="number"
            class="form-control text-primary"
            placeholder="Enter A Stake"
            v-model.number="userStake"
          />
        </div>
      </form>
    </div>

    <button
      v-if="!isAiTurn"
      type="button"
      class="btn btn-lg btn-success mt-4"
      @click.prevent="play"
    >
      Play Now!
    </button>

    <button
      v-if="apiResultCmp"
      type="button"
      class="btn btn-lg btn-success mb-2"
      @click.prevent="again"
    >
      Play Again
    </button>

    <div v-if="apiGuessResult">
      <h1 class="display-4 mt-3 mb-3" :class="resultBg">{{ apiResultCmp }}</h1>

      <h1 class="display-5 mb-3" :class="resultText">{{ apiTextCmp }}</h1>

      <div class="centreFlex">
        <div class="iconCard">
          <h3>YOUR GUESS</h3>
          <img
            v-if="userChoice"
            :src="'img/' + userChoice + '.png'"
          />
        </div>

        <div class="iconCard">
          <h3>AI GUESS</h3>
           <transition name="icon" mode="out-in">
              <img
                v-if="apiGuessResult"
                :src="'img/' + apiGuessResult + '.png'"
                :key="Math.random()"
                width="250"
              />
            </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from '@/utils/modal';
import { Spinner } from "@/utils/spinner";
export default {
  data() {
    return {
      apiGuess: null,
      userGuess: null,
      userStake: 0,
      apiImage: null,
      apiText: null,
      apiResult: null,
    };
  },
  computed: {
    userChoice() {
      return this.userGuess;
    },
    apiGuessResult() {
      return this.apiGuess;
    },
    apiTextCmp() {
      return this.apiText;
    },
    apiResultCmp() {
      return this.apiResult;
    },
    resultBg() {
      if (this.apiResult === "draw") {
        return "bg-warning";
      }

      return this.apiResult === "win" ? "bg-success" : "bg-danger";
    },
    resultText() {
      if (this.apiResult === "draw") {
        return "text-warning";
      }

      return this.apiResult === "win" ? "text-success" : "text-danger";
    },
    isAiTurn() {
      return this.$store.getters["api/getIsAiTurn"];
    },
  },
  methods: {
    Spinner,
    async play() {
      this.Spinner(true);

      this.apiText = null;
      this.apiResult = null;

      //show alert message if user doesnt have enough money in bank
      if (this.userStake <= 0 || typeof(this.userStake) !== "number" ) {
        await Modal('modalTwo');
        return;
      }

      const bankAmount = this.$store.getters["api/getUserBank"];

      if (this.userStake > bankAmount || bankAmount === 0) {

      //reset bank of user wants new game
      if (await Modal('modalOne')) {
        this.Spinner(true);
        await this.$store.dispatch('api/resetBank');
        await this.$store.dispatch('api/getUserBank');
        this.Spinner(false);
      }
      
        return;
      }

      

      this.$store.commit("api/updateAiTurn", { status: true });

      this.userGuess = this.$store.getters["api/getUserChoice"];

      let result = await this.$store.dispatch("api/getAPIGuess", {
        userGuess: this.userGuess,
        userStake: this.userStake,
      });

      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      var i;

     this.Spinner(false);

      for (i = 0; i < 5; i++) {
        let values = ["rock", "paper", "scissors", "lizard", "spock"];
        let choice = Math.floor(Math.random() * 5);
        this.apiGuess = values[choice];
        await delay(1300);
      }
        this.apiGuess = result[0];
        await delay(1300);

        [this.apiGuess, this.apiText, this.apiResult] = result;

        this.updateScores(this.apiResult);
    },
    updateScores(result) {

      if (result === "draw") {
        this.$store.commit("api/updateDraws");
        
      }

      if (result === "win") {
        this.$store.commit("api/updateWin");
        this.$store.commit("api/updateSessionWinnings",{stake : +this.userStake});
      }

      if (result === "lose") {
        this.$store.commit("api/updateLosses");
        this.$store.commit("api/updateSessionWinnings",{stake : -this.userStake});
      }

      this.$store.dispatch('api/getUserBank');
    },

    again() {
      this.$store.commit("api/updateAiTurn", { status: false });
      this.apiGuess = null;
      this.apiResult = null;
    },
  },
  mounted(){
    this.$store.commit("api/updateAiTurn", { status: false });
  }
};
</script>

<style scoped>
.centreFlex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  margin: 20px;
  width:250px;
}

button {
  border-radius: 10px;
}

.iconCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid lightblue;
  margin: 10px;
  padding: 10px;
}

input {
  font-size: 150%;
  font-weight:bold;
}


.icon-enter-active {
  animation: icon 0.6s ease-in;
} 

.icon-leave-active {
  animation: icon 0.6s ease-out reverse;
 }

@keyframes icon {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

@media only screen and (max-width: 750px) {
  img {
    width:150px;
    margin:10px;
  }


input {
  font-size: 100%;
}
 h2 {
   font-size:18px;
 }
}
</style>