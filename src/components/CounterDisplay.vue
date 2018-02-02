<template>
  <p>count is {{counter}}</p>
</template>

<script>
import store from '../store'

export default {
  computed: {
    counter () {
      return store.getters.getCounter
    }
  }
}
</script>
