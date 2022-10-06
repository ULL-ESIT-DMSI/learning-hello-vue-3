<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Counter from './components/Counter.vue'
import Markdown from 'vue3-markdown-it';

const SomeMarkdown = `
This is a markdown link: [Google](https://www.google.com) 

and this goes in cursive: *it!* 

and here comes an emoji: :satellite:

and here is some code:

\`some code\`

`

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Markdown :source="SomeMarkdown" />
      <HelloWorld msg="¡Lo has hecho!" />
      <Counter></Counter>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
