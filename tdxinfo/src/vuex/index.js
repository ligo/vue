import Vue from 'vue'
import Vuex from 'vuex'
// import moduleA from './modules/moduleA'
import state from './globleState'
import * as getters from './globleGetters'
import * as actions from './globleActions'
import * as mutations from './globleMutations'



Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // modules: {
  //   namespaced: true,
  //   moduleA
  // }
})

// console.log(store.state)
// if (module.hot) {
//   console.log("热重载12")
//   module.hot.accept([
//     './globleGetters',
//     './globleMutations',
//     './globleActions',
//     "./modules/moduleA"
//   ], () => {
//   console.log("热重载23")
//     store.hotUpdate({
//       getters: require('./globleGetters'),
//       actions: require('./globleActions'),
//       mutations: require('./globleMutations'),
//       modules: {moduleA:require("./modules/moduleA").default}
//     })
//   })
// }

export default store

