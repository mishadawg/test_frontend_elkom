import Vue from 'vue';
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

const dataUrl = "https://fakerapi.it/api/v1/persons?_locale=ru_RU&_quantity=10";

export default new Vuex.Store({
  state: {
    _fullUsersData: null,
  },
  mutations: {
    mutateData(state, payload) {
      state._fullUsersData = payload.data;
    },
  },
  actions: {
    getDataFromServer(context) {
      axios.get(dataUrl).then((response) => {
        context.commit("mutateData", response.data);
      });
    },
  },
  getters: {
    fullUsersData: (state) => state._fullUsersData,
  },
});