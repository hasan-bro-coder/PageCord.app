import { reactive } from 'vue'
import { createClient } from "";
let parse = import("@supabase/supabase-js").then((el) => parse = el.parse)
const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_PASS
    );
export const store = reactive({
  supabase: supabase
})