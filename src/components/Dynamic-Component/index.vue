<template>
  <component :is="component" v-if="component" :data="data"/>
</template>

<script>

const brand = 'zava'

export default {
  name: 'Dynamic-Component',
  props: ['data', 'name'],
  data() {
    return {
      component: null,
    }
  },
  computed: {
    loader() {
      return () => import(`@/components/d-${this.name}/${brand}`)
    },
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import(`@/components/d-${this.name}/default`)
      })
  },
}
</script>
