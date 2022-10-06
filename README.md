## Creating a Vue Application

<https://vuejs.org/guide/quick-start.html#creating-a-vue-application>

```
> npm init vue@latest
```
answered e.t. with No


## Exercise: Added component counter 

Insert the counter component from the tutorial inside this application

## vite.config.js

When running vite from the command line, Vite will automatically try to resolve a config file named vite.config.js inside project root.
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
> How in the world was I going to avoid such nasty looking imports as this ../../../someComponent.vue?


See also <https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working>

I have installed the project with `vue3 - vite` importing a component like

    import Component from '../../../../components/Component.vue'

i just want to alias the src folder and do

    import Component from '@/components/Component.vue'


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


## Steps to build hello-vue-3

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

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

## Exercise: Substitute an  icon for a new icon

See <https://www.svgrepo.com/svg/427182/halloween-haunted-house>

Solution in `src/components/icons/IconHalloween.vue` and used in 
`src/components/TheWelcome.vue`

A problem arises with the deploy at GH: 

1. You have to rememberbuild each time you deploy 
2. You have to add the generated files inside `docs`
3. Better automatize in `package.json`