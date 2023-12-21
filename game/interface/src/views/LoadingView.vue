<script>

import router from "@/router";
import store from "@/store";

let controller = store.state.Controller;
if(controller == null)
  router.push('/')
next();

async function next() {
  await wait(3000);
  router.push('/customisation');
}

function wait(milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

next();
export default {
  name: "LoadingView",
  methods : {
    // cherche le bon background
    loading(){
      if(controller.getAltercations().length === 0){
        return "/images/loadings/loadings1/Loading1.gif"
      }else{
        // loading 2
        return "tototitit"
      }
    }
  }
}
</script>

<template>
  <div class="imgBack" :style="{backgroundImage: `url(${loading()})`}">
    {{loading()}}
  </div>
</template>

<style scoped lang="scss">
  .imgBack {
    //full screen
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
</style>