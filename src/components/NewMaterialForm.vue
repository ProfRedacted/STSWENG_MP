<script>
     export default {
          data: () => ({
               material: '',
               materialRules: [
                    value => {
                         if (value?.length > 3) return true

                         return 'Material must be at least 3 characters.'
                    },
               ],
               source: '',
               sourceRules: [
                    value => {
                         if (value?.length > 3) return true

                         return 'Source must be at least 3 characters.'
                    }
               ],
               amount: '',
               amountRules: [
                    value => {
                         if (/^[0-9]/.test(value)) return true

                         return 'Amount must be a number.'
                    }
               ],
               price: '',
               priceRules: [
                    value => {
                         if (/^[0-9]/.test(value)) return true

                         return 'Price must be a number.'
                    }
               ]
          }),
          methods: {
               submitMaterialForm() {
                    const inputMaterialForm = {
                         material: this.material,
                         source: this.source,
                         amount: this.amount,
                         price: this.price

                    }
                    this.$emit('submitMaterialForm',inputMaterialForm)
                    
               }
          }
          
     }
</script>
<template>
     <div class="inputForm">
          <v-form fast-fail @submit.prevent="submitMaterialForm">
               <div>ADDING Materials</div>

               <v-text-field 
               v-model="material"
               :rules="materialRules"
               placeholder="Materials">
               </v-text-field>

               <v-text-field 
               v-model="source"
               :rules="sourceRules"
               placeholder="Source">
               </v-text-field>

               <v-text-field 
               v-model="amount" 
               :rules="amountRules"
               placeholder="Amount">
               </v-text-field>

               <v-text-field 
               v-model="price" 
               :rules="priceRules"
               placeholder="Price per pc">
               </v-text-field>

               <div class="buttonFormat">
                    <v-btn type="submit" class="adjustButton">Apply</v-btn>
                    <v-btn @click="$emit('cancelMaterialForm')" class="adjustButton">Cancel</v-btn>
               </div>
          </v-form>
     </div>
</template>
<style scoped>
     .inputForm {
          width: 300px;
          height: 100%;
          margin: auto;
          padding: 2.5%;
          border: 1px solid;
     }
     .buttonFormat {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-around;
     }
     .adjustButton {
          width: 10%;
          height: 10vh;
     }
</style>