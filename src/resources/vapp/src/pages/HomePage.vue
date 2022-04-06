<template>
  <div class="container">
    <home-hero> </home-hero>
    <home-rules></home-rules>
    
  </div>
</template>

<script>
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeRules from "@/components/HomePage/HomeRules.vue";

export default {
  components: {
    HomeHero,
    HomeRules,
  },
};
</script>

<style scoped>
</style>