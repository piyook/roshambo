<template>
  <section class="text-center p-4 mt-4 border border-primary mb-5">
    <h2 class="text-center mt-2 mb-3">RULES</h2>

    <p class="mb-3">
      Start with 100 tokens in your bank and gamble a stake each turn.<br />
      <span class="win">Win</span> to get the stake added to your bank. <br />
      <span class="lose">Lose</span> and the stake is taken from your bank.<br />
      Draw and your stake is returned.<br />
      If your tokens reach zero then the game is over
    </p>

    <div id="imageDeck">
      <div
        class="itemCard"
        :class="isHighlighted(['icon', 'rock'])"
        @mouseover="changeClass('rock')"
        @mouseleave="changeClass(null)"
      >
        <h2 class="display-5 text-primary">Rock</h2>
        <img src="/img/rock.png" />
      </div>

      <div
        class="itemCard"
        :class="isHighlighted(['icon', 'paper'])"
        @mouseover="changeClass('paper')"
        @mouseleave="changeClass(null)"
      >
        <h2 class="display-5 text-primary">Paper</h2>
        <img src="/img/paper.png" />
      </div>

      <div
        class="itemCard"
        :class="isHighlighted(['icon', 'scissors'])"
        @mouseover="changeClass('scissors')"
        @mouseleave="changeClass(null)"
      >
        <h2 class="display-5 text-primary">Scissors</h2>
        <img src="/img/scissors.png" />
      </div>

      <div
        class="itemCard"
        :class="isHighlighted(['icon', 'lizard'])"
        @mouseover="changeClass('lizard')"
        @mouseleave="changeClass(null)"
      >
        <h2 class="text-primary">Lizard</h2>
        <img src="/img/lizard.png" />
      </div>

      <div
        class="itemCard"
        :class="isHighlighted(['icon', 'spock'])"
        @mouseover="changeClass('spock')"
        @mouseleave="changeClass(null)"
      >
        <h2 class="display-5 text-primary">Spock</h2>
        <img src="/img/spock.png" />
      </div>

      <ul class="list-group">
        <li
          class="list-group-item"
          :class="isHighlighted(['scissors', 'paper'])"
        >
          Scissors Cuts Paper
        </li>
        <li
          class="list-group-item rock"
          :class="isHighlighted(['paper', 'rock'])"
        >
          Paper Covers Rock
        </li>
        <li class="list-group-item" :class="isHighlighted(['rock', 'lizard'])">
          Rock Crushes Lizard
        </li>
        <li class="list-group-item" :class="isHighlighted(['lizard', 'spock'])">
          Lizard Poisons Spock
        </li>
        <li
          class="list-group-item"
          :class="isHighlighted(['spock', 'scissors'])"
        >
          Spock Smashes Scissors
        </li>
      </ul>

      <ul class="list-group my-4">
        <li
          class="list-group-item"
          :class="isHighlighted(['scissors', 'lizard'])"
        >
          Scissors Stab Lizard
        </li>
        <li class="list-group-item" :class="isHighlighted(['lizard', 'paper'])">
          Lizard Eats Paper
        </li>
        <li class="list-group-item" :class="isHighlighted(['paper', 'spock'])">
          Paper Disproves Spock
        </li>
        <li
          class="list-group-item rock"
          :class="isHighlighted(['spock', 'rock'])"
        >
          Spock Vaporizes Rock
        </li>
        <li
          class="list-group-item rock"
          :class="isHighlighted(['rock', 'scissors'])"
        >
          Rock Blunts Scissors
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeClass: null,
    };
  },

  computed: {},
  methods: {
    changeClass(className) {
      this.activeClass = className;
    },
    isHighlighted(className) {
      if (className[0] === "icon") {
        if (className[1] === this.activeClass) {
          return "iconSelected";
        }
        return false;
      }

      if (className.includes(this.activeClass)) {
        if (className[0] === this.activeClass) {
          return "win";
        } else {
          return "lose";
        }
      }
      return false;
    },
  },
};
</script>

<style scoped>
div #imageDeck {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

img {
  width: 120px;
  margin: 10px 40px 40px 40px;
}

.itemCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.itemCard:hover {
  cursor: pointer;
}

li {
  border-color: white;
}

.lose {
  background-color: rgb(253, 157, 157, 0.7);
}

.win {
  background-color: rgba(168, 248, 148, 0.7);
}

.iconSelected {
  border: red 1px solid;
}
</style>