<script setup>
  import { ref, computed } from 'vue'
  import Home from './components/Home.vue'
  import Demo from './components/Demo.vue'  
  import NotFound from './components/NotFound.vue'
  
  const routes = {
    '/': Home,
    '/demo': Demo
  }
  
  const currentPath = ref(window.location.hash)
  console.log("currentPath.value: " + currentPath.value)
  
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
    console.log("currentPath.value: " + currentPath.value)
  })
  
  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
  </script>
  
  <template>
    <a href="#/">Home</a> |  <a href="#/demo">Demo</a>
    <component :is="currentView" />
  </template>