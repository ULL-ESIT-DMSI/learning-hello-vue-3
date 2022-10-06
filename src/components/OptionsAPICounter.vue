<script>
  export default {
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.
    data() {
      return {
        count: 200
      }
    },
  
    // Methods are functions that mutate state and trigger updates.
    // They can be bound as event listeners in templates.
    methods: {
      decrement() {
        this.count--
      }
    },
  
    // Lifecycle hooks are called at different stages
    // of a component's lifecycle.
    // This function will be called when the component is mounted.
    mounted() {
      console.log(`The initial count with the options api is ${this.count}.`)
    }
  }
  </script>
  
  <template>
    <button @click="decrement">Count is: {{ count }}</button>
  </template>
  