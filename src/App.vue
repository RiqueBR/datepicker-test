<template>
  <div id="app">
    <h1>UoE Datepicker - duet date picker</h1>
    <duet-date-picker 
      :localization="localization_uk"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      localization_uk: {
        placeholder: 'DD/MM/YYYY'
      }
    }
  },
  mounted() {
    // const picker = document.querySelector("duet-date-picker")
    // picker.localization = { // This will return an undefined
    //   placeholder: 'DD/MM/YYYY'
    // }
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