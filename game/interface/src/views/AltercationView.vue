<script>
import router from "@/router";
import AltercationButton from "@/views/component/AltercationButton.vue";

export default {
  name: "AltercationView",
  components: {AltercationButton},
  methods:{
    arriere(){
      router.push('/')
    }
  }
}
</script>

<template>
  <div class="ecran">
    <h1>AltercationView</h1>
    <div class="text">
      <p>We're no strangers to love
        You know the rules and so do I (do I)
        A full commitment's what I'm thinking of
        You wouldn't get this from any other guy
        I just wanna tell you how I'm feeling
        Gotta make you understand
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you</p>
    </div>
    <div class="interaction">
      <AltercationButton class="btn" buttonText="91"></AltercationButton>
      <AltercationButton class="btn" buttonText="82"></AltercationButton>
      <AltercationButton class="btn" buttonText="73"></AltercationButton>
      <AltercationButton class="btn" buttonText="64"></AltercationButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .ecran {
    position: relative;
    width: 100%;
    margin-top: 50px;
  }

    .text {
      position: absolute;
      border: black 1px solid;
      inset-inline: 100px;
    }

    .interaction {
      position: absolute;
      top:200px;

      display: flex;
      flex-direction: column;
    }
</style>