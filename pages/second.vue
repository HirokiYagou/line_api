<template>
  <div>
    <p class="my-4">second</p>
    <nuxt-link to="/">root</nuxt-link>
    <b-button @click="fetchOperations">fetchOperations</b-button>
    <div>
      {{ operation[0] }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operation: []
    }
  },
  methods: {
    fetchOperations: function() {
      const path = 'https://api-tokyochallenge.odpt.org/api/v4/odpt:Train?odpt:operator=odpt.Operator:TokyoMetro&acl:consumerKey=AB4yn4tFjuCH9wx7GjowpNCK0ca_IoJPG7KusjBzdmQ'
      fetch(path)
        .then(response => {
          return response.json()
        }).then(data => {
          this.operation = data
        }).catch((err) => {
          console.log(err)
        });
    }
  }
}
</script>