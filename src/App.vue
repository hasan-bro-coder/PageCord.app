<script>
// import Home from './components/Home.vue'
// import Chat from './components/Chat.vue'
// import NotFound from './components/Not.vue'
	
// const routes = {
//   '/': Home,
//   '/about': Chat
// }
// import Sidebar from "./components/other/sidebar.vue";

export default {
  data() {
    return {
      room: ""
    }
  },
  components: {
    // Sidebar,
  },
  computed: {
    isOnline(){
      return navigator.onLine
    }
    // currentView() {
      // return routes[this.currentPath.slice(1) || '/'] || NotFound
    // }
  },
  mounted() {
    let room = window.location.pathname == "/" || window.location.pathname == "/inbox" ? "nah" : window.location.pathname.replace("/", "");
    this.room = room;
   
  }
}
</script>

<template>
  <!-- <Sidebar v-if="room!='nah'" :room="room"></Sidebar> -->
	<!-- <router-view v-if="isOnline"></router-view> -->
  <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
  <!-- <div v-else class="text-light bg-dark h-100 w-100">
    bro your offline
    <br>
    i know your bored
    


  </div> -->
  <!--<component :is="currentView" />-->
</template>

<style>
 :root{
  --bg-color: #313338;
 }
	@font-face {
      font-family: 'gg sans';
      font-style: normal;
      font-weight: normal;
      src: local('./assets/gg sans Regular'), url('./assets/gg sans Regular.woff') format('woff');
      font-display: swap
    }

    @font-face {
      font-family: 'gg sans SemiBold Regular';
      font-style: normal;
      font-weight: normal;
      src: local('./assets/gg sans SemiBold'), url('./assets/gg sans Semibold.woff') format('woff');
      font-display: swap
    }
    ::-webkit-scrollbar {
      width: 5px;
    }
    
    
    ::-webkit-scrollbar-track {
    
      background-color: #000000;
      border-radius: 10px;
    }
    
    
    ::-webkit-scrollbar-thumb {
      background: #30363b;
      border-radius: 10px;
    }
	      * {
  cursor: url("./assets/cursor3.png"), none !important;
  margin: 0%;
  padding: 0%;
  scrollbar-color: #30363b #000000;
  scrollbar-width:thin;
  scroll-behavior: smooth;
  font-family: 'gg sans';
}
 ul li,
    ul li p,
    ul li h1,
    ul li h2,
    ul li h3,
    ul li h4,
    ul li li,
    ul li code,
    ul li a {
      font-family: "gg sans";
      font-weight: 400;
      white-space: pre-wrap;
      /* height: max-content !important; */
      /* overflow: auto !important; */
    } 
    ul li p{
      margin: 0 !important;
    }
    ul .massage .setting button{
      /* position: absolute; */
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      display: none;
      opacity: 0;
      flex-grow: 1;
    }
    ul .massage{
      /* position: absolute; */
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      /* flex-direction: column; */
      background-color: #000000;
      opacity: 1;
    }
    .setting{
      /* flex-grow: 2; */
      margin-left: auto;
      margin-right: 1px;
      left: auto;
      right: 10px;
      /* width: clamp(150px,30vw,200px); */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    /* .setting:hover .btn{

      transition: 1s;
      opacity: 1;
    } */
/*
	body {
  height: 100vh;
  /* opacity: 0; 
  background-color: #111111;
  /* display: flex; 
  /* justify-content: center; 
  /* background-color: rgb(48, 48, 48); 
} */
</style>