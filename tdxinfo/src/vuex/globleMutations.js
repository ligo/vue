
export const ADD_NUM=(state)=>{
    state.v_myNum++
};
export const DECREASE_NUM=(state)=>{
        state.v_myNum--
};

export const ADD_DATA=(state,v)=>{
    // state.v_data =[...state.v_data]
    state.v_data.push(...v)
};
// 判断用户登录状态
export const v_changeLogin=(state)=>{
    state.v_islogin = 1
    console.log(state.v_islogin)
};
