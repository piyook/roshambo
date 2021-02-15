<template>
  <div id="nav" class="text-center mt-2">
    <router-link to="/">About</router-link> |
    <router-link to="/about">Play</router-link>
  </div>
  <router-view />
</template>

<style>
div #nav {
  text-align: right;
}
</style>
