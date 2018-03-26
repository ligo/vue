// import * as types from "../multationtype"

const state={
  myNum:0,
}
const getters={
  isOdd:state=>{return state.myNum%2===0?"是局部A命名空间偶数" :"是局部A命名空间奇数"},
}

const mutations={
ADD_NUM(state){
  state.myNum++
},
DECREASE_NUM(state){
  state.myNum--
}
}

export default{
  namespaced: true,
  state,
  getters,
  mutations
}