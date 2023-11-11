import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import Vue3Sanitize from "vue-3-sanitize";
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// node_modules\bootstrap\dist\css\bootstrap-utilities.css
// import 'bootstrap/dist/css/bootstrap.rtl.min.css'
// import('bootstrap/dist/css/bootstrap.min.css');

let app = createApp(App)
app.use(router)
// import('./registerServiceWorker')
/* eslint-disable no-console */

import { register } from 'register-service-worker'
register(`/sw.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered. bro')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

app.use(Vue3Sanitize,{ 
  allowedTags:[
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "img",
    "video",
  ],
  allowedAttributes: 
  //   // img:['src',"style","class"],
  //   // *: [ 'style',"class" ],
  // }
  {
  "p": [ 'style',"class" ],
  "a": [
    "href",
    "name",
    "target",
    "id",
    "class",
    "download",
    "style"
  ],
  "img": [
    "src",
    "src",
    "srcset",
    "alt",
    "title",
    "width",
    "style",
    "height",
    "loading",
    "id",
    "class",
  ], "video": [
    "src",
    "href",
    "src",
    "style",
    "src",
    "src",
    "srcset",
    "controls",
    "alt",
    "title",
    "width",
    "height",
    "loading",
    "id",
  ]
}
});

// app.use()
app.mount('body')
// if (typeof navigator.serviceWorker !== 'undefined') {
    // navigator.serviceWorker.register('/sw.js')
// }