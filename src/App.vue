<template>
  <div id="app">
    <h1>UoE Datepicker - duet date picker</h1>
    <duet-date-picker
      :dateAdapter="format_date()"
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
        //...more to come
      }
    }
  },
  methods: {
    format_date: function() {
      const DATE_REGEX = /^20[0-9]{2}-[0,1][0-9]-[0-3][0-9]$/;
      return {
        parse(value = '', createDate) {
          const validated = value.match(DATE_REGEX);
          if (validated) {
            return createDate(validated[3], validated[2], validated[1]);
          }
        },
        format(date) {
          return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }
      };
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