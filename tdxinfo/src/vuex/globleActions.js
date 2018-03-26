import axios from "axios";
export const v_db=({commit})=>{
    setTimeout(()=>{
      console.log(this)  
        commit("ADD_NUM")
    },2000)

}

export const v_change_data=({commit})=>{
    axios.get("https://cnodejs.org/api/v1/topics",{
        page:1,
        tab:"ask",
        limit:2,
        mdrender:"false"
      }).then(res => {
        commit("ADD_DATA",res.data.data)
        //  console.log(this.msg,"this.msg")
      })
}
// onloading(){
//     axios.get("https://cnodejs.org/api/v1/topics",{
//       page:1,
//       tab:"ask",
//       limit:2,
//       mdrender:"false"
//     }).then(res => {
//         res.data.data.map(item =>{
//           this.msg.push(item)
//         })
//        console.log(this.msg,"this.msg")
//     })
//   }