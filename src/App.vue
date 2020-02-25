<template>
  <div id="app">
    <hello-world></hello-world>
    <change-name></change-name>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ChangeName from './components/ChangeName.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ChangeName,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
