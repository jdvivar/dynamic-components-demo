<template>
  <component :is="component" v-if="component" :data="data"/>
</template>

<script>

import { mapGetters } from 'vuex'

// There is probably an overload of logic here
// reason being I'm trying to find and debug
// why the component doesn't update after the
// first successful brand change

export default {
  name: 'dynamic-component',
  props: ['data', 'name'],
  data() {
    return {
      component: null,
    }
  },
  computed: {
    loader() {
      console.log('loader executed with brand: ' + this.brand)
      return () => import(`@/components/D${this.name}/${this.brand}`)
    },
    ...mapGetters({
      brand: 'getBrand'
    })
  },
  methods: {
    onBrandChange: function() {
      this.loader()
        .then(() => {
          this.component = () => this.loader()
        })
        .catch(() => {
          this.component = () => import(`@/components/D${this.name}/default`)
        })
    }
  },
  mounted() {
    this.onBrandChange()
  },
  watch: {
    brand: function() {
      this.onBrandChange()
    }
  }
}
</script>
