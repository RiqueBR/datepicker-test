<template>
  <div id="app">
    <h1>UoE Datepicker</h1>
      <b-field label="Select a date">
        <b-datepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          focusable="false"
          v-model="today"
          trap-focus
          editable>
        </b-datepicker>
    </b-field>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      today: null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
