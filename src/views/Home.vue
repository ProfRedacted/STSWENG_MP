<template>
    
    <body>
      <div class="actionList">
        <div> Create a Quota... </div>
        <router-link to="/quota" class="routerlink"> Quota History...</router-link><div></div>
        <router-link to="/material" class="routerlink"> Material List...</router-link>
        <div> Add New Material...</div>
      </div>
      <RecentQuota>
        <p>Recent Quota</p>
      </RecentQuota>
    </body>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    min-height: 90vh;
    flex-direction: row;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    width: 100vw;
    text-align: center;
    justify-content: space-around;
  }
  RecentQuota {
    background-color: #D9D9D9;
    color: black;
    margin: 25px 50px 50px;
    width: 15vw;
    border-radius: 25px;

  }
  p {
    margin-top: 10px;
  }
  .actionList {
    margin: auto;
    color: #355E3B;
    font-size: 28px;
    text-decoration: underline;
  }
  .routerlink {
     color: #355E3B;
     display: block;
  }
}
</style>