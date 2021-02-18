import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tableData:[]
  },
  mutations: {
  	setdatatable(state,datatable){
  		state.tableData=datatable
  	}
  },
  actions: {
  	getdata({commit}){
  		axios.get('http://localhost/wurkzen/public/trucks')
  		  .then((response) =>{
  		    commit('setdatatable',response.data)
  		  })
  		  .catch((error)=> {
  		    console.log(error);
  		  });
  	}
  },
  modules: {
  }
})
