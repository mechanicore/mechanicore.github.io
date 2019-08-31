# vuecli

> A Vue.js project

This project contains a default vue-cli (2.9.6) project using the webpack template. 

- Custom ESLint Rules have been applied.
- Build files from `dist` have been integrated with basic express server
- Has options load page over `http` or `https`

## Build Setup

1. `npm install`

2. To load over https, create a `.env` file in the root directory and copy the contents of `.env.example` to it. Set `USE_SSL` to `true|false to load over https before proceeding to #5.

3. `npm run dev` to serve with hot reload at localhost:8080

4. `npm run build` to build for production with minification

5. `npm run dev:server` 
	- serves static build files from express server at localhost:8080
	- if `USE_SSL` is true, https version can be loaded from `https://localhost:8043`


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
