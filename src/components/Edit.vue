<template>
  <div class="container edit">
  	<h3>Edit Row</h3>
    <div class="input-group mb-3">
      <input type="text" class="form-control"placeholder="name" aria-label="name" v-model="data.name">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control"placeholder="city" aria-label="city" v-model="data.city">
    </div>
    <div class="input-group mb-3">
      <select class="form-control" v-model="data.state">
      	<option>ACTIVE</option>
      	<option>INACTIVE</option>
      </select>
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control"placeholder="zip" aria-label="zip" v-model="data.zip">
    </div>
    <button @click="savedatarow(data.id)" type="button" class="btn btn-primary savebtn">Save</button>
    <button @click="deletedatarow(data.id)" type="button" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Edit',
  props: {
    data: Object,
  },
  methods:{
  	...mapActions(['getdata']),
  	savedatarow(id){
  		let url='http://localhost/wurkzen/public/trucks/'+id
  		let datasave={
  			name:this.data.name,
  			city:this.data.city,
  			state:this.data.state,
  			zip:this.data.zip
  		}
  		axios.put(url,datasave)
  		  .then((response) =>{
  		    if(response.status==200){
  		    	alert(response.data.messages.success)
  		    }

  		    this.getdata()
  		  })
  		  .catch((error)=> {
  		    console.log(error);
  		  });
  	},
  	deletedatarow(id){
  		let url='http://localhost/wurkzen/public/trucks/'+id
  		axios.delete(url)
  		.then((response) =>{
  		    if(response.status==200){
  		    	alert(response.data.messages.success)
  		    }

  		    this.getdata()
  		})
  		.catch((error)=> {
  		    console.log(error)
  		  });
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.edit {
      margin-bottom:50px; 
	}

	.savebtn {
		margin-right:10px;
	}
</style>
