<template>
  <h2 id="creating-a-vue-application">Creating a Vue Application</h2>
<p><a href="https://vuejs.org/guide/quick-start.html#creating-a-vue-application" class="uri">https://vuejs.org/guide/quick-start.html#creating-a-vue-application</a></p>
<pre><code>&gt; npm init vue@latest</code></pre>
<p>answered e.t. with No</p>
<h2 id="exercise-added-component-counter">Exercise: Added component counter</h2>
<p>Insert the counter component from the tutorial inside this application. See code <a href="https://vuejs.org/guide/introduction.html#api-styles" class="uri">https://vuejs.org/guide/introduction.html#api-styles</a></p>
<div class="sourceCode" id="cb2"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;</span>script setup<span class="op">&gt;</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { ref<span class="op">,</span> onMounted } <span class="im">from</span> <span class="st">&#39;vue&#39;</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="co">// reactive state</span></span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a><span class="kw">const</span> count <span class="op">=</span> <span class="fu">ref</span>(<span class="dv">0</span>)</span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a><span class="co">// functions that mutate state and trigger updates</span></span>
<span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a><span class="kw">function</span> <span class="fu">increment</span>() {</span>
<span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a>  count<span class="op">.</span><span class="at">value</span><span class="op">++</span></span>
<span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a>}</span>
<span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-12"><a href="#cb2-12" aria-hidden="true" tabindex="-1"></a><span class="co">// lifecycle hooks</span></span>
<span id="cb2-13"><a href="#cb2-13" aria-hidden="true" tabindex="-1"></a><span class="fu">onMounted</span>(() <span class="kw">=&gt;</span> {</span>
<span id="cb2-14"><a href="#cb2-14" aria-hidden="true" tabindex="-1"></a>  <span class="bu">console</span><span class="op">.</span><span class="fu">log</span>(<span class="vs">`The initial count is </span><span class="sc">${</span>count<span class="op">.</span><span class="at">value</span><span class="sc">}</span><span class="vs">.`</span>)</span>
<span id="cb2-15"><a href="#cb2-15" aria-hidden="true" tabindex="-1"></a>})</span>
<span id="cb2-16"><a href="#cb2-16" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;/</span>script<span class="op">&gt;</span></span>
<span id="cb2-17"><a href="#cb2-17" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-18"><a href="#cb2-18" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;</span>template<span class="op">&gt;</span></span>
<span id="cb2-19"><a href="#cb2-19" aria-hidden="true" tabindex="-1"></a>  <span class="op">&lt;</span>button @click<span class="op">=</span><span class="st">&quot;increment&quot;</span><span class="op">&gt;</span>Count is<span class="op">:</span> {{ count }}<span class="op">&lt;/</span>button<span class="op">&gt;</span></span>
<span id="cb2-20"><a href="#cb2-20" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;/</span>template<span class="op">&gt;</span></span></code></pre></div>
<p>The Composition API is centered around declaring reactive state variables directly in a function scope, and composing state from multiple functions together to handle complexity. It is more free-form, and requires understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.</p>
<h2 id="vite.config.js">vite.config.js</h2>
<p>When running vite from the command line, Vite will automatically try to resolve a config file named vite.config.js inside project root. <a href="https://vitejs.dev/config/" class="uri">https://vitejs.dev/config/</a></p>
<div class="sourceCode" id="cb3"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { fileURLToPath<span class="op">,</span> URL } <span class="im">from</span> <span class="st">&#39;node:url&#39;</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { defineConfig } <span class="im">from</span> <span class="st">&#39;vite&#39;</span></span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> vue <span class="im">from</span> <span class="st">&#39;@vitejs/plugin-vue&#39;</span></span>
<span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a><span class="co">// https://vitejs.dev/config/</span></span>
<span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a><span class="im">export</span> <span class="im">default</span> <span class="fu">defineConfig</span>({</span>
<span id="cb3-8"><a href="#cb3-8" aria-hidden="true" tabindex="-1"></a>  <span class="dt">plugins</span><span class="op">:</span> [<span class="fu">vue</span>()]<span class="op">,</span></span>
<span id="cb3-9"><a href="#cb3-9" aria-hidden="true" tabindex="-1"></a>  <span class="dt">resolve</span><span class="op">:</span> {</span>
<span id="cb3-10"><a href="#cb3-10" aria-hidden="true" tabindex="-1"></a>    <span class="dt">alias</span><span class="op">:</span> {</span>
<span id="cb3-11"><a href="#cb3-11" aria-hidden="true" tabindex="-1"></a>      <span class="st">&#39;@&#39;</span><span class="op">:</span> <span class="fu">fileURLToPath</span>(<span class="kw">new</span> <span class="fu">URL</span>(<span class="st">&#39;./src&#39;</span><span class="op">,</span> <span class="im">import</span><span class="op">.</span><span class="at">meta</span><span class="op">.</span><span class="at">url</span>))</span>
<span id="cb3-12"><a href="#cb3-12" aria-hidden="true" tabindex="-1"></a>    }</span>
<span id="cb3-13"><a href="#cb3-13" aria-hidden="true" tabindex="-1"></a>  }</span>
<span id="cb3-14"><a href="#cb3-14" aria-hidden="true" tabindex="-1"></a>})</span></code></pre></div>
<h3 id="imports">Imports</h3>
<p>What does ‘:’ colon do in JavaScript’s import?</p>
<blockquote>
<p>It’s not part of JavaScript; it’s something relevant for whatever module “bundler” you’re using (vite). JavaScript just says that the from value has to be a string constant; it says nothing about the semantics of the string contents.</p>
</blockquote>
<p><a href="https://stackoverflow.com/questions/66507569/what-does-colon-do-in-javascripts-import" class="uri">https://stackoverflow.com/questions/66507569/what-does-colon-do-in-javascripts-import</a></p>
<h3 id="import.meta">import.meta</h3>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta" class="uri">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta</a></p>
<blockquote>
<p>The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module’s URL.</p>
</blockquote>
<div class="sourceCode" id="cb4"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="bu">console</span><span class="op">.</span><span class="fu">log</span>(<span class="im">import</span><span class="op">.</span><span class="at">meta</span>)<span class="op">;</span> <span class="co">// { url: &quot;file:///home/user/my-module.js&quot; }</span></span></code></pre></div>
<h3 id="fileurltopath">fileURLToPath</h3>
<p><a href="https://nodejs.org/api/url.html#urlfileurltopathurl" class="uri">https://nodejs.org/api/url.html#urlfileurltopathurl</a></p>
<p>This function ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string.</p>
<h3 id="resolve.alias-alias">resolve.alias Alias @</h3>
<p>See</p>
<ul>
<li><a href="https://vitejs.dev/config/shared-options.html#resolve-alias" class="uri">https://vitejs.dev/config/shared-options.html#resolve-alias</a></li>
<li><a href="https://vitejs.dev/config/" class="uri">https://vitejs.dev/config/</a></li>
<li><a href="https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/" class="uri">https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/</a></li>
</ul>
<blockquote>
<p>Perhaps, you’re moving from Vue CLI to Vite as your build tool of choice and in the process you realize that the @ alias no longer works 😱. How in the world was I going to avoid such nasty looking imports as this ../../../someComponent.vue?</p>
</blockquote>
<p>See also <a href="https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working" class="uri">https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working</a></p>
<p>I have installed the project with <code>vue3 - vite</code> importing a component like</p>
<pre><code>import Component from &#39;../../../../components/Component.vue&#39;</code></pre>
<p>i just want to alias the src folder and do</p>
<pre><code>import Component from &#39;@/components/Component.vue&#39;</code></pre>
<h3 id="base-deploy-at-gh">base (deploy at GH)</h3>
<p>To deploy at Github I had to introduce the <code>base</code> property in <code>vite.config.js</code></p>
<div class="sourceCode" id="cb7"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { fileURLToPath<span class="op">,</span> URL } <span class="im">from</span> <span class="st">&#39;node:url&#39;</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { defineConfig } <span class="im">from</span> <span class="st">&#39;vite&#39;</span></span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> vue <span class="im">from</span> <span class="st">&#39;@vitejs/plugin-vue&#39;</span></span>
<span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a><span class="co">// https://vitejs.dev/config/</span></span>
<span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a><span class="im">export</span> <span class="im">default</span> <span class="fu">defineConfig</span>({</span>
<span id="cb7-8"><a href="#cb7-8" aria-hidden="true" tabindex="-1"></a>  <span class="dt">plugins</span><span class="op">:</span> [<span class="fu">vue</span>()]<span class="op">,</span></span>
<span id="cb7-9"><a href="#cb7-9" aria-hidden="true" tabindex="-1"></a>  <span class="dt">resolve</span><span class="op">:</span> {</span>
<span id="cb7-10"><a href="#cb7-10" aria-hidden="true" tabindex="-1"></a>    <span class="dt">alias</span><span class="op">:</span> {</span>
<span id="cb7-11"><a href="#cb7-11" aria-hidden="true" tabindex="-1"></a>      <span class="st">&#39;@&#39;</span><span class="op">:</span> <span class="fu">fileURLToPath</span>(<span class="kw">new</span> <span class="fu">URL</span>(<span class="st">&#39;./src&#39;</span><span class="op">,</span> <span class="im">import</span><span class="op">.</span><span class="at">meta</span><span class="op">.</span><span class="at">url</span>))</span>
<span id="cb7-12"><a href="#cb7-12" aria-hidden="true" tabindex="-1"></a>    }</span>
<span id="cb7-13"><a href="#cb7-13" aria-hidden="true" tabindex="-1"></a>  }<span class="op">,</span></span>
<span id="cb7-14"><a href="#cb7-14" aria-hidden="true" tabindex="-1"></a>  <span class="dt">build</span><span class="op">:</span> {</span>
<span id="cb7-15"><a href="#cb7-15" aria-hidden="true" tabindex="-1"></a>    <span class="dt">outDir</span><span class="op">:</span> <span class="fu">fileURLToPath</span>(<span class="kw">new</span> <span class="fu">URL</span>(<span class="st">&#39;./docs&#39;</span><span class="op">,</span> <span class="im">import</span><span class="op">.</span><span class="at">meta</span><span class="op">.</span><span class="at">url</span>))</span>
<span id="cb7-16"><a href="#cb7-16" aria-hidden="true" tabindex="-1"></a>  }<span class="op">,</span></span>
<span id="cb7-17"><a href="#cb7-17" aria-hidden="true" tabindex="-1"></a>  <span class="dt">base</span><span class="op">:</span> <span class="st">&#39;/learning-hello-vue-3/&#39;</span></span>
<span id="cb7-18"><a href="#cb7-18" aria-hidden="true" tabindex="-1"></a>})</span></code></pre></div>
<p>See <a href="https://vitejs.dev/config/shared-options.html#base" class="uri">https://vitejs.dev/config/shared-options.html#base</a></p>
<h2 id="im-trying-to-set-a-base-url-for-both-my-dev-and-prod-environments">I’m trying to set a base url for both my dev and prod environments</h2>
<p>See <a href="https://stackoverflow.com/questions/68076527/how-to-set-vite-config-js-base-public-path" class="uri">https://stackoverflow.com/questions/68076527/how-to-set-vite-config-js-base-public-path</a></p>
<p><strong>Changes should be made in <code>vite.config.js</code></strong></p>
<p><strong>A)</strong> You are looking to change the running port from <code>3000</code> to <code>8080</code>, adjust <code>server.port</code></p>
<pre><code>server: {
  port: &#39;8080&#39;
}</code></pre>
<p><strong>C)</strong> Changing base path depending on dev or prod environment</p>
<p><code>.env</code> file :</p>
<pre><code>// .env
 
// Running locally
APP_ENV=local
// you change port of local/dev here to :8000
// do not forget to adjust `server.port`
ASSET_URL=http://localhost:3000
 
// Running production build
APP_ENV=production
ASSET_URL=https://your-prod-asset-domain.com</code></pre>
<p><code>vite.config.js</code>:</p>
<pre><code>const ASSET_URL = process.env.ASSET_URL || &#39;&#39;;

export default { 
  base: `${ASSET_URL}/dist/`,

  [...]
}</code></pre>
<p>For more information, head to the official doc at https://vitejs.dev/config/#server-options</p>
<h2 id="package.json">package.json</h2>
<h3 id="npm-run-preview">npm run preview</h3>
<p>npm run preview - this will generate a production build and run it using the built-in dev server</p>
<p>see <a href="https://stackoverflow.com/questions/69317858/vuejs3-vite-how-to-run-production-build" class="uri">https://stackoverflow.com/questions/69317858/vuejs3-vite-how-to-run-production-build</a>s</p>
<h2 id="steps-to-build-hello-vue-3">Steps to build hello-vue-3</h2>
<p>This template should help get you started developing with Vue 3 in Vite.</p>
<h3 id="recommended-ide-setup">Recommended IDE Setup</h3>
<p><a href="https://code.visualstudio.com/">VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar">Volar</a> (and disable Vetur) + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin">TypeScript Vue Plugin (Volar)</a>.</p>
<h3 id="customize-configuration">Customize configuration</h3>
<p>See <a href="https://vitejs.dev/config/">Vite Configuration Reference</a>.</p>
<h2 id="project-setup">Project Setup</h2>
<div class="sourceCode" id="cb11"><pre class="sourceCode sh"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="ex">npm</span> install</span></code></pre></div>
<p>Compile and Hot-Reload for Development</p>
<div class="sourceCode" id="cb12"><pre class="sourceCode sh"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="ex">npm</span> run dev</span></code></pre></div>
<p>Compile and Minify for Production</p>
<div class="sourceCode" id="cb13"><pre class="sourceCode sh"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="ex">npm</span> run build</span></code></pre></div>
<h2 id="exercise-substitute-an-icon-for-a-new-icon">Exercise: Substitute an icon for a new icon</h2>
<p>See <a href="https://www.svgrepo.com/svg/427182/halloween-haunted-house" class="uri">https://www.svgrepo.com/svg/427182/halloween-haunted-house</a></p>
<p>Solution in <code>src/components/icons/IconHalloween.vue</code> and used in <code>src/components/TheWelcome.vue</code></p>
<p>A problem arises with the deploy at GH:</p>
<ol type="1">
<li>You have to remember <code>npm run</code> build each time you deploy</li>
<li>You have to add the generated files inside <code>docs</code></li>
<li>Better automatize in <code>package.json</code></li>
</ol>
<ul>
<li>Véase también <a href="https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script" class="uri">https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script</a></li>
</ul>
<p>## Exercise: Using Markdown in Vue</p>
<p>The solution is via <a href="https://www.npmjs.com/package/vue3-markdown-it" class="uri">https://www.npmjs.com/package/vue3-markdown-it</a></p>
<p>Inside <code>App.vue</code>we have introduced this code:</p>
<pre class="vue"><code>&lt;script setup&gt;
import Markdown from &#39;vue3-markdown-it&#39;;

const SomeMarkdown = `
This is a markdown link: [Google](https://www.google.com) 

and this goes in cursive: *it!* 

and here comes an emoji: :satellite:

and here is some code:

\`some code\`

`
&lt;/script&gt;

&lt;template&gt;
  &lt;header&gt;
    &lt;div class=&quot;wrapper&quot;&gt;
      &lt;Markdown :source=&quot;SomeMarkdown&quot; /&gt;
      &lt;HelloWorld msg=&quot;¡Lo has hecho!&quot; /&gt;
      &lt;Counter&gt;&lt;/Counter&gt;
    &lt;/div&gt;
  &lt;/header&gt;
  ...
&lt;/template&gt;</code></pre>
<p>and I have also changed the <code>main.js</code>:</p>
<div class="sourceCode" id="cb15"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { createApp } <span class="im">from</span> <span class="st">&#39;vue&#39;</span></span>
<span id="cb15-2"><a href="#cb15-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> Markdown <span class="im">from</span> <span class="st">&#39;vue3-markdown-it&#39;</span></span>
<span id="cb15-3"><a href="#cb15-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb15-4"><a href="#cb15-4" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> App <span class="im">from</span> <span class="st">&#39;./App.vue&#39;</span></span>
<span id="cb15-5"><a href="#cb15-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb15-6"><a href="#cb15-6" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> <span class="st">&#39;./assets/main.css&#39;</span></span>
<span id="cb15-7"><a href="#cb15-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb15-8"><a href="#cb15-8" aria-hidden="true" tabindex="-1"></a><span class="kw">let</span> myApp <span class="op">=</span> <span class="fu">createApp</span>(App)</span>
<span id="cb15-9"><a href="#cb15-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb15-10"><a href="#cb15-10" aria-hidden="true" tabindex="-1"></a>myApp<span class="op">.</span><span class="fu">use</span>(Markdown)<span class="op">;</span></span>
<span id="cb15-11"><a href="#cb15-11" aria-hidden="true" tabindex="-1"></a>myApp<span class="op">.</span><span class="fu">mount</span>(<span class="st">&#39;#app&#39;</span>)</span></code></pre></div>
<h2 id="exercise-add-the-options-api-counter-as-a-component">Exercise: Add the Options API counter as a component</h2>
<p>Here is the Options API counter code: <a href="https://vuejs.org/guide/introduction.html#options-api" class="uri">https://vuejs.org/guide/introduction.html#options-api</a></p>
<p>The Options API is centered around the concept of a “component instance” (<code>this</code>), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.</p>

</template>