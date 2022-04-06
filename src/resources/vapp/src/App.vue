<template>
<div>
  <header-comp> </header-comp>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</div>
</template>

<script>
import HeaderComp from '@/components/Global/Header.vue';
export default {
  components: {
    HeaderComp,
  }
  
}
</script>

<style>
div #nav {
  text-align: right;
}

.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.4s ease-in;
}

.route-leave-active {
  transition: all 0.4s ease-out;
}

.route-enter-to {
  opacity: 1;
}

.route-leave-to {
  opacity: 0;
}
.route-leave-from {
  opacity: 1;
}

</style>
