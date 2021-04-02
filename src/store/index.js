import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    setMessage(state,payload){
        state.messages.push(payload)
        console.log(payload.message);
    }
  },
  actions:{
      setMessage(context, payload){
          context.commit('setMessage',payload)
      }
  },
  getters:{
      messages(state){
          return state.messages;
      }
  }
})

export default store;