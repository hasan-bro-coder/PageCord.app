import { reactive } from 'vue'
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_PASS
    );
export const store = reactive({
  supabase: supabase
})