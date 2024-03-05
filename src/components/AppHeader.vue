<template>
     <div class="header">
          <h1>FabriQuote</h1>
          <div class="clickableHeader">
               <dash_item>Dash Board</dash_item>
               <dash_item>Quota</dash_item>
               <dash_item>Material</dash_item>
               <dash_item>Settings</dash_item>
          </div>
     </div>
</template>
<style>
h1 {
     background-color: #355E3B;
     color: #8A9A5B;
}
.clickableHeader {
    background-color: #BCB88A;
    color: #464646;
    padding: 0.5%;
    display: flex;
    place-items: start;
    justify-content: space-evenly;
  }

dash_item {
     display: flex;
     
}
</style>