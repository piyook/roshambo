<template>
  <div>
    <div v-if="!isAiTurn" class="centreFlex">
      <h1>Enter Your Stake</h1>
      <form  class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            id="userStakeInput"
            type="text"
            class="form-control"
            placeholder="Enter A Stake"
            v-model.number="userStake"
          />
        </div>
      </form>
    </div>

    <button
      v-if="!isAiTurn"
      type="button"
      class="btn btn-lg btn-success my-2"
      @click="play"
    >
      Play Now!
    </button>

    <button
      v-if="isAiTurn"
      type="button"
      class="btn btn-lg btn-success mb-2"
      @click="again"
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
            :src="'/img/' + userChoice + '.png'"
            width="250"
          />
        </div>

        <div class="iconCard">
          <h3>AI GUESS</h3>
          <img
            v-if="apiGuessResult"
            :src="'/img/' + apiGuessResult + '.png'"
            width="250"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    async play() {
      this.apiText = null;
      this.apiResult = null;

      //TODO - add error modal
      if (this.userStake > this.$store.getters["api/getUserBank"]) {
        alert("not enough funds - sorry");
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

      for (i = 0; i < 6; i++) {
        let values = ["rock", "paper", "scissors", "lizard", "spock"];
        let choice = Math.floor(Math.random() * 5);
        this.apiGuess = values[choice];
        await delay(300);
      }

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
    },
  },
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
</style>