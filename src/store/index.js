import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quantity: 0,
    //Artikel im Warenkorb
    cartValue: [
      {
        id: 1,
        name: "Hut",
        preis: 12,
        menge: 1,

      },
      {
        id: 3,
        name: "Hose",
        preis: 13,
        menge: 1
      },
      //Artikel im Katalog
    ],
    articles: [
      {
        id: 1,
        name: "Hut",
        preis: 12,
        menge: 0
      },
      {
        id: 2,
        name: "T-Shirt",
        preis: 16,
        menge: 0
      },
      {
        id: 3,
        name: "Hose",
        preis: 10,
        menge: 0
      }
    ]
  },
  mutations: {
    getQuantity(state) {
      var count = 0
      if (state.cartValue.length == 0) {
        state.quantity = 0
      }
      for (var i in state.cartValue) {
        count += state.cartValue[i].menge
        state.quantity = count
      }
    },
    plus(state, id) {
      for (var i = 0; i < state.cartValue.length; i++) {
        if (state.cartValue[i].id == id) {
          state.cartValue[i].menge += 1
          break
        }
      }

    },
    minus(state, id) {

      for (var i = 0; i < state.cartValue.length; i++) {
        if (state.cartValue[i].id == id) {
          state.cartValue[i].menge -= 1
          break
        }
      }
    },
    addToCart(state, article) {
      if (state.cartValue.length == 0) {
        article.menge = 0
        state.cartValue.push(article)
      }
      for (var i = 0; i < state.cartValue.length; i++) {


        if (state.cartValue[i].id == article.id) {
          state.cartValue[i].menge += 1
        }
        else {
          if (state.cartValue.some(check => check.id == article.id) == false) {
            state.cartValue.push(article)
          }
        }
      }
    },

    deleteFromCart(state, article) {
      var newCartValue = []
      for (var i = 0; i < state.cartValue.length; i++) {
        if (state.cartValue[i].id == article.id) {
          article.menge = 0
          continue
        }
        newCartValue.push(state.cartValue[i])
      }
      state.cartValue = newCartValue
    }


  },
})
