<template>

<header id="title-block-header">
<h1 class="title">Learning Vue</h1>
</header>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#table--of--contents">Table of Contents</a></li>
<li><a href="#testing">Testing</a></li>
<li><a href="#creating-a-vue-application">Creating a Vue Application</a>
<ul>
<li><a href="#recommended-ide-setup">Recommended IDE Setup</a></li>
<li><a href="#customize-configuration">Customize configuration</a></li>
<li><a href="#project-setup">Project Setup</a></li>
<li><a href="#npm-run-preview">npm run preview</a></li>
</ul></li>
<li><a href="#exercise-add-component-counter">Exercise: Add component counter</a></li>
<li><a href="#viteconfigjs">vite.config.js</a>
<ul>
<li><a href="#imports">Imports</a></li>
<li><a href="#importmeta">import.meta</a></li>
<li><a href="#fileurltopath">fileURLToPath</a></li>
<li><a href="#resolvealias-alias-">resolve.alias Alias @</a></li>
<li><a href="#base-and-build-deploy-at-gh">base and build (deploy at GH)</a></li>
</ul></li>
<li><a href="#im-trying-to-set-a-base-url-for-both-my-dev-and-prod-environments">I’m trying to set a base url for both my dev and prod environments</a></li>
<li><a href="#exercise-substitute-an--icon-for-a-new-icon">Exercise: Substitute an icon for a new icon</a></li>
<li><a href="#exercise-using-markdown-in-vue">Exercise: Using Markdown in Vue</a></li>
<li><a href="#exercise-add-the-options-api-counter-as-a-component">Exercise: Add the Options API counter as a component</a></li>
<li><a href="#exercise-simple-routing">Exercise: Simple Routing</a></li>
</ul>
<h2 id="testing">Testing</h2>
<h2 id="creating-a-vue-application">Creating a Vue Application</h2>
<p>Following the tutorial at <a href="https://vuejs.org/guide/quick-start.html#creating-a-vue-application" class="uri">https://vuejs.org/guide/quick-start.html#creating-a-vue-application</a></p>
<pre><code>&gt; npm init vue@latest</code></pre>
<p>answered e.t. with No</p>
<p>The resulting template should help get you started developing with Vue 3 in Vite.</p>
<h3 id="recommended-ide-setup">Recommended IDE Setup</h3>
<p><a href="https://code.visualstudio.com/">VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar">Volar</a> (and disable Vetur) + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin">TypeScript Vue Plugin (Volar)</a>.</p>
<h3 id="customize-configuration">Customize configuration</h3>
<p>See <a href="https://vitejs.dev/config/">Vite Configuration Reference</a>.</p>
<h3 id="project-setup">Project Setup</h3>
<div class="sourceCode" id="cb2"><pre class="sourceCode sh"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">npm</span> install</span></code></pre></div>
<p>Compile and Hot-Reload for Development</p>
<div class="sourceCode" id="cb3"><pre class="sourceCode sh"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">npm</span> run dev</span></code></pre></div>
<p>Compile and Minify for Production</p>
<div class="sourceCode" id="cb4"><pre class="sourceCode sh"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">npm</span> run build</span></code></pre></div>
<h3 id="npm-run-preview">npm run preview</h3>
<p>npm run preview - this will generate a production build and run it using the built-in dev server</p>
<p>See <a href="https://stackoverflow.com/questions/69317858/vuejs3-vite-how-to-run-production-build" class="uri">https://stackoverflow.com/questions/69317858/vuejs3-vite-how-to-run-production-build</a>s</p>
<h2 id="exercise-add-component-counter">Exercise: Add component counter</h2>
<p>Insert the counter component from the tutorial inside this application. See code <a href="https://vuejs.org/guide/introduction.html#api-styles" class="uri">https://vuejs.org/guide/introduction.html#api-styles</a></p>
<div class="sourceCode" id="cb5"><pre class="sourceCode html"><code class="sourceCode html"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;script</span> <span class="er">setup</span><span class="kw">&gt;</span></span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { ref<span class="op">,</span> onMounted } <span class="im">from</span> <span class="st">&#39;vue&#39;</span></span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a><span class="co">// reactive state</span></span>
<span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a><span class="kw">const</span> count <span class="op">=</span> <span class="fu">ref</span>(<span class="dv">0</span>)</span>
<span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-7"><a href="#cb5-7" aria-hidden="true" tabindex="-1"></a><span class="co">// functions that mutate state and trigger updates</span></span>
<span id="cb5-8"><a href="#cb5-8" aria-hidden="true" tabindex="-1"></a><span class="kw">function</span> <span class="fu">increment</span>() {</span>
<span id="cb5-9"><a href="#cb5-9" aria-hidden="true" tabindex="-1"></a>  count<span class="op">.</span><span class="at">value</span><span class="op">++</span></span>
<span id="cb5-10"><a href="#cb5-10" aria-hidden="true" tabindex="-1"></a>}</span>
<span id="cb5-11"><a href="#cb5-11" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-12"><a href="#cb5-12" aria-hidden="true" tabindex="-1"></a><span class="co">// lifecycle hooks</span></span>
<span id="cb5-13"><a href="#cb5-13" aria-hidden="true" tabindex="-1"></a><span class="fu">onMounted</span>(() <span class="kw">=&gt;</span> {</span>
<span id="cb5-14"><a href="#cb5-14" aria-hidden="true" tabindex="-1"></a>  <span class="bu">console</span><span class="op">.</span><span class="fu">log</span>(<span class="vs">`The initial count is </span><span class="sc">${</span>count<span class="op">.</span><span class="at">value</span><span class="sc">}</span><span class="vs">.`</span>)</span>
<span id="cb5-15"><a href="#cb5-15" aria-hidden="true" tabindex="-1"></a>})</span>
<span id="cb5-16"><a href="#cb5-16" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;/script&gt;</span></span>
<span id="cb5-17"><a href="#cb5-17" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-18"><a href="#cb5-18" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;template&gt;</span></span>
<span id="cb5-19"><a href="#cb5-19" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;button</span> <span class="er">@click</span><span class="ot">=</span><span class="st">&quot;increment&quot;</span><span class="kw">&gt;</span>Count is: {{ count }}<span class="kw">&lt;/button&gt;</span></span>
<span id="cb5-20"><a href="#cb5-20" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;/template&gt;</span></span></code></pre></div>
<p>The Composition API is centered around</p>
<ul>
<li>declaring reactive state variables directly in a function scope, and</li>
<li>composing state from multiple functions together to handle complexity.</li>
</ul>
<p>Requires understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.</p>
<h2 id="vite.config.js">vite.config.js</h2>
<p>When running vite from the command line, Vite will automatically try to resolve a config file named <code>vite.config.js</code> inside project root. <a href="https://vitejs.dev/config/" class="uri">https://vitejs.dev/config/</a></p>
<div class="sourceCode" id="cb6"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { fileURLToPath<span class="op">,</span> URL } <span class="im">from</span> <span class="st">&#39;node:url&#39;</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { defineConfig } <span class="im">from</span> <span class="st">&#39;vite&#39;</span></span>
<span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> vue <span class="im">from</span> <span class="st">&#39;@vitejs/plugin-vue&#39;</span></span>
<span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-6"><a href="#cb6-6" aria-hidden="true" tabindex="-1"></a><span class="co">// https://vitejs.dev/config/</span></span>
<span id="cb6-7"><a href="#cb6-7" aria-hidden="true" tabindex="-1"></a><span class="im">export</span> <span class="im">default</span> <span class="fu">defineConfig</span>({</span>
<span id="cb6-8"><a href="#cb6-8" aria-hidden="true" tabindex="-1"></a>  <span class="dt">plugins</span><span class="op">:</span> [<span class="fu">vue</span>()]<span class="op">,</span></span>
<span id="cb6-9"><a href="#cb6-9" aria-hidden="true" tabindex="-1"></a>  <span class="dt">resolve</span><span class="op">:</span> {</span>
<span id="cb6-10"><a href="#cb6-10" aria-hidden="true" tabindex="-1"></a>    <span class="dt">alias</span><span class="op">:</span> {</span>
<span id="cb6-11"><a href="#cb6-11" aria-hidden="true" tabindex="-1"></a>      <span class="st">&#39;@&#39;</span><span class="op">:</span> <span class="fu">fileURLToPath</span>(<span class="kw">new</span> <span class="fu">URL</span>(<span class="st">&#39;./src&#39;</span><span class="op">,</span> <span class="im">import</span><span class="op">.</span><span class="at">meta</span><span class="op">.</span><span class="at">url</span>))</span>
<span id="cb6-12"><a href="#cb6-12" aria-hidden="true" tabindex="-1"></a>    }</span>
<span id="cb6-13"><a href="#cb6-13" aria-hidden="true" tabindex="-1"></a>  }</span>
<span id="cb6-14"><a href="#cb6-14" aria-hidden="true" tabindex="-1"></a>})</span></code></pre></div>
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
<div class="sourceCode" id="cb7"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="bu">console</span><span class="op">.</span><span class="fu">log</span>(<span class="im">import</span><span class="op">.</span><span class="at">meta</span>)<span class="op">;</span> <span class="co">// { url: &quot;file:///home/user/my-module.js&quot; }</span></span></code></pre></div>
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
<p>Perhaps, you’re moving from Vue CLI to Vite as your build tool of choice and in the process you realize that the @ alias no longer works 😱. How in the world was I going to avoid such nasty looking imports as this <code>../../../someComponent.vue</code>?</p>
</blockquote>
<p>See also <a href="https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working" class="uri">https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working</a></p>
<blockquote>
<p>I have installed the project with <code>vue3 - vite</code> importing a component like</p>
<p>import Component from ‘../../../../components/Component.vue’</p>
<p>i just want to alias the src folder and do</p>
<p>import Component from ‘@/components/Component.vue’</p>
</blockquote>
<h3 id="base-and-build-deploy-at-gh">base and build (deploy at GH)</h3>
<p>To deploy at Github I had to introduce the <code>base</code> property in <code>vite.config.js</code> , set the <code>build.outDir</code> property to <code>docs</code>, configuring the GH pages to pull from that folder:</p>
<div class="sourceCode" id="cb8"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { fileURLToPath<span class="op">,</span> URL } <span class="im">from</span> <span class="st">&#39;node:url&#39;</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { defineConfig } <span class="im">from</span> <span class="st">&#39;vite&#39;</span></span>
<span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> vue <span class="im">from</span> <span class="st">&#39;@vitejs/plugin-vue&#39;</span></span>
<span id="cb8-5"><a href="#cb8-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb8-6"><a href="#cb8-6" aria-hidden="true" tabindex="-1"></a><span class="co">// https://vitejs.dev/config/</span></span>
<span id="cb8-7"><a href="#cb8-7" aria-hidden="true" tabindex="-1"></a><span class="im">export</span> <span class="im">default</span> <span class="fu">defineConfig</span>({</span>
<span id="cb8-8"><a href="#cb8-8" aria-hidden="true" tabindex="-1"></a>  <span class="dt">plugins</span><span class="op">:</span> [<span class="fu">vue</span>()]<span class="op">,</span></span>
<span id="cb8-9"><a href="#cb8-9" aria-hidden="true" tabindex="-1"></a>  <span class="dt">resolve</span><span class="op">:</span> {</span>
<span id="cb8-10"><a href="#cb8-10" aria-hidden="true" tabindex="-1"></a>    <span class="dt">alias</span><span class="op">:</span> {</span>
<span id="cb8-11"><a href="#cb8-11" aria-hidden="true" tabindex="-1"></a>      <span class="st">&#39;@&#39;</span><span class="op">:</span> <span class="fu">fileURLToPath</span>(<span class="kw">new</span> <span class="fu">URL</span>(<span class="st">&#39;./src&#39;</span><span class="op">,</span> <span class="im">import</span><span class="op">.</span><span class="at">meta</span><span class="op">.</span><span class="at">url</span>))</span>
<span id="cb8-12"><a href="#cb8-12" aria-hidden="true" tabindex="-1"></a>    }</span>
<span id="cb8-13"><a href="#cb8-13" aria-hidden="true" tabindex="-1"></a>  }<span class="op">,</span></span>
<span id="cb8-14"><a href="#cb8-14" aria-hidden="true" tabindex="-1"></a>  <span class="dt">build</span><span class="op">:</span> {</span>
<span id="cb8-15"><a href="#cb8-15" aria-hidden="true" tabindex="-1"></a>    <span class="dt">outDir</span><span class="op">:</span> <span class="fu">fileURLToPath</span>(<span class="kw">new</span> <span class="fu">URL</span>(<span class="st">&#39;./docs&#39;</span><span class="op">,</span> <span class="im">import</span><span class="op">.</span><span class="at">meta</span><span class="op">.</span><span class="at">url</span>))</span>
<span id="cb8-16"><a href="#cb8-16" aria-hidden="true" tabindex="-1"></a>  }<span class="op">,</span></span>
<span id="cb8-17"><a href="#cb8-17" aria-hidden="true" tabindex="-1"></a>  <span class="dt">base</span><span class="op">:</span> <span class="st">&#39;/learning-hello-vue-3/&#39;</span></span>
<span id="cb8-18"><a href="#cb8-18" aria-hidden="true" tabindex="-1"></a>})</span></code></pre></div>
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
<div class="sourceCode" id="cb13"><pre class="sourceCode js"><code class="sourceCode javascript"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> { createApp } <span class="im">from</span> <span class="st">&#39;vue&#39;</span></span>
<span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> Markdown <span class="im">from</span> <span class="st">&#39;vue3-markdown-it&#39;</span></span>
<span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-4"><a href="#cb13-4" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> App <span class="im">from</span> <span class="st">&#39;./App.vue&#39;</span></span>
<span id="cb13-5"><a href="#cb13-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-6"><a href="#cb13-6" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> <span class="st">&#39;./assets/main.css&#39;</span></span>
<span id="cb13-7"><a href="#cb13-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-8"><a href="#cb13-8" aria-hidden="true" tabindex="-1"></a><span class="kw">let</span> myApp <span class="op">=</span> <span class="fu">createApp</span>(App)</span>
<span id="cb13-9"><a href="#cb13-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-10"><a href="#cb13-10" aria-hidden="true" tabindex="-1"></a>myApp<span class="op">.</span><span class="fu">use</span>(Markdown)<span class="op">;</span></span>
<span id="cb13-11"><a href="#cb13-11" aria-hidden="true" tabindex="-1"></a>myApp<span class="op">.</span><span class="fu">mount</span>(<span class="st">&#39;#app&#39;</span>)</span></code></pre></div>
<h2 id="exercise-add-the-options-api-counter-as-a-component">Exercise: Add the Options API counter as a component</h2>
<p>Here is the Options API counter code: <a href="https://vuejs.org/guide/introduction.html#options-api" class="uri">https://vuejs.org/guide/introduction.html#options-api</a></p>
<p>The Options API is centered around the concept of a “component instance” (<code>this</code>), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.</p>
<h2 id="exercise-simple-routing">Exercise: Simple Routing</h2>
<p>Add simple routing with two “pages”. One as before and the other with the tutorial inside this README.md.</p>
<p>Use pandoc to create the readme component.</p>
<p>See <a href="https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch" class="uri">https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch</a></p>
<p>Solution to this task is in branch <code>simple-routing</code>.</p>
<p>Modified <code>App.vue</code>:</p>
<pre class="vue"><code>&lt;script setup&gt;
  import { ref, computed } from &#39;vue&#39;
  import Home from &#39;./components/Home.vue&#39;
  import Demo from &#39;./components/Demo.vue&#39;  
  import NotFound from &#39;./components/NotFound.vue&#39;
  
  const routes = {
    &#39;/&#39;: Home,
    &#39;/demo&#39;: Demo
  }
  
  // The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
  const currentPath = ref(window.location.hash)
  /*
  Refs are Vue.js instance properties that are used to register or indicate a reference to HTML elements or child elements in the template of your application. 
  If a ref attribute is added to an HTML element in your Vue template, you&#39;ll then be able to reference that element or even a child element in your Vue instance.
  */

  window.addEventListener(&#39;hashchange&#39;, () =&gt; {
    currentPath.value = window.location.hash // Updates the currentPath value when the url hash changes
  })
  
  const currentView = computed(() =&gt; {
    return routes[currentPath.value.slice(1) || &#39;/&#39;] || NotFound
  })
  &lt;/script&gt;
  
  &lt;template&gt;
    &lt;a href=&quot;#/&quot;&gt;Home&lt;/a&gt; | 
    &lt;a href=&quot;#/demo&quot;&gt;Demo&lt;/a&gt;
    &lt;component :is=&quot;currentView&quot; /&gt;
  &lt;/template&gt;</code></pre>
<p>In this case we wanto to switch between components based on the hash in the current URL. We use the <code>window.location.hash</code> to get the current hash and we use the <code>window.addEventListener('hashchange', () =&gt; {...})</code> to listen to changes in the hash.</p>
<p>The code:</p>
<ol type="1">
<li>Defines a <code>routes</code> object with the component to render for each route.</li>
<li>Defines a <strong>reactive <code>currentPath</code> variable</strong>, initialized with the URL current hash.</li>
<li>Registers an event listener for <code>hashchange</code> events.</li>
</ol>
<ul>
<li>The <code>hashchange</code> event is fired when the fragment identifier of the URL has changed <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event" class="uri">https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event</a> (the part of the URL beginning with and following the <code>#</code> symbol).</li>
</ul>
<ol start="4" type="1">
<li>Defines a computed value <code>currentView</code>, which uses the current hash to determine which component to render.</li>
</ol>
<p>The &lt;component :is=“currentView” /&gt; in the template renders the component returned by the computed value, which is either Home or Demo, depending on the current hash. If the hash is empty, it will render Home. If the hash is #/demo, it will render Demo. If the hash is #/foo, it will render NotFound. –&gt;</p>
<p><a href="https://vuejs.org/guide/essentials/component-basics.html#dynamic-components" class="uri">https://vuejs.org/guide/essentials/component-basics.html#dynamic-components</a></p>
</template>