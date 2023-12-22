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
  inset: 0;
  object-fit: cover;
  position: absolute;
  object-position: center;
}

.tips {
  background-color: white;
}
</style>
