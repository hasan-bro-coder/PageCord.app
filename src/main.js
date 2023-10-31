import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './registerServiceWorker'
import Vue3Sanitize from "vue-3-sanitize";

let app = createApp(App)
app.use(router)
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
    "target"
  ],
  "img": [
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "srcset",
    "alt",
    "title",
    "width",
    "height",
    "loading"
  ], "video": [
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "src",
    "srcset",
    "alt",
    "title",
    "width",
    "height",
    "loading"
  ]
}
});

// app.use()
app.mount('body')
if (typeof navigator.serviceWorker !== 'undefined') {
//     navigator.serviceWorker.register('/other/sw.js')
}