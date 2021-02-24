<template>
<div>
  <header-comp> </header-comp>
  <router-view> </router-view>
</div>
</template>

<script>
import HeaderComp from './components/Global/Header';
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

</style>
