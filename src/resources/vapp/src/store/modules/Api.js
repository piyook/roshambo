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
        // setAverage(state, payload){
       
        //   state.average = payload.average;
        // },
        updateSessionWinnings(state, payload) {
    
          const newAmount = state.sessionWinnings + payload.stake;
          state.sessionWinnings = newAmount;
        }
   
  },

  actions:{

        async getAPIGuess(_, payload){
            return await APIService.game(payload);
        },

        // async updateAverage( context) {

        //   if (context.state.wins + context.state.losses + context.state.draws < 10) { return }

        //   const averageScore = Math.round(context.state.wins / (context.state.losses + context.state.wins + context.state.draws) * 100);
        //   context.commit('setAverage', {average:averageScore});

        //   const payload = { userScore : context.state.average,
        //               userId :  context.rootGetters['auth/getUserId']
        //             }
          
        //   await APIService.postScore(payload);

        //   context.state.wins=context.state.losses=context.state.draws=0;
         
        // },

        async getUserBank(context){

          const payload = {
            userId :  context.rootGetters['auth/getUserId']
          }
        
          const userBank = await APIService.getScore(payload);

          context.state.userBank = userBank;

        },
        // async getAllHiscores(_, payload){

        // },
        updateUserChoice(context, payload) {
          context.commit('updateChoice', payload);
        }

  },

 
   
}