<script setup>
import HelloWorld from './HelloWorld.vue'
import TheWelcome from './TheWelcome.vue'
import Counter from './Counter.vue'
import CountDown from './OptionsAPICounter.vue'

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
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Markdown :source="SomeMarkdown" />
      <HelloWorld msg="¡Lo has hecho!" />
      <table>
        <tr><td><Counter></Counter></td></tr>
        <tr><td><CountDown></CountDown></td></tr>
      </table>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

</template>

