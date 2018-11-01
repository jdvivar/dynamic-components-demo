<template>
  <div id="app">
    <DynamicComponent brand="sd"/>
    <DynamicComponent brand="zava"/>
  </div>
</template>

<script>
import DynamicComponent from './components/DynamicComponent'

export default {
  name: 'app',
  components: {
    DynamicComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
