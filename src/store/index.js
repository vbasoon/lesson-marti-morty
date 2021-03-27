import { createStore } from "vuex";
import product from "./data";

export default createStore({
  state: {
    cards: {},
  },
  mutations: {
    setCards(state, { cards }) {
      state.cards = cards;
    },
  },
  actions: {
    getProduct() {
      return console.log(products);
    },
  },
});
