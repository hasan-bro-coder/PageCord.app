<template lang="">
    <Sidebar></Sidebar>
    <div class="body text-light">
        <h1 class="text-center">Account</h1>
        <br>

        <div class="container justify-content-center">
            <form class="d-flex justify-content-between" @submit.prevent="name_save">
                <label for="names" class="mt-2 mx-2">change your name</label>
                <input type="text" name="names" class="col names w-50">
                <button type="submit" class="mx-2 btn btn-primary">save</button>
            </form>
            <br>
            <form class="d-flex justify-content-between" @submit.prevent="pass_save">
                <label for="names" class="mt-2 mx-2">change password</label>
                <input type="password" name="names" class="col names w-50">
                <button type="submit" class="mx-2 btn btn-primary">change</button>
            </form>
            <br>
            <form class="d-flex justify-content-between" @submit.prevent="pass_save">
                <label for="names" class="mt-2 mx-2">your gender</label>
                <select class="names">
                    <option value="male">male</option>
                    <option value="male">female</option>
                    <option value="walmart bag">walmart bag</option>
                    <option value="man🗿">man🗿</option>
                    <option value="woman☕">woman☕</option>
                    <option value="Bot">Bot</option>
                    <option value="alien">alien</option>
                    <option value="null">null</option>
                    <option value="muzlim">muzlim</option>
                    <option value="animale">animale</option>
                    <option value="gay">gay</option>
                    <option value="lesbian">lesbian</option>
                    <option value="transgender">transgender</option>
                    <option value="biesexual">biesexual</option>
                    <option value="ghost">ghost</option>
                    <option value="helicopter">helicopter</option>
                    <option value="i donno">i donno</option>
                    <option value="man who have no dick">man with boobs</option>
                    <option value="man who have no dick">man with dick size of 1 atom</option>
                    <option value="man who have no dick">flat woman</option>
                    <option value="man who have no dick">masculin woman</option>




                    

                </select>
                <button type="submit" class="mx-2 btn btn-primary">save</button>
            </form>
        </div>
        <br>
        <br>

        <h1 class="text-center">Theme</h1>
        <br>

        <div class="container justify-content-center">
            <form class="d-flex justify-content-between" @submit.prevent="name_save">
                <label for="names" class="mt-2">change theme</label>
                <select>
                    <option value="darkmode">darkmode</option>
                    <option value="lightmode">theirs only one mode</option>

                </select>
                <button type="submit" class=" btn btn-primary">save</button>
            </form>
        </div>
        <h1 class="text-center">Profile</h1>
        <div class="container justify-content-center">
            <form class="d-flex justify-content-between" @submit.prevent="name_save">
                <label for="names" class="mt-2">change your display name</label>
                <input type="text" name="names" class="col names w-50">
                <button type="submit" class=" btn btn-primary">save</button>
            </form>
        </div>
    </div>
</template>
<script>
import Sidebar from "./sidebar.vue"
export default {
components:{
    Sidebar
  }, 
  methods: {
    name_save(){
        localStorage.setItem('dname', document.querySelector('.names').value)
    }
    // currentView() {
      // return routes[this.currentPath.slice(1) || '/'] || NotFound
    // }
  },
}
</script>
<style scoped>
 
 .body{
    height: 100vh;
    /* opacity: 0; */
    background-color: #111111;
    margin-left: clamp(20px, 6vw, 25px)!important;
    padding-left: 20px;
  }
</style>