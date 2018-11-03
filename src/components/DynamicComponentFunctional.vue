<script>
import DBoxDefault from '@/components/DBox/default'

export default {
  functional: true,
  render: (createElement, { data, children }) => {
    return createElement(
      DBoxDefault,
      data,
      children
    );
  }
}
</script>

<style>

</style>
