<script>
     export default {
     props: ['material', 'source', 'amount', 'price'],
     setup(props) {
          console.log(props.title)
          }
     }
</script>
<template>
     <div>
          <text>{{ material }}</text>
          <text>{{ source }}</text>
          <text>{{ amount }}</text>
          <text>{{ price }} </text>
     </div>
</template>
<style scoped>
     div {
          justify-content: center;
          width: 100%;
          height: 5%;
          border-radius: 5px;
          margin: 0px auto 1%;
     }
     text {
          margin: auto;
          justify-content: center;
          width: 25%;
     }
     
</style>