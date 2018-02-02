<template>
  <div id="app">
    <h3>Increment:</h3>
    <Increment/>
    <h3>Counter:</h3>
    <Counter/>
  </div>
</template>

<script>
import Increment from './components/IncrementButton'
import Counter from './components/CounterDisplay'

export default {
  name: 'App',
  components: {
    Increment,
    Counter
  }
}
</script>
