import Vue from 'vue';
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

const dataUrl = "https://fakerapi.it/api/v1/persons?_locale=ru_RU&_quantity=10";

export default new Vuex.Store({
  state: {
    _fullUsersData: null,
    _filter: null,
    _currentUser: null,
    _collectionOfAvatars: [
      'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    ]
  },
  mutations: {
    mutateData(state, payload) {
      state._fullUsersData = payload.data?.map((item) => {
        item.image = state._collectionOfAvatars[
          Math.floor(Math.random() * state._collectionOfAvatars.length)
        ];
        return item;
      })
    },
    goFilter(state, payload) {
      state._filter = payload;
      if(payload){
        let splittedPayload = payload?.split(' ');
        state._filter = {
          lastname: splittedPayload[0],
          fullname: splittedPayload[1],
        }
        state._currentUser = state._fullUsersData.filter(
          (item) => 
            item?.fullname === state._filter.fullname || 
            item?.lastname === state._filter.lastname
        )[0]
      }else{
        state._filter = null;
      }
    },
    chooseCurrentUser(state, payload) {
      state._currentUser = payload;
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
    filterValue: (state) => state._filter,
    currentUser: (state) => state._currentUser,
  },
});