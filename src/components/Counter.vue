<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
  </script>
  
  <template>
    <button @click="count++">El contador vale: {{ count }}</button>
  </template>
  
  <style scoped>
  button {
    font-weight: bold;
  }
  </style>
  