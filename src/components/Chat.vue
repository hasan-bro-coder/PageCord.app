<template class="bg-dark text-light pb-5">
  <div v-if="!not" class="bg-dark text-light pb-5 body">
    <Sidebar :room="room"></Sidebar>
    <div class="text-center position-fixed "
      style="background-color: #21252921; width:70vw;z-index: 100;top: -6px;left:50%;transform: translateX(-50%);display: flex;justify-content: center;align-items: center;">
      <div>
        <h1 class="text-center">Page-cord</h1>
        <h6 class="text-center text-secondary" style="margin-top: -10px;">Page:</h6>
      </div>
      <a @click="image" class="position-fixed" style="right: 50px;left: auto"><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style="height: 25px;width: 25px;fill:aliceblue"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
        </svg></a>
      <a @click="pined" class="position-fixed" style="right: 0px;left: auto"><svg xmlns="http://www.w3.org/2000/svg"
          height="1em" viewBox="0 0 384 512" style="height: 25px;width: 25px;fill:aliceblue">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
        </svg></a>
    </div>
    <div class="media"></div>
    <ul class="list-group list-group-flush" style="padding-top: 100px;padding-bottom: 20px;">
      <div @click.self="hides('none', c.created_at)" data-aos="fade-in"
        class="list-group-item bg-dark text-light massage d-flex align-items-center gap-5" v-for="c in chat" :id="c.id">
        <li @click="getImage(c.link_id);$event.target.style.color = 'transparent';$event.target.innerHTML = `<h1 style='color:white'>loading`" style="height: max-content !important;overflow: auto !important;white-space: pre-warp"
          v-html="(c.img ? `<p style='margin: 0px !important;padding: 0px !important; font-family: gg sans SemiBold Regular;font-size:20px'>${c.user || 'guy who doasnt exists'} :</p>` + c.massage : `<p style='margin: 0px !important;padding: 0px !important; font-family: gg sans SemiBold Regular;font-size:20px'>${c.user || 'guy who doasnt exists'} :</p>` + $sanitize(mas(c.massage || '*empty massage*'))) || '*empty massage*'">
        </li>
        <!-- <button class="btn btns btn-outline-primary" style=" min-width: 60px !important;" v-if="c.link" -->
          <!-- @click="getImage(c.link_id);$event.target.style.display = 'none'">load</button> -->
        <div @click="shows(c.id, c.created_at)" class="setting position-absolute" v-if="c.user == you.name">
          <button class="btn btns btn-outline-primary" style=" min-width: 60px !important;" v-if="c.link"
          @click="getImage(c.link_id);$event.target.style.display = 'none'">load</button>
          <button class="btn btns btn-outline-danger" style=" min-width: 60px !important;"
            @click="!c.img ? delet(c.id) : img_delet(c.id)">delate</button>
          <button class="btn btns btn-outline-success" style=" min-width: 60px !important;" v-if="!c.img"
            @click="updat(c.id, c.massage)">update</button>
          <button class="btn btns btn-outline-primary" v-if="!c.pin" style=" min-width: 60px !important;"
            @click="pin(c.id, true)">pin</button>
          <button class="btn btns btn-outline-primary" v-else style=" min-width: 60px !important;"
            @click="pin(c.id, false)">unpin</button>

          <div style="color: gray;" id="texts" :class="c.created_at">{{ c.created_at.split("T")[1].split(":")[0] + ":" +
            c.created_at.split("T")[1].split(":")[1] + " " + c.created_at.split("T")[0].split("-")[2] + "/"
            + c.created_at.split("T")[0].split("-")[1] }}</div>
        </div>
      </div>
    </ul>
    <form id="form" class="w-100 z-3 d-flex position-fixed" action="">
      <h6 v-if="is_typing" v-text="typer" style="margin: -20px 0px 0px calc(50% - 50px);"
        class="position-fixed z-1"></h6>
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
// import { io } from "socket.io-client";
import { store } from '../store'

const supabase = store.supabase
import { marked } from "marked";
let you = {
  name: localStorage.getItem("dname") || "unknown",
  id: 0,
};
let socket = {};
export default {
  data() {
    return {
      not: false,
      nottext: "donno bruh (505)",
      room: "",
      is_typing: false,
      typer: "",
      chat: [],
      you: you,
      imag: false,
      pins: false,
      currid: 0,
      setted: false,
      medias: false,
    };
  },
  components: {
    Sidebar,
  },
  methods: {
    shows(id, created_at) {
      if (!this.setted) {
        document.getElementById(id).querySelectorAll(".btns").forEach((el) => {
          el.style.display = "inline"
          el.style.opacity = "1"
          document.getElementById(id).querySelector(`#texts`).innerText = '::'
        })
        this.currid = id
        this.setted = true
      } else {
        document.getElementById(this.currid).querySelectorAll(".btn").forEach((el) => {
          if (el.style.display == "inline") {
            el.style.opacity = "0"
            el.style.display = "none"
            document.getElementById(this.currid).querySelector(`#texts`).innerText = created_at.split("T")[1].split(":")[0] + ":" + created_at.split("T")[1].split(":")[1] + " " + created_at.split("T")[0].split("-")[2] + "/" + created_at.split("T")[0].split("-")[1]
          }
        })
        this.setted = false
      }
    },
    async getImage(id) {
      // this.chat = [];
      // console.log(document.querySelector(".nut"));
      console.log("remove");
      if (this.medias) {
        // document.querySelector(".nut").remove()
      } else {

        let { data, error } = await supabase
          .from("media")
          .select("*")
          .eq("room_name", this.room)
          .eq("uuid", id)
          .order('id', { ascending: false });
        if (!error && data.length > 0) {
          data.reverse().forEach((el) => {
            let els = {
              user: el.user,
              img: true,
              id: el.id,
              created_at: el.created_at,
              massage: el.type.match("image") ? `<img loading="lazy"  style="position: fixed;left: 50%;transform: translateX(-50%) translateY(-50%);top:50%" class="nut" src="${"data:" + el.type + ";base64," + el.massage}">` : el.type.match("video") ? `<video loading="lazy" style="max-width: 80vw" src="${"data:" + el.type + ";base64," + el.massage}" controls></video>` : `<a loading="lazy" href="${"data:" + el.type + ";base64," + el.massage}" download="${el.name}">${el.name}</a>`
              // massage: `<img loading="lazy" style="max-width: 70vw" src="${el.massage}">` 

            }
            // els
            console.log(document.getElementById(id));
            if (el.type.match("image")|| el.type.match("video")){
                document.getElementById(id).src = `${"data:" + el.type + ";base64," + el.massage}`
            }
            else {
                document.getElementById(id).href = `${"data:" + el.type + ";base64," + el.massage}`
            }
          })
        }
      }
      this.medias = !this.medias
    },
    hides(id, created_at) {

      if (id != "none") {
        this.currid = id
      }
      if (this.currid == 0) {
        return 0
      }
      document.getElementById(this.currid).querySelectorAll(".btn").forEach((el) => {
        if (el.style.display == "inline") {
          el.style.opacity = "0"
          el.style.display = "none"
          document.getElementById(this.currid).querySelector(`#texts`).innerText = created_at.split("T")[1].split(":")[0] + ":" + created_at.split("T")[1].split(":")[1] + " " + created_at.split("T")[0].split("-")[2] + "/" + created_at.split("T")[0].split("-")[1]
        }
      })
      this.setted = false
    },
    mas(msg) {
      return marked.parse(msg);
    },
    async pin(id, dt) {
      const { data, error } = await supabase
        .from('chat')
        .update({ pin: dt })
        .eq('id', id)
        .select()
      if (!error) {
        alert(dt ? "massage is pinned" : "massage is unpinned")
      }
    },
    async img_delet(id) {
      const { error } = await supabase
        .from('media')
        .delete()
        .eq('id', id)
      socket.emit("reload", this.room)
      this.imag = !this.imag
      this.image()
    },
    async pined() {
      this.pins = !this.pins
      if (this.imag) {
        this.imag = false
      }
      if (this.pins) {
        this.chat = [];
        let { data, error } = await supabase
          .from("chat")
          .select("*")
          .eq("room_name", this.room)
          .eq("pin", true)
        if (!error && data.length > 0) {
          data.reverse().forEach((el) => {
            this.chat.push(el)
          });
        } else {
          this.chat.push({ massage: "<p>THERES NO PINNED MASSAGE BRO</p>" })
        }
      } else {
        this.ins()

      }
    },
    async image() {
      this.imag = !this.imag
      if (this.imag) {
        this.chat = [];
        let { data, error } = await supabase
          .from("media")
          .select("*")
          .eq("room_name", this.room)
          // .lt("size",100000)
          .order('id', { ascending: true });
        if (!error && data.length > 0) {
          data.forEach((el) => {
            let els = {
              user: el.user,
              img: true,
              id: el.id,
              created_at: el.created_at,
              massage: el.type.match("image") ? `<img loading="lazy" style="max-width: 80vw" src="${"data:" + el.type + ";base64," + el.massage}">` : el.type.match("video") ? `<video loading="lazy" style="max-width: 80vw" src="${"data:" + el.type + ";base64," + el.massage}" controls></video>` : `<a loading="lazy" href="${"data:" + el.type + ";base64," + el.massage}" download="${el.name}">${el.name}</a>`
              // massage: `<img loading="lazy" style="max-width: 70vw" src="${el.massage}">` 

            }
            this.chat.push(els)
          })
        } else this.chat.push({ massage: "<p>THERES NO IMAGES OR VIDEOS BRO</p>" })
      } else {
        this.ins()
      }
    },
    async delet(id) {
      const { error } = await supabase
        .from('chat')
        .delete()
        .eq('id', id)
      socket.emit("reload", this.room)
      this.ins()
    },
    async updat(id, defaults) {
      let datas = prompt("type:", defaults)

      const { data, error } = await supabase
        .from('chat')
        .update({ massage: datas || defaults })
        .eq('id', id)
        .select()
      socket.emit("reload", this.room)
      this.ins()
    },
    async ins() {
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
  updated() {
    window.scrollTo(0, document.body.scrollHeight + 2);
    window.scrollTo(0, document.body.scrollHeight + 2);
    window.scrollTo(0, document.body.scrollHeight + 2);
    window.scrollTo(0, document.body.scrollHeight + 2);
  },
  async mounted() {
    socket = navigator.onLine ? io("https://page-cord.hsn-bro.repl.co") : 0
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
        throw Error("nah left go away")
    }
    let count = 0
    let timer = setInterval(() => {
      count++;
      console.log("realoading");
      if (!navigator.onLine) {
        socket.disconnect()
      }
      // socket = io("https://page-cord.hsn-bro.repl.co");
      if (count >= 2 && navigator.onLine) {
        confirm("bro something went wrong cant connect refresh the page") ? window.location.reload() : 0;
      }
    }, 10000)
    let typers = new Set([])
    socket.on("connect", () => {
      clearInterval(timer)
      socket.emit("join", room);
      socket.emit("adduser", you.name, room);
      // console.clear());
      console.log("connected");
      // socket.emit('message', `<p>` + you.name + " :" + "</p>" + " joined the room", room);
      socket.on("type", (name) => {
        typers.add(name);
        that.is_typing = true
        typers.forEach(names => that.typer = names+", ")
        that.typer = ' is typing';
      })
      socket.on("notype", () => {
        that.is_typing = false
        // that.typer = name;
      })
      socket.on("message", function (msg, main,isimg) {
        // console.log(msg);
        // let messages = document.querySelector("ul");
        // that.chat.push(msg)
        console.log(msg);
        let els = {
              img:isimg,
              user: you.name,
              id: Math.random()+"ahh",
              created_at: `${new Date().getUTCFullYear()}-${new Date().getUTCMonth()+1}-${new Date().getUTCDate() / 10 > 1 ? new Date().getUTCDate() : "0"+new Date().getUTCDate()}T${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`,
              massage: msg
              // massage: `<img loading="lazy" style="max-width: 70vw" src="${el.massage}">` 
            }
        that.chat.push(els)
      //   messages.innerHTML +=
      //     `<div data-aos="fade-in" class="list-group-item bg-dark text-light massage d-flex align-items-center gap-5" v-for="c in chat">
      //   <li style="height: max-content !important;overflow: auto !important;white-space: pre-warp" v-html="">${msg}</li>
      //   <div class="setting position-absolute">
      //   <button class="btn btn-outline-primary" style="height: min-content; width: 10px !important;" v-if="!c.img" onclick="window.location.reload()">reload</button>
      //   <div>::</div></div>
      // </div>`
        // `<li data-aos="fade-in" class="list-group-item bg-dark text-light" style="height: max-content !important;overflow: auto !important;white-space: pre-warp">${msg}</li>`;
        window.scrollTo(0, document.body.scrollHeight + 2);
        if (document.visibilityState === "hidden") {
          let notification = new Notification(
            "New massege from page: " + room + "\n \n",
            { body: "\n\n\n\n" + main, silent: true }
          );
          document
            .getElementById("favicon")
            .setAttribute("href", "/other/new.png");
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
                .setAttribute("href", "/windows11/LargeTile.scale-400.png"),
            100
          );
        }
        else {
          socket.emit("notype", room)
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
          socket.emit("notype", room)
          let mas = "";
          mas += input.value
          socket.emit("message",that.mas(mas) || that.mas('*empty massage*'), room, input.value);
          add(mas, false, false, null);
        }
      });
      if (!localStorage.getItem("login")) {
        // alert("bro login in is recommended")
      }
    }
    init();

    async function add(msg, media, link, linktext) {
      // let { data, error } = await supabase
      //   .from("chat")
      //   .select("*")
      //   .eq("room_name", room);
      // chat = JSON.parse(data[0].chat);
      // chat.push(msg);
      // if (chat.length > 100) {
      let { data, error } = await supabase
        .from("chat")
        .insert({ massage: msg, room_name: room, media: media, user: you.name, link: link, link_id: linktext })
        .eq("room_name", room)
        .select();
    }
    async function addImage(msg, name, type, size) {
      let { v4 } = await import("uuid")
      let uid = v4()
      let { data, error } = await supabase
        .from("media")
        .insert({ massage: msg, room_name: room, user: you.name, type: type, size: size, name: name, uuid: uid })
        .eq("room_name", room)
        .select();
      if (error) {
        alert("there is an error " + error.message);
      }
      // `<img loading="lazy"  style="position: fixed;left: 50%;transform: translateX(-50%) translateY(-50%);top:50%" class="nut" src="${"data:" + el.type + ";base64," + el.massage}">` : el.type.match("video") ? `<video loading="lazy" style="max-width: 80vw" src="${"data:" + el.type + ";base64," + el.massage}" controls></video>` : `<a loading="lazy" href="${"data:" + el.type + ";base64," + el.massage}" download="${el.name}">${el.name}</a>`
      type.match("image") ? add(
        `<img loading="lazy" id="${uid}" style="min-width: 30px;max-width:85vw;color:gray" src="dam dam" alt="click to see ${name}">`
        , false, true, uid) : 
        type.match("video") ? add(
          `<video loading="lazy" style="max-width: 80vw;min-width:30px;color:gray" id="${uid}" src="dam dam" controls></video>`
          , false, true, uid) : add(
            `<a loading="lazy" id="${uid}" download="${name}" href="dam dam">${name}<a>`
              , false, true, uid)

    }
    window.addEventListener("keypress", (e) => {
      socket.emit("type", you.name, room)
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
        that.is_typing = true
        reader.readAsBinaryString(file);
        that.typer = 'sending';
        // reader.readAsDataURL(file);
        reader.onload = async function (e) {
          that.typer = 'done';
        that.is_typing = false
          let bits = e.target.result;
          if (file.type.match("image")) {
            addImage(btoa(bits), file.name, file.type, file.size);
            // addImage(bits,file.name,file.type,file.size);

            //    add(
            //     `<p style="  margin: 0px !important;
            // padding: 0px !important; font-family: 'gg sans SemiBold Regular';font-size:20px">` +
            //     you.name +
            //     " :" +
            //     "</p>" +
            //     `<img loading="lazy" style="max-width: 70vw" src="${"data:" + file.type + ";base64," + btoa(bits)
            //     }">`,true
            //   );
            socket.emit("message",`<img loading="lazy" style="max-width: 80vw" src="${"data:" + file.type + ";base64," + btoa(bits)}">`,room,you.name + " send an image",true);

          } else if (file.type.match("video")) {
            addImage(btoa(bits), file.name, file.type, file.size);
            socket.emit(
              "message",
              `<video loading="lazy" style="max-width: 80vw" src="${"data:" + file.type + ";base64," + btoa(bits)
              }" controls></video>`,
              room,
              you.name + " send an video",
              true
            );

          } else {
            addImage(btoa(bits), file.name, file.type, file.size);
            socket.emit("message",`<a loading="lazy" href="${"data:" + file.type + ";base64," + btoa(bits)}" download="${file.name}">${file.name}</a>`,
              room,
              you.name + " send an file",
              true
            );

          }
        };
      });
    const textarea = document.getElementById("input");

    textarea.addEventListener("input", function () {
      if (!this.value == "") {
        socket.emit("type", you.name, room);
        this.style.height = "38px"; // Reset the height to auto
        this.style.height = this.scrollHeight + 2 + "px"; // Set the height to the scrollHeight
      } else {
        this.style.height = "38px"; // Reset the height to auto
      }
    });
    textarea.addEventListener("change", function () {
      socket.emit("type", you.name, room)
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
/* #messages > li:nth-child(odd){ background: #1f1f1f; } */</style>
