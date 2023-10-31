<template lang="">
  <div class="nav" @mouseover="fadein" @mouseleave="fadeout">
    <div class="nav-nav">
        <div class="nav-item">
            <a href="/" class="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                <span class="link-text">home</span>
            </a>
        </div>
        <div class="nav-item" v-if="this.room">
            <button @click="invite" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                <span class="link-text">invite</span>
            </button>
        </div>
        
     
    <div class="cons" >
        <div class="nav-item" v-for="el in recent">
            <a :href="'/'+el" class="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"/></svg>
                <span class="link-text">{{el}}</span>
            </a>
       </div>
    </div>
   <div class="nav-item">
            <a href="/settings" class="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                <span class="link-text">settings</span>
            </a>
        </div>
    </div>
  </div>
</template>
<script>
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient('https://fvofzvyfqveudmkkbdqn.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2Z6dnlmcXZldWRta2tiZHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NDcxODUsImV4cCI6MjAxMDQyMzE4NX0.CW5FbiNWTLDwdpw_ojtUWH5DHGOTBmZJZzhDqYRLpLA")
import { store } from '../../store';
const supabase = store.supabase
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
let mobileCheck = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? true : false;
export default {
  props: ['room'],
  data() {
    return {
      recent: [],
    }
  },
  methods: {
    async fadein(e) {
      if (mobileCheck) {
        // console.log(window.mobileCheck(),e);
        // document.querySelectorAll(".cons .nav-link").forEach((el)=>el.style.pointerEvents = "none")
        await sleep(100)
        // if (!this.hover) {
        document.querySelectorAll(".cons .nav-link").forEach((el) => { el.style.pointerEvents = "all" })
      }
      // }
    },
    async fadeout() {
      if (mobileCheck) {
        document.querySelectorAll(".cons .nav-link").forEach((el) => el.style.pointerEvents = "none")
      }
    },
    async invite() {
      let names = prompt("Invite name")
      let { data, err } = await supabase
        .from('bros')
        .select('*')
        .eq("display_name", names)
      let arr = JSON.parse(data[0].inbox)
      if (!arr.includes(this.room)) {
        arr.push(this.room)
        await supabase
          .from('bros')
          .update({ inbox: arr })
          .eq("display_name", names)
          .select()
      }
    }
  },
  async mounted() {
    if (localStorage.getItem('login')) {
      let { data, error } = await supabase
        .from('bros')
        .select('*')
        .eq("name", localStorage.getItem('name'))
      this.recent = JSON.parse(data[0].pagees)
    }
    else { this.recent = JSON.parse('[]') }
  }
}
</script>
<style scoped>
* {
  font-size: 16px;
  font-family: 'Open Sans';
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #212529;
  --bg-secondary: #141418;
  --transition-speed: 600ms;
  cursor: url("../../assets/cursor3.png"), none;
  margin: 0%;
  padding: 0%;
  scrollbar-color: #30363b #000000;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  font-family: 'gg sans';
}

.nav {
  left: 0px;
  position: fixed;
  min-height: 130vh;
  /*calc(100vh - 41px); */
  width: clamp(20px, 6vw, 25px);
  background-color: var(--bg-primary);
  transition: width 600ms ease;
  border-right: 1px solid white;
  z-index: 1;
  padding: 1px;
  /* padding-left: 0.3vw; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

.nav-nav {
  padding: 0;
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px
}

.nav-item {
  pointer-events: none;
  opacity: 0;
  transition: 3ms;
}

.nav-item:last-child {
  /* margin-top: auto; */
  margin-bottom: auto;
}

.nav-link {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 68px;
  width: clamp(60px, 10vw, 100px);
  border-radius: 10%;
  transition: 300ms;
  pointer-events: all;
  filter: opacity(0.7);
}

.nav-link:hover {
  filter: opacity(1);
  outline: 1px solid white;
  color: var(--text-secondary);
}

.cons .nav-link {}

.nav:hover .nav-item {
  display: flex;
  opacity: 1;
  transition: 1s;
}

.nav:hover .nav-link {
  display: flex;
  /* pointer-events: all; */
  transition: 1s;
}

.nav:hover {
  width: clamp(63px, calc(10vw + 13px), 103px);
}

.nav:hover .cons {
  /* display: inline; */
}

.link-text {
  color: wheat;
  text-decoration: none;
}

.nav-link svg {
  fill: white;
  font-size: 25px;
  min-width: calc(5vw + 7px);
}

.cons {
  /* display: none; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 50vh;
  padding-top: 1px;
  padding: 1px;
  scroll-behavior: smooth;
  scrollbar-color: #30363b00 #00000000;
  scrollbar-width: none;
}

.cons::-webkit-scrollbar {
  display: none;
}

@media (max-width: 668px) {
  .nav-link svg {
    /* display: none; */
  }

  .nav-link {
    /* border-radius: 50%; */
    /* margin-bottom: 10px; */
    /* outline: 1px solid white; */
    /* border-bottom: 1px solid white;; */
  }
}
</style>