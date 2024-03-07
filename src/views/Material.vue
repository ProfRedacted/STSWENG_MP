<script setup>
     import MaterialBar from '@/components/MaterialBar.vue'
     import NewMaterialForm from '@/components/NewMaterialForm.vue' 
     import { ref } from 'vue';
     
     const showForm = ref(false)
     const allMaterials = ref({
          materials: [
               {
                    material: 'LEADED STEEL',
                    source: "ALLOYS",
                    amount: '20',
                    price: '10$'
               },
               {
                    material: 'LEADED STEEL',
                    source: "ALLOYS",
                    amount: '20',
                    price: '10$'
               }
          ],
          addMaterialForm (inputMaterialForm) {
               allMaterials.value.materials.push({
                    material: inputMaterialForm.material,
                    source: inputMaterialForm.source,
                    amount: inputMaterialForm.amount,
                    price: inputMaterialForm.price
               })
               
               console.log(allMaterials.value.materials)
          }
     }) 

     

</script>
<template>
     <div class="mainPage">
          <div class="pageHeader">
               <v-btn variant="outlined" class="button">List </v-btn>
               <v-btn @click="showForm = !showForm" variant="outlined" class="button" > Adding </v-btn>
               <v-text-field 
                    clearable
                    class="searchbar"
                    variant="outlined"
                    density="compact"
                    placeholder="Search Material..."
               </v-text-field>       
          </div>
          <div class="frame">
               <div class="itemDisplay">
                    <MaterialBar class="index" material="Material" source="Source" price="Price / Unit" amount="Amount"></MaterialBar>
                    <MaterialBar class="item"  v-for="material in allMaterials.materials"
                         :material="material.material" 
                         :source="material.source" 
                         :amount="material.amount" 
                         :price="material.price">
                    </MaterialBar>
               </div>
               <div v-if="showForm">
                    <NewMaterialForm 
                    @submitMaterialForm="allMaterials.addMaterialForm"  
                    @cancelMaterialForm="showForm = false">
               </NewMaterialForm>
               </div>
               <div v-else></div>
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
          margin: auto auto 0px auto;
          width: 90%;
          height: 10%;
     }

     .button {
          background-color: #D9D9D9;
          margin: 10px;
          width: 7%;
          height: 10vh;
     }
     .searchbar {
          background-color: #f2f2f2;
          margin: auto;
     
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
          flex-direction: row;
          background-color: #D9D9D9;
          height: 75vh;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          width: 90%;
          padding: 10px;
          border-radius: 25px;
          overflow-y: scroll;
     }
     .itemDisplay {
          width: 100%;
          display: flex;
          flex-direction: column;
     }


</style>