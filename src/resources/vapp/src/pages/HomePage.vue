<template>
  <div class="container">
    <home-hero> </home-hero>
    <home-intro></home-intro>
  </div>
</template>

<script>
import HomeHero from "../components/HomePage/HomeHero";
import HomeIntro from "../components/HomePage/HomeIntro";

export default {
  components: {
    HomeHero,
    HomeIntro,
  },
};
</script>

<style scoped>
</style>