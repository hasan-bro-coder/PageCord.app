import { reactive } from 'vue'
import { createClient } from "@supabase/supabase-js";
// let supabase = ""
// (async()=>{
  // supabase = ""
// })()
// let createClient = import("@supabase/supabase-js").then(el=>createClient = el.createClient);
export const store = reactive({
      supabase: createClient(
      import.meta.env.VITE_SUPA_URL,
      import.meta.env.VITE_SUPA_PASS
      )
})
