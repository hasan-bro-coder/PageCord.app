<template lang="">
    <Sidebar></Sidebar>
    <div class="body bg-dark text-light">
        <ul class="list-group list-group-flush">
            <div v-if="inbox[0]" v-for="i in inbox" style="" class="h-100 list-group-item bg-dark text-light d-flex justify-content-between" ><h1> {{i}} </h1><button class="btn btn-outline-primary" @click=accept(i)>accept</button></div>
            <div v-else class="h-100 list-group-item bg-dark text-light d-flex justify-content-between" ><h1> NOTHING HERE BRO </h1><a href="/" class="btn btn-outline-primary">go back</a></div>
        </ul>
    </div>
</template>
<script>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://fvofzvyfqveudmkkbdqn.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2Z6dnlmcXZldWRta2tiZHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NDcxODUsImV4cCI6MjAxMDQyMzE4NX0.CW5FbiNWTLDwdpw_ojtUWH5DHGOTBmZJZzhDqYRLpLA")
import Sidebar from "./other/sidebar.vue"
export default {
components:{
    Sidebar
  }, 
   data() {
    return {
        inbox:[]
    }
   },
   methods:{
    async accept(name){
        console.log(name);
      let { data, err } = await supabase
      .from('bros')
      .select('*')
      .eq("name", localStorage.getItem('name'))
      let arr = JSON.parse(data[0].pagees)
      if (!arr.includes(name)){
          arr.push(name)
          console.log(arr);
        await supabase
      .from('bros')
      .update({ pagees: arr })
      .eq("name", localStorage.getItem('name'))
      .select()
      } 
    // {
    //     let { data, err } = await supabase
    //   .from('bros')
    //   .select('*')
    //    .eq("name", localStorage.getItem('name'))
    //   let arr = JSON.parse(data[0].pages)
    //   if (!arr.includes(name)){
    //     arr.push(name)
    //     await supabase
    //   .from('bros')
    //   .update({ pages: arr })
    //   .eq("name", localStorage.getItem('name'))
    //   .select()
    //   } 
    // }
    {
    let { data, err } = await supabase
      .from('bros')
      .select('*')
      .eq("name", localStorage.getItem('name'))
      let arr = JSON.parse(data[0].inbox)
      console.log("inbox: " + arr);
      function arrayRemove(arr, value) {
 
 return arr.filter(function (geeks) {
     return geeks != value;
 });

}
      if (arr.includes(name)){
        
    //       arr.push(name)
    //       console.log(arr);

        await supabase
      .from('bros')
      .update({ inbox: arrayRemove(arr,name) })
      .eq("name", localStorage.getItem('name'))
      .select()
      }
    } 
    alert("bro your in")
    window.location.pathname = "/"+name
    }
   },
    async mounted(){
        let { data, err } = await supabase
      .from('bros')
      .select('*')
      .eq("name", localStorage.getItem('name'))
      let arr = JSON.parse(data[0].inbox)
      console.log(data);
            arr.forEach(element => {
            this.inbox.push(element)
            })
    },
}
</script>
<style scoped>
    .body{
        min-height:100vh;
        padding-left: 35px;
    }
</style>