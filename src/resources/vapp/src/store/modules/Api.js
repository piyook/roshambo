// import router from "@/router";
// import { getError } from "@/utils/helpers";
import APIService from "@/services/APIService";

export default {

  namespaced : true,

  state() {
          return {
           userChoice:'scissors',
           isAiTurn:false,
           wins:0,
           losses:0,
           draws:0,
           userBank:100,
           sessionWinnings:0,
           hiScores:[],
          }
  },

  getters: {
      getUserChoice(state){
        return state.userChoice;
      },
      getIsAiTurn(state){
        return state.isAiTurn;
      },
      getScores(state){
        return [state.wins, state.losses, state.draws];
      },
      getUserBank(state){
        return state.userBank;
      },
      getSessionWinnings(state){
        return state.sessionWinnings;
      },
      getHiScores(state){
        return state.hiScores;
      }
  },

  mutations: {

        updateChoice(state, payload) {
          state.userChoice = payload.userChoice;
        },
        updateAiTurn(state, payload) {
          state.isAiTurn = payload.status;
        },
        updateWin(state){
          state.wins ++;
        },
        updateLosses(state){
          state.losses ++;
        },
        updateDraws(state){
          state.draws ++;
        },
        updateSessionWinnings(state, payload) {
    
          const newAmount = state.sessionWinnings + payload.stake;
          state.sessionWinnings = newAmount;
        },
        resetSessionWinnings(state){
          state.sessionWinnings = 0;
        }
   
  },

  actions:{

        async getAPIGuess(_, payload){
            return await APIService.game(payload);
        },

        async loadHiScores(state) {

            const results  = await APIService.getHiscores();
            state.hiScores = results;
            return state.hiScores;
        },

        async getUserBank(context){

          const payload = {
            userId :  context.rootGetters['auth/getUserId']
          }
        
          const userBank = await APIService.getScore(payload);

          context.state.userBank = userBank;

        },

        async resetBank() {
            await APIService.bankReset();
        },
     
        updateUserChoice(context, payload) {
          context.commit('updateChoice', payload);
        }

  },

 
   
}