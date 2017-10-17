# Vue-webpack-minimal
Hey! I'm trying to catch up with new front-end dev by learning Vue.  

I wanted to follow along the "Getting started" guide from Vue but also use tools to compile and deploy (with netlify in mind) and yes,... I am aware of the vue-cli.

These are more or less the steps I followed.

Create dir for project
yarn init  
yarn add vue  
yarn add webpack --dev  
added  
* /src/index.js  
* /src/index.html  

configured package.json to run webpack  
yarn add webpack-dev-server --dev  
installed Vue.js devtools for chrome (optional). 
added file-loader to copy index.html  
added yarn.lock to solution for netlify integration  
configured netlify deploy settings via netlify.toml with 
* build command: yarn build
* publish directory: dist  

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Isaiasg/vue-webpack-minimal)  
