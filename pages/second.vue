<template>
  <div>
    <p class="my-4">second</p>
    <nuxt-link to="/">root</nuxt-link>
    <b-button @click="fetchOperations">fetchOperations</b-button>
    <div v-for="(operation, index) in operations" :key="index">
      {{ operation['odpt:destinationStation'] }}<br><br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operations: []
    }
  },
  methods: {
    fetchOperations: function() {
      const path = 'https://api-tokyochallenge.odpt.org/api/v4/odpt:Train?odpt:operator=odpt.Operator:TokyoMetro&acl:consumerKey=AB4yn4tFjuCH9wx7GjowpNCK0ca_IoJPG7KusjBzdmQ'
      fetch(path)
        .then(response => {
          return response.json()
        }).then(data => {
          this.operations = data
        }).catch((err) => {
          console.log(err)
        });
    }
  }
}
</script>