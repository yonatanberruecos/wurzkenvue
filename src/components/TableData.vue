<template>
  <div class="container">
    <editwindow :data="datarow"/>
    <v-client-table :data="tableData" :columns="columns" :options="options" @row-click="rowclick"/>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2'
import Editwindow from '@/components/Edit.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TableData',
  data(){
        return {
            columns: ['id', 'name', 'city', 'state','zip'],
            options: {
              uniqueKey:'id',
              columnsDropdown:true,
              pagination:{
                      virtual: true
                  },
              selectable:{
                  mode: 'single', // or 'multiple'
                  only: function(row) {
                     return true // any condition
                  },
                  selectAllMode: 'all', // or 'page',
                  programmatic: false
                }
            },
            datarow:{}
        }
     },
     computed: {
        ...mapState(['tableData'])
      },
     created(){
        this.getdata()
     },
     methods:{
        ...mapActions(['getdata']),
        rowclick(event){
            this.datarow=event.row
        }
     },
     components: {
         Vuetable,
         Editwindow
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .VueTables__wrapper {
        max-height: 500px;
    }
</style>
