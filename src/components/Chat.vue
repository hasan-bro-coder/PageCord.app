<template class="bg-dark text-light pb-5">
  <div v-if="!not" class="bg-dark text-light pb-5 body" >
    <!-- <Sidebar :room="room"></Sidebar> -->
    <div class="text-center position-fixed " style="background-color: #21252921; width:70vw;z-index: 100;top: -6px;left:50%;transform: translateX(-50%);display: flex;justify-content: center;align-items: center;">
      <div>
    <h1 class="text-center" >Page-cord</h1>
    <h6 class="text-center text-secondary" style="margin-top: -10px;">Page:</h6>
    </div>
    <a @click="image" class="position-fixed" style="right: 10px;left: auto"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" style="height: 25px;width: 25px;fill:aliceblue"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg></a>
    </div>
    <ul class="list-group list-group-flush" style="padding-top: 100px;" >
      <div @click.self="hides('none',c.created_at)" data-aos="fade-in" class="list-group-item bg-dark text-light massage d-flex align-items-center gap-5" v-for="c in chat" :id="c.id">
        <li style="height: max-content !important;overflow: auto !important;white-space: pre-warp" v-html="(c.img ? `<p style='margin: 0px !important;padding: 0px !important; font-family: gg sans SemiBold Regular;font-size:20px'>${c.user || 'guy who doasnt exists'} :</p>`+c.massage : `<p style='margin: 0px !important;padding: 0px !important; font-family: gg sans SemiBold Regular;font-size:20px'>${c.user || 'guy who doasnt exists'} :</p>`+$sanitize(mas(c.massage || '*empty massage*')))"></li>
        <div @click="shows(c.id,c.created_at)" class="setting position-absolute" v-if="c.user == you.name">
        <button class="btn btn-outline-danger" style=" min-width: 60px !important;" @click="!c.img ? delet(c.id) : img_delet(c.id)">delate</button>
        <button class="btn btn-outline-success" style=" min-width: 60px !important;" v-if="!c.img" @click="updat(c.id,c.massage)">update</button>
        <div style="color: gray;" id="texts" :class="c.created_at" >{{ c.created_at.split("T")[1].split(":")[0] + ":"+ c.created_at.split("T")[1].split(":")[1]+ " " +c.created_at.split("T")[0].split("-")[2]+"/" +c.created_at.split("T")[0].split("-")[1]  }}</div></div>
      </div>
    </ul>
    <form id="form" class="w-100 z-3 d-flex position-fixed" action="">
      <h6 v-if="is_typing" v-text="typer + ' is typing'" style="margin: -20px 0px 0px calc(50% - 50px);" class="position-fixed z-1"></h6>
      <div class="input-group mb-1">
        <button class="btn btn-outline-light plus" type="submit">+</button>
        <textarea id="input" required value="yo" class="pt-2 form-control form-control-sm" type="text"
          placeholder=" Type "></textarea>
        <input id="file" type="file" hidden />
        <button class="btn btn-outline-primary" type="submit">send</button>
      </div>
    </form>
    <div class="side border border-primary">
      <h4 class="text-center">Users:</h4>
      <ul class="list-group list-group-item-dark"></ul>
    </div>
  </div>
  <div v-else class="body d-flex justify-content-center align-items-center text-light">
    <h1 class="text-center" v-html="nottext"></h1>
    <a href="/" class="btn btn-outline-light">go back</a>
  </div>
</template>
<script>
import Sidebar from "./other/sidebar.vue";
import { io } from "socket.io-client";
import {store} from '../store'

const supabase = store.supabase
import { marked } from "marked";
let you = {
  name: localStorage.getItem("dname") || "unknown",
  id: 0,
};
export default {
  data() {
    return {
      not: false,
      nottext: "donno bruh (505)",
      room: "",
      is_typing: false,
      typer: "",
      chat:[],
      you: you,
      imag: false,
      currid:0,
      setted:false,
    };
  },
  components: {
    Sidebar,
  },
  methods:{
    shows(id,created_at){
      if (!this.setted) {
        document.getElementById(id).querySelectorAll(".btn").forEach((el)=>{
          el.style.display = "inline"
          el.style.opacity = "1"
          document.getElementById(id).querySelector(`#texts`).innerText ='::'
        })
        this.currid = id
        this.setted = true
      }else{
        document.getElementById(this.currid).querySelectorAll(".btn").forEach((el)=>{
          if (el.style.display == "inline") {
            el.style.opacity = "0"
            el.style.display = "none"
            document.getElementById(this.currid).querySelector(`#texts`).innerText = created_at.split("T")[1].split(":")[0] + ":"+ created_at.split("T")[1].split(":")[1]+ " " +created_at.split("T")[0].split("-")[2]+"/" +created_at.split("T")[0].split("-")[1]
          }
        })
      this.setted = false
    }
  },
  hides(id,created_at){
    
    if (id != "none") {
      this.currid = id
    }
    if (this.currid == 0) {
      return 0
    }
    document.getElementById(this.currid).querySelectorAll(".btn").forEach((el)=>{
      if (el.style.display == "inline") {
        el.style.opacity = "0"
        el.style.display = "none"
        document.getElementById(this.currid).querySelector(`#texts`).innerText = created_at.split("T")[1].split(":")[0] + ":"+ created_at.split("T")[1].split(":")[1]+ " " +created_at.split("T")[0].split("-")[2]+"/" +created_at.split("T")[0].split("-")[1]
      }
    })
    this.setted = false
  },
  mas(msg){
    return marked.parse(msg);
  },
  async img_delet(id){
    const { error } = await supabase
    .from('media')
    .delete()
    .eq('id', id)
    socket.emit("reload",this.room)
    this.imag = !this.imag
    this.ins()
  },
    async image(){
      this.imag = !this.imag
      if(this.imag){
        this.chat = [];
        let { data, error } = await supabase
        .from("media")
        .select("*")
        .eq("room_name", this.room)
        .order('id', { ascending: true });
        if (!error && data.length > 0) {
          data.forEach((el) => {
            let els = {
              user : el.user,
              img: true,
              id : el.id,
              created_at: el.created_at,
              massage: `<img loading="lazy" style="max-width: 70vw" src="${"data:" + el.type + ";base64," + el.massage}">` 
            }
            this.chat.push(els)
          })
        }else this.chat.push({massage:"<p>THERES NO IMAGES OR VIDEOS BRO</p>"})
      }else{
        this.ins()
      }
    },
    async delet(id){
      const { error } = await supabase
      .from('chat')
      .delete()
      .eq('id', id)
      socket.emit("reload",this.room)
      this.ins()
    },
    async updat(id,defaults){
      let datas = prompt("type:",defaults)
      
      const { data, error } = await supabase
      .from('chat')
      .update({ massage: datas || defaults })
      .eq('id', id)
      .select()
      socket.emit("reload",this.room)
      this.ins()
    },
    async ins(){
      this.chat = [];
      let { data, error } = await supabase
      .from("chat")
      .select("*")
      .eq("room_name", this.room)
      .eq("media", false)
      .limit(200)
      .order('id', { ascending: false });
      if (!error && data.length > 0) {
        // let chat = JSON.parse(data[0].chat);
        data.reverse().forEach((el) => {
          //  let messages = document.querySelector("ul");
          //  console.log(el.massage);al
          // messages.innerHTML +=
          this.chat.push(el
          // `<li data-aos="fade-in" class="list-group-item bg-dark text-light massage" style="height: max-content !important;overflow: auto !important;white-space: pre-warp">${el.massage}<button class="btn btn-outline-danger" id="${el.id}" @click="delet">delet</button></li>`
          )
          window.scrollTo(0, document.body.scrollHeight + 2);
          window.scrollTo(0, document.body.scrollHeight + 2);
          window.scrollTo(0, document.body.scrollHeight + 2);
          window.scrollTo(0, document.body.scrollHeight + 2);
          window.scrollTo(0, document.body.scrollHeight + 2);
        });
      } else {
        this.not = true;
        this.nottext = "page dosnt exists bro (404)";
        //     const { data, error } = await supabase
        // .from('chats')
        // .insert([
          //   { name: room, chat:"[]" },
          // ])
          // .select()
          // this.notfound = true
        }
      },
    },
    updated(){
      window.scrollTo(0, document.body.scrollHeight + 2);
      window.scrollTo(0, document.body.scrollHeight + 2);
      window.scrollTo(0, document.body.scrollHeight + 2);
      window.scrollTo(0, document.body.scrollHeight + 2);
    },
    async mounted() {
      let socket = io("https://page-cord.hsn-bro.repl.co");

      let that = this;
      
      let room = window.location.pathname.replace("/", "");
      
      this.room = room;
      
      let peoples = new Set([you.name]);
      if (!localStorage.getItem("login")) {
        this.not = true;
        this.nottext = "bro you should login to use page cord (101)";
      }
      let { data, error } = await supabase
      .from("bros")
      .select("*")
      .eq("name", localStorage.getItem("name"));
      if (!JSON.parse(data[0].pagees).includes(room)) {
      this.not = true;
      this.nottext =
      "you dont have access to this server bro <br> go back where you came from (202)";
    }
    let count = 0
    let timer = setInterval(()=>{
      count++;
      console.log("realoading");
      socket = io("https://page-cord.hsn-bro.repl.co");
      if (count >= 2) {
        confirm("bro something went wrong cant connect refresh the page") ? window.location.reload() : 0;
      }
    },10000)
    socket.on("connect", () => {
      clearInterval(timer)
      socket.emit("join", room);
      socket.emit("adduser", you.name, room);
      console.clear()
      console.log("connected");
      // socket.emit('message', `<p>` + you.name + " :" + "</p>" + " joined the room", room);
      socket.on("type", (name)=>{
        that.is_typing = true
        that.typer = name;
      })
      socket.on("notype", ()=>{
        that.is_typing = false
        // that.typer = name;
      })
      socket.on("message", function (msg, main) {
        // console.log(msg);
        let messages = document.querySelector("ul");
        // that.chat.push(msg)
        
        messages.innerHTML +=
        `<div data-aos="fade-in" class="list-group-item bg-dark text-light massage d-flex align-items-center gap-5" v-for="c in chat">
        <li style="height: max-content !important;overflow: auto !important;white-space: pre-warp" v-html="">${msg}</li>
        <div class="setting position-absolute">
        <button class="btn btn-outline-primary" style="height: min-content; width: 10px !important;" v-if="!c.img" onclick="window.location.reload()">reload</button>
        <div>::</div></div>
      </div>`
        // `<li data-aos="fade-in" class="list-group-item bg-dark text-light" style="height: max-content !important;overflow: auto !important;white-space: pre-warp">${msg}</li>`;
        window.scrollTo(0, document.body.scrollHeight + 2);
        if (document.visibilityState === "hidden") {
          let notification = new Notification(
            "New massege from page: " + room + "\n \n",
            { body: "\n\n\n\n" + main, silent: true }
          );
          document
            .getElementById("favicon")
            .setAttribute("href", "/icons/new.png");
        }
      });
      socket.on("user", (name) => {
        peoples.add(name);
        reload_users(peoples);
      });
      socket.on("reload", (room) => {
        that.ins()
      });
      socket.on("no-user", (name) => {
        peoples.delete(name);
        reload_users(peoples);
      });
    });
    async function reload_users(set) {
      console.log(set);
      document.querySelector(".side ul").innerHTML = "";
      set.forEach((el, i) => {
        document.querySelector(".side ul").innerHTML += `<li name="${el}" 
      style="height:40px;text-overflow: ellipsis;overflow: hidden;padding: 2px 10px !important" class="list-group-item 
      bg-dark text-light border-primary">${el}   <span style="background-color: rgb(0, 
      162, 255);" class="badge badge-primary badge-pill d-md-inline d-none">online</span> 
      </li>`;
      });
    }
    async function init() {
      that.ins()
      // Notification.requestPermission().then(function (permission) {
      //   if (permission === "granted") {
      //     console.log("Notification permission granted.");
      //   } else {
      //     console.log("Unable to get permission to notify.");
      //   }
      // });
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          setTimeout(
            () =>
              document
                .getElementById("favicon")
                .setAttribute("href", "/icons/manifest-icon-512.maskable.png"),
            1000
          );
        }
        else{
          socket.emit("notype",room)
        }
      });
      // let pages = JSON.parse(localStorage.getItem('pages')) || []
      // if (!pages.includes(window.location.pathname.replace("/", "")) && localStorage.getItem('login')) {

      //   pages.push(window.location.pathname.replace("/", ""))
      // }

      document.querySelector("h6").innerText += " " + room;
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        // ins()
        if (input.value && input.value != " " && input.value != "  " && input.value.trim().length != 0) {
          socket.emit("notype",room)
          let mas = "";
          mas += input.value
          socket.emit(
          "message",
            `<p style="margin: 0px !important;
        padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
            you.name +
            " :" +
            "</p>" +
            that.mas(mas),room,input.value);
          add(mas,false);
        }
      });
      if (!localStorage.getItem("login")) {
        // alert("bro login in is recommended")
      }
    }
    init();

    async function add(msg,media) {
      // let { data, error } = await supabase
      //   .from("chat")
      //   .select("*")
      //   .eq("room_name", room);
      // chat = JSON.parse(data[0].chat);
      // chat.push(msg);
      // if (chat.length > 100) {
      let {data , error}  = await supabase
          .from("chat")
          .insert({ massage: msg ,room_name: room,media: media,user:you.name})
          .eq("room_name", room)
          .select();
    }
    async function addImage(msg,name,type,size){
      let { v4 } = await import("uuid")
      let uid = v4()
      let {data , error}  = await supabase
          .from("media")
          .insert({ massage: msg ,room_name: room,user:you.name,type: type,size: size,name: name,uuid: uid})
          .eq("room_name", room)
          .select();
          if (error) {
            alert("there is an error "+error.message);
          }
          add("<a id='"+uid+"' href='"+uid+"'>send an image named: "+name+"</a>",false)
    }
    window.addEventListener("keypress", (e) => {
      if (e.key == "Enter" && !e.shiftKey) {
        e.preventDefault();
        document.querySelector("form .btn-outline-primary").click();
        textarea.innerText = "";
        textarea.value = "";
        // input.value = '';
      }
    });
    document.querySelector(".plus").onclick = () =>
      document.querySelector("#file").click();
    document
      .querySelector("#file")
      .addEventListener("input", async function (e) {
        let file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = async function (e) {
          let bits = e.target.result;
          if (file.type.match("image")) {
            addImage(btoa(bits),file.name,file.type,file.size);
          //    add(
          //     `<p style="  margin: 0px !important;
          // padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
          //     you.name +
          //     " :" +
          //     "</p>" +
          //     `<img loading="lazy" style="max-width: 70vw" src="${"data:" + file.type + ";base64," + btoa(bits)
          //     }">`,true
          //   );
            socket.emit(
              "message",
              `<p style="  margin: 0px !important;
        padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
              you.name +
              " :" +
              "</p>" +
              `<img loading="lazy" style="max-width: 70vw" src="${"data:" + file.type + ";base64," + btoa(bits)
              }">`,
              room,
              you.name + "send an image"
            );
           
          } else if (file.type.match("video")) {
               addImage(
              `<p style="  margin: 0px !important;
          padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
              you.name +
              " :" +
              "</p>" +
              `<video loading="lazy" style="max-width: 70vw" src="${"data:" + file.type + ";base64," + btoa(bits)
              }" controls></video>`,
              true
            );
            socket.emit(
              "message",
              `<p style="  margin: 0px !important;
        padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
              you.name +
              " :" +
              "</p>" +
              `<video loading="lazy" style="max-width: 70vw" src="${"data:" + file.type + ";base64," + btoa(bits)
              }" controls></video>`,
              room,
              you.name + "send an image"
            );
          
          } else { 
            addImage(
              `<p style="  margin: 0px !important;
          padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
              you.name +
              " :" +
              "</p>" +
              `<a loading="lazy" href="${"data:" + file.type + ";base64," + btoa(bits)
              }" download="${file.name}">${file.name}</a>`,
              true
            );
            socket.emit(
              "message",
              `<p style="  margin: 0px !important;
        padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
              you.name +
              " :" +
              "</p>" +
              `<a loading="lazy" href="${"data:" + file.type + ";base64," + btoa(bits)
              }" download="${file.name}">${file.name}</a>`,
              room,
              you.name + "send an video"
            );
           
          }
        };
      });
    const textarea = document.getElementById("input");

    textarea.addEventListener("input", function () {
      if (!this.value == "") {
        socket.emit("type",you.name,room);
        this.style.height = "38px"; // Reset the height to auto
        this.style.height = this.scrollHeight + 2 + "px"; // Set the height to the scrollHeight
      } else {
        this.style.height = "38px"; // Reset the height to auto
      }
    });
    textarea.addEventListener("change", function () {
      
      if (
        !this.innerText == "" &&
        !this.value == "" &&
        !this.value.length == 0
      ) {
        this.style.height = "38px"; // Reset the height to auto
        this.style.height = this.scrollHeight + 2 + "px"; // Set the height to the scrollHeight
      } else {
        this.style.height = "38px"; // Reset the height to auto
      }
    });
  },
};
</script>

<style scoped>
* {
  cursor: url("../assets/cursor3.png"), alias;
  scrollbar-color: var(--bg-color) #000000;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}

html {
  height: 100vh;
}

body {
  cursor: url("../assets/cursor3.png"), alias;
  background-color: var(--bg-color);
  overflow-x: hidden;
}

div.body {
  overflow-x: hidden;
  cursor: url("../assets/cursor3.png"), alias;
  background-color: var(--bg-color);
  min-height: 100vh;
  padding-left: clamp(20px, 6vw, 25px) !important;
  padding-right: clamp(20px, 6vw, 25px) !important;
}

.side {
  background-color: inherit;
  position: fixed;
  width: clamp(20px, 6vw, 25px);
  right: 0;
  left: auto;
  height: calc(100vh - 41px);
  top: 0;
  transition: 1s;
}

.side h4 {
  transition: 1s;
  opacity: 0;
}

.side:hover h4 {
  opacity: 1;
}

.side ul {
  transition: 1s;
  opacity: 0;
}

.side:hover ul {
  opacity: 1;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey; */
  background-color: #000000;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--bg-color);
  border-radius: 10px;
}

.side:hover {
  /* float: right; */
  width: 18vw;
  /* background-color: azure; */
  /* position: fixed; */
  /* left: auto; */
  /* right: 0; */
  /* top: 41px; */
  /* float: right; */
  /* z-index: 65; */
}

@media (max-width: 668px) {
  .side:hover {
    /* float: right; */
    width: 40vw;
    /* background-color: azure; */
    /* position: fixed; */
    /* left: auto; */
    /* right: 0; */
    /* top: 41px; */
    /* float: right; */
    /* z-index: 65; */
  }
}

#form {
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
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
  /* font-family: monospace; */
  margin: 0px !important;
  /* padding: 0px !important; */
  font-family: "gg sans";
  font-weight: 400;
  /* color: rgb(250, 244, 237); */
  /* font-size: 16px */
}

ul li code {
  padding: 10px 10px;
  display: block;
  background-color: #000000 !important;
  border: white 1px solid;
  border-radius: 5px;
  /* color: rgb(255, 255, 255); */
}

ul li img,
ul li video {
  height: 100px;
}

/* ul li:hover img{
      position: absolute;
      scale: 3;
      height: 100px;
      top: 200px;
      left: 50vw;
      /* transform: translateX(-50vw); 
    } */
ul li {
  /* display: flex !important; */
  /* align-items: center; */
  /* background-color: #313338 !important; */
  gap: 8px;
}

.plus {
  /* border: white 1px solid ; */
  /* border-right: none !important; */
  background-color: var(--bg-color) !important;

  /* border-bottom-right-radius: 10px !important; */
  /* border-top-right-radius: 10px !important; */
}

textarea::placeholder {
  color: rgb(163, 163, 163) !important;
}

textarea {
  border-left: none !important;
  resize: none;
  text-align: left;
  overflow: hidden;
  height: auto;
  /* border-bottom-left-radius: 10px !important; */
  /* border-top-left-radius: 10px !important; */
  /* text-align: center; */
  /* line-height: 300px; */
  /* font-family: monospace !important; */
  margin: 0%;
  padding-top: 15px;
  font-size: 15px !important;
  height: 38px;
  transition: 1s;
  background-color: var(--bg-color) !important;
  color: white !important;
  scrollbar-color: #00000000 #00000000;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}

/* #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
    #input:focus { outline: none; }
    #form > button { background: #0077ff; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; } */

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* #messages > li {background: #3b3b3b00;  
  : 0.5rem 1rem; } */
/* #messages > li:nth-child(odd){ background: #1f1f1f; } */
/* #messages > li {background: #3b3b3b00;  padding: 0.5rem 1rem; } */
/* #messages > li:nth-child(odd){ background: #1f1f1f; } */
</style>
