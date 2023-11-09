<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100" style="height: 100vh;">
    <form class="m-5">
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">create an account in
          <a href="/account" class="form-check-label">sigup</a>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

</div>
</template>

<script>
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
  mounted() {

	document.querySelector('form').addEventListener('submit',async (e)=>{
    e.preventDefault();
	let { data, error} = await supabase
    .from('bros')
    .select('*')
		console.log(data,error)
	data.forEach(async(el,i)=>{
    console.log(el,i);
      if (document.querySelector('#exampleInputEmail1').value == el.name && document.querySelector('#exampleInputPassword1').value == el.password) {
		localStorage.setItem('login','yes');
            localStorage.setItem('name', document.querySelector('#exampleInputEmail1').value);
            // localStorage.setItem('password', 					 document.querySelector('#exampleInputPassword1').value);
            // let { data, error} = await supabase
            // .from('bros')
            // .select('*')
            // .eq("name", document.querySelector('#exampleInputEmail1').value)
            // if (error || data.length <= 0) {
            // alert('login Error email not found')
            // }
            localStorage.setItem('dname', el.display_name);
            localStorage.setItem('token',el.user_id);
            alert('login successful')
            // window.location.pathname = ""
 


		  
      }
    })
})
  }}
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
