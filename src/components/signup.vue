
<script>
// import Home from './components/Home.vue'
// import Chat from './components/Chat.vue'
// import NotFound from './components/Not.vue'
	
// const routes = {
//   '/': Home,
//   '/about': Chat
// }
import { store } from '../store';
const supabase = store.supabase
export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    // currentView() {
      // return routes[this.currentPath.slice(1) || '/'] || NotFound
    // }
  },
 async mounted() {
        let names = await supabase
    .from('bros')
    .select('name')
	 console.log(names)
	 let match = false
        document.querySelector('form').addEventListener('submit', async(e)=>{
            e.preventDefault()
			names.data.forEach((el,i)=>{
				
            if (el.name == document.querySelector('#exampleInputEmail1').value) {
              // alert('names taken bro')
			match = true
            document.querySelector('.alert-danger').style.display = 'block';
            }
			})
            if(!match){
            document.querySelector('.alert-danger').style.display = 'none';
            
			const { data, error } = await supabase
			.from('bros')
			.insert([
			{ name: document.querySelector('#exampleInputEmail1').value, password: document.querySelector('#exampleInputPassword1').value , display_name: document.querySelector("#exampleInputname1").value},
			])
			.select()

            localStorage.setItem('login','yes');
            localStorage.setItem('name', document.querySelector('#exampleInputEmail1').value);
            localStorage.setItem('dname', document.querySelector('#exampleInputname1').value);
            // localStorage.setItem('password', document.querySelector('#exampleInputPassword1').value);
            document.querySelector('.alert').style.display = 'block';

            // window.location.pathname = '1'
            }
        })
  }
}
</script>

<template>
<div class=" d-flex flex-column justify-content-center align-items-center h-100" style="height: 100vh;">
  <div style="display: none;" class="text-center alert alert-success w-100" role="alert">
    Successfully logined <a href="/">go to PageCord</a>
  </div>
  <div style="display: none;" class="text-center alert alert-danger w-100" role="alert">
    the email is already in use if its you then <a href="/login">login</a>
  </div>
    <form class="m-5">
        <div class="form-group">
          <label for="exampleInputEmail1">User Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">display name</label>
          <input type="text" class="form-control" id="exampleInputname1" placeholder="enter your username">
          <small id="emailHelp" class="form-text text-muted">it can be any thing you want</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
</div>
</template>

<style>
</style>