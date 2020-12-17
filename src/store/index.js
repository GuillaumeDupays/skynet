import { createStore } from "vuex";
import skynetService from "../services/skynetService";

export default createStore({
  state: {
    likes: 0,
    messagesContacts: {},
    parolesSkyNet: [],
  },
  mutations: {
    I_LIKE(state) {
      state.likes += 1;
    },
    ENVOYER_MESSAGE(state, payload) {
      const id = Date.now();
      state.messagesContacts[id] = payload;
      state.messagesContacts = {...state.messagesContacts};
    },
    GET_PAROLES(state, parolesSkyNet) {
      state.parolesSkyNet = parolesSkyNet;
    },
    AJOUTER_PAROLE(state, parole) {
      state.parolesSkyNet = [parole, ...state.parolesSkyNet];
    }
  },
  actions: {
    envoyerMessage(context, payload) {
      context.commit("ENVOYER_MESSAGE", payload);
    },
    getParolesSkyNet({ commit }) {
      skynetService.getConversations().then(res => {
        commit("GET_PAROLES", res.data);
      })
      .catch(err => console.error(err.message));
    },
    ajouterParole({ commit }, parole) {
      skynetService.ajouterParole().then(() => {
        commit("AJOUTER_PAROLE", parole);
      });
    }
  },
  //récupérer les données du state
  getters: {
    messages(state) {
      const messages = Object.keys(state.messagesContacts).map(key => state.messagesContacts[key]);
      return messages;
    }
  },
  modules: {}
});
