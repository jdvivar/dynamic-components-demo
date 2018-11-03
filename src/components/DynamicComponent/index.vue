<template>
  <component :is="component" v-if="component" :data="data"/>
</template>

<script>

import { mapGetters } from 'vuex'

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
