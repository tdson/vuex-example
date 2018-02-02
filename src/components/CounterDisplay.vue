<template>
  <p>count is {{getCounter}}</p>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCounter'])
    // getCounter () {
    //   return this.$store.getters.getCounter
    // }
  }
}
</script>
