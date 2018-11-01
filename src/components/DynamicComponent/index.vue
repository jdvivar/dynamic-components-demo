<template>
  <component :is="component" v-if="component" />
</template>

<script>

export default {
  name: 'DynamicComponent',
  props: ['brand'],
  data() {
    return {
      component: null,
    }
  },
  computed: {
    loader() {
      if (!this.brand) {
        return null
      }
      return () => import(`./brands/${this.brand}`)
    },
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import(`./brands/default`)
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .box {
   display: inline-block;
   border: 1px solid #ccc;
   padding: 50px;
   margin: 50px;
 }
</style>
