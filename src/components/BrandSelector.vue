<template>
  <div class="brand-selector">
    Brand selector:
    <select v-model="brand">
      <option value="sd">Supedrug</option>
      <option value="zava">Zava</option>
      <option value="default">Default</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'brand-selector',
  data() {
    return {
      brand: this.$store.getters.getBrand || null
    }
  },
  watch: {
    brand: function(newBrand, oldBrand) {
      console.log(`Change brand from ${oldBrand} to ${newBrand}`)
      this.$store.commit('changeBrandTo', newBrand)
    }
  }
}
</script>

<style scoped>
  .brand-selector {
    display: block;
  }
</style>
