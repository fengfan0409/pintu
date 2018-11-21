<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "assets/reset.css";
  body{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
