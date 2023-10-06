# LostInBrittany.dev


## An [Eleventy](https://11ty.dev/) site

*[LostInBrittany.dev](https://lostinbrittany.dev)* is statically generated from this source code  with the [Eleventy](https://11ty.dev/) static site generator using [WebC (*.webc)](https://11ty.dev/languages/webc/).


## Getting started

Run a local copy of this site on your computer.

Install [Node.js](https://nodejs.org/) on your machine (see [11ty documentation for version requirements](https://www.11ty.dev/docs/getting-started/)).

Then enter the following commands into your terminal:

### 1. Clone this repository and all its dependencies

```cli
git clone git@github.com:LostInBrittany/lostinbrittany-dev.git
```

### 2. Go to the working directory

```cli
cd lostinbrittany-dev
```
Specifically take a look at the file named [`.eleventy.js`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/.eleventy.js) to see if you want to [configure any Eleventy options differently](https://www.11ty.dev/docs/config/).

### 3. Install the project dependencies with [NPM](https://www.npmjs.com/)

```cli
npm install
```

### 4. Edit the `.js` files in the [`_data`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_data/site.js) directory with your site information

### 5. Run Eleventy

```cli
npx @11ty/eleventy
```

Or build and host locally for local development

```cli
npx @11ty/eleventy --serve
```

Or build automatically when a template changes

```cli
npx @11ty/eleventy --watch
```

Or in debug mode

```cli
DEBUG=* npx @11ty/eleventy
```

## Publish your own copy

The command `npm run build` will generate a copy of the site files in a `_site` directory, which you can deploy with any hosting service.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com.com/LostinBrittany/lostinbrittany-dev)

&copy; 2021 by [Horacio Gonzalez](https://twitter.com/LostInBrittany)