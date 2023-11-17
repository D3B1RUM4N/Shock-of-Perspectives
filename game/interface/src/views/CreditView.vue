<script>
import router from "@/router";

export default {
  name: 'CreditView',
  methods: {
    arriere () {
      router.push('/')
    }
  }
}
</script>

<template>
  <div class="page">
    <h1>Crédits</h1>
    <div class="credit">
      <h4>quoicoubaka</h4>
      <p>T'as les cramptéz : hein ?</p>
      <p>Apagnan : quoicoubeh</p>
      <p>quoicoubeh : quoicoubeh</p>
      <h4>booting the pc</h4>
      <p>fortnite : battlepass</p>
      <p>i just shit : out my ass</p>
    </div>
    <div class="return">
      <button class="btn" @click.prevent="arriere()">&#8592</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page{
  position: absolute;
  height: 300px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
}

.credit {
  width: 200px;

  background: grey;
  opacity: 0.3;
  border-radius: 10px;

  text-align: center;
}

h1 {
  //bold text plz
  font-size: 30px;
}
h4 {
  font-size: 20px;
}

p {
  font-size: 12px;
}

</style>