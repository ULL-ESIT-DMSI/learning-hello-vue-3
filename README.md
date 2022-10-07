## Table  of  Contents

- [Table  of  Contents](#table--of--contents)
- [Creating a Vue Application](#creating-a-vue-application)
  - [Recommended IDE Setup](#recommended-ide-setup)
  - [Customize configuration](#customize-configuration)
  - [Project Setup](#project-setup)
- [Exercise: Add component counter](#exercise-add-component-counter)
- [vite.config.js](#viteconfigjs)
  - [Imports](#imports)
  - [import.meta](#importmeta)
  - [fileURLToPath](#fileurltopath)
  - [resolve.alias Alias @](#resolvealias-alias-)
  - [base (deploy at GH)](#base-deploy-at-gh)
- [I'm trying to set a base url for both my dev and prod environments](#im-trying-to-set-a-base-url-for-both-my-dev-and-prod-environments)
- [package.json](#packagejson)
  - [npm run preview](#npm-run-preview)
- [Exercise: Substitute an  icon for a new icon](#exercise-substitute-an--icon-for-a-new-icon)
- [Exercise: Using Markdown in Vue](#exercise-using-markdown-in-vue)
- [Exercise: Add the Options API counter as a component](#exercise-add-the-options-api-counter-as-a-component)
- [Exercise: Simple Routing](#exercise-simple-routing)
  
## Creating a Vue Application

Following the tutorial at
<https://vuejs.org/guide/quick-start.html#creating-a-vue-application>

```
> npm init vue@latest
```
answered e.t. with No


The resulting template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

Compile and Hot-Reload for Development

```sh
npm run dev
```

Compile and Minify for Production

```sh
npm run build
```

## Exercise: Add component counter 

Insert the counter component from the tutorial inside this application. See code <https://vuejs.org/guide/introduction.html#api-styles>

```html
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

The Composition API is centered around 

- declaring reactive state variables directly in a function scope, and 
- composing state from multiple functions together to handle complexity. 
  
Requires understanding of how reactivity works in Vue to be used effectively. 
In return, its flexibility enables more powerful patterns for organizing and reusing logic.

## vite.config.js

When running vite from the command line, 
Vite will automatically try to resolve a config file named `vite.config.js` inside project root.
<https://vitejs.dev/config/>

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
``` 

### Imports

What does ':' colon do in JavaScript's import?


> It's not part of JavaScript; it's something relevant for whatever module "bundler" you're using (vite). 
> JavaScript just says that the from value has to be a string constant; 
> it says nothing about the semantics of the string contents.


<https://stackoverflow.com/questions/66507569/what-does-colon-do-in-javascripts-import>

### import.meta 

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta>

> The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL.

```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```

### fileURLToPath

<https://nodejs.org/api/url.html#urlfileurltopathurl>

This function ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string.

### resolve.alias Alias @

See

* <https://vitejs.dev/config/shared-options.html#resolve-alias>
* <https://vitejs.dev/config/>
* <https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/>

> Perhaps, you're moving from Vue CLI to Vite as your build tool of choice and in the process you realize that the @ alias no longer works 😱.
> How in the world was I going to avoid such nasty looking imports as this `../../../someComponent.vue`?


See also <https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working>

>I have installed the project with `vue3 - vite` importing a component like
>
>    import Component from '../../../../components/Component.vue'
>
>i just want to alias the src folder and do
>
>    import Component from '@/components/Component.vue'


### base (deploy at GH)

To deploy at Github I had to introduce the `base` property in `vite.config.js`

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: fileURLToPath(new URL('./docs', import.meta.url))
  },
  base: '/learning-hello-vue-3/'
})
```
See <https://vitejs.dev/config/shared-options.html#base>


## I'm trying to set a base url for both my dev and prod environments

See <https://stackoverflow.com/questions/68076527/how-to-set-vite-config-js-base-public-path>

**Changes should be made in `vite.config.js`**

**A)** You are looking to change the running port from `3000` to `8080`, adjust `server.port` 

```
server: {
  port: '8080'
}
```

**C)** Changing base path depending on dev or prod environment


`.env` file :
```
// .env
 
// Running locally
APP_ENV=local
// you change port of local/dev here to :8000
// do not forget to adjust `server.port`
ASSET_URL=http://localhost:3000
 
// Running production build
APP_ENV=production
ASSET_URL=https://your-prod-asset-domain.com
```

`vite.config.js`:
```
const ASSET_URL = process.env.ASSET_URL || '';

export default { 
  base: `${ASSET_URL}/dist/`,

  [...]
}
```

For more information, head to the official doc at https://vitejs.dev/config/#server-options

## package.json

### npm run preview

npm run preview - this will generate a production build and run it using the built-in dev server

see <https://stackoverflow.com/questions/69317858/vuejs3-vite-how-to-run-production-build>s



## Exercise: Substitute an  icon for a new icon

See <https://www.svgrepo.com/svg/427182/halloween-haunted-house>

Solution in `src/components/icons/IconHalloween.vue` and used in 
`src/components/TheWelcome.vue`

A problem arises with the deploy at GH: 

1. You have to remember `npm run` build each time you deploy 
2. You have to add the generated files inside `docs`
3. Better automatize in `package.json`
  - Véase también <https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script>

  ## Exercise: Using Markdown in Vue 

The solution is via <https://www.npmjs.com/package/vue3-markdown-it>

Inside `App.vue`we have introduced this code:

```vue
<script setup>
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
    <div class="wrapper">
      <Markdown :source="SomeMarkdown" />
      <HelloWorld msg="¡Lo has hecho!" />
      <Counter></Counter>
    </div>
  </header>
  ...
</template>
```

and I have also changed the `main.js`:

```js
import { createApp } from 'vue'
import Markdown from 'vue3-markdown-it'

import App from './App.vue'

import './assets/main.css'

let myApp = createApp(App)

myApp.use(Markdown);
myApp.mount('#app')
```

## Exercise: Add the Options API counter as a component

Here is the Options API counter code: <https://vuejs.org/guide/introduction.html#options-api>

The Options API is centered around the concept of a "component instance" (`this`), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.

## Exercise: Simple Routing

Add simple routing with two "pages". One as before and the other with the tutorial inside this README.md.

Use pandoc to create the readme component.


See <https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch>

Solution to this task is in branch `simple-routing`.

Modified `App.vue`:

```vue
<script setup>
  import { ref, computed } from 'vue'
  import Home from './components/Home.vue'
  import Demo from './components/Demo.vue'  
  import NotFound from './components/NotFound.vue'
  
  const routes = {
    '/': Home,
    '/demo': Demo
  }
  
  // The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
  const currentPath = ref(window.location.hash)
  /*
  Refs are Vue.js instance properties that are used to register or indicate a reference to HTML elements or child elements in the template of your application. 
  If a ref attribute is added to an HTML element in your Vue template, you'll then be able to reference that element or even a child element in your Vue instance.
  */

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash // Updates the currentPath value when the url hash changes
  })
  
  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
  </script>
  
  <template>
    <a href="#/">Home</a> | 
    <a href="#/demo">Demo</a>
    <component :is="currentView" />
  </template>
```

In this case we wanto to switch between components based on the hash in the current URL. 
We use the `window.location.hash` to get the current hash and 
we use the `window.addEventListener('hashchange', () => {...})` to listen to changes in the hash.

The code:

1. Defines a `routes` object with the component to render for each route.
2. Defines a **reactive `currentPath` variable**, initialized with the URL current hash.
3. Registers an event listener for `hashchange` events. 
  - The `hashchange` event is fired when the fragment identifier of the URL has changed <https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event>
    (the part of the URL beginning with and following the `#` symbol).
4. Defines a computed value `currentView`, which uses the current hash to determine which component to render.

The <component :is="currentView" /> in the template renders the component returned by the computed value, which is either Home or Demo, depending on the current hash. If the hash is empty, it will render Home. If the hash is #/demo, it will render Demo. If the hash is #/foo, it will render NotFound. -->

<https://vuejs.org/guide/essentials/component-basics.html#dynamic-components>

