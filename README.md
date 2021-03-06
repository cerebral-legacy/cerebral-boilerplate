# Cerebral Boilerplate

## Install
`git clone https://github.com/cerebral/cerebral-boilerplate.git` (and delete .git folder)

or **ZIP it** :-)

## Requirements
You need **NPM v3** and **NODE v5**.

## Run
1. `npm install`
2. `npm start`

## Build for production
`npm run build`

Creates a dist folder with the bundle. This bundle can be used with any .html file. Make sure you run it from an actual server, like Node, Nginx etc. You can test with `python -m SimpleHTTPServer 3000` in the folder where you have your .html file and bundle.

## Overview

### React by default
The project runs with React by default and hot replacement of changes to the modules

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

### Hot reloading
Any changes to React components will instantly update in the browser, but changes to other code will require you to do a refresh. Webpack tells you about this in the devtools console of the browser. Soon the boilerplate will automatically to a full refresh when this occurs, just waiting for an update :-)
