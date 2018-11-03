<template>
  <div id="app">
    <dynamic-component name="Header" />
    <dynamic-component name="Box" />
    <brand-selector />
  </div>
</template>

<script>
import DynamicComponent from '@/components/DynamicComponent'
import BrandSelector from '@/components/BrandSelector'

export default {
  name: 'app',
  components: {
    DynamicComponent,
    BrandSelector
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
