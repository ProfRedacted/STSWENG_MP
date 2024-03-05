<script setup>
     import MaterialBar from '@/components/MaterialBar.vue'
     import { ref } from 'vue';
     let input = ref("");
  
     const materials = [
          {
               material: 'LEADED STEEL',
               source: 'ALLOYS',
               amount: '20',
               price: '10$'
          },
          {
               material: 'LEADED STEEL',
               source: 'ALLOYS',
               amount: '20',
               price: '10$'
          },
          {
               material: 'LEADED STEEL',
               source: 'ALLOYS',
               amount: '20',
               price: '10$'
          },
          {
               material: 'LEADED STEEL',
               source: 'ALLOYS',
               amount: '20',
               price: '10$'
          },{
               material: 'LEADED STEEL',
               source: 'ALLOYS',
               amount: '20',
               price: '10$'
          }
     ];
</script>
<template>
     <div class="mainPage">
          <div class="pageHeader">
               <v-btn variant="outlined" class="button">List </v-btn>
               <v-btn variant="outlined" class="button">Adding </v-btn>
               <v-text-field label="" variant="outlined" placeholder="Search Material...">
               </v-text-field>       
          </div>
          <div class="frame">
               <MaterialBar class="index" material="Material" source="Source" price="Price / Unit" amount="Amount"></MaterialBar>
               <MaterialBar class="item"  v-for="material in materials" :material="material.material" :source="material.source" :amount="material.amount" :price="material.price"></MaterialBar>
          </div>
     </div>
</template>
<style scoped>
     .mainPage {
          display: flex;
          flex-direction: column;
          background-color: #f2f2f2;
          min-height: 90vh;
          color: black;
     }
     
     .pageHeader{
          display: flex;
          flex-direction: row;
          margin-left: auto;
          margin-right: auto;
          margin-top: auto;
          width: 90%;
     }

     .button {
          background-color: #D9D9D9;
          margin: 10px;
     }
     .index {
          display: flex;
          flex-direction: row;
          background-color: #355E3B;
          color: #f2f2f2;
     }
     .item {
          display: flex;
          flex-direction: row;
          background-color: #b6b6b6;
          color: #000000;
     }
     .frame {
          display: flex;
          flex-direction: column;
          background-color: #D9D9D9;
          height: 75vh;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          width: 90%;
          padding: 10px;
          border-radius: 25px;
     }
</style>