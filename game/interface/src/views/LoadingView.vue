<script>
import {tipsModel} from "@/assets/js/models/tips.model";

let tips = new tipsModel();
export default {
  name: "LoadingView",
  computed: {
    tips() {
      return tips.getTip();
    }
  }
}
</script>

<template>
  <div class="tips">
    <h3>{{ tips }}</h3>
  </div>
  <img src="/images/loadings/loadings1/loading1.gif" alt="" class="imgBack"/>
</template>

<style scoped lang="scss">
.imgBack {
  inset: 0; /* Fills the entire container */
  object-fit: cover; /* Scales the image to cover the entire area */
  position: absolute; /* Positioned absolutely */
  object-position: center; /* Centers the image within its container */
}

.tips {
  background-color: white;
}
</style>

