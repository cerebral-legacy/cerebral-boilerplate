# Cerebral Boilerplate

## Install
`git clone https://github.com/cerebral/cerebral-boilerplate.git` (and delete .git folder)

or **ZIP it** :-)

## Overview

### React by default
The project runs with React by default and hot replacement of changes to the modules

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

Styles are extracted and set as styles on index.html as this is a universal app. CSS files only import the names on the server side.

### ES2015
ES2015 is used both on client and server. You build the server files with `npm run server`, which will also watch the code for changes.

### Universal
This is a universal project with a simple implementation of setting and bootstrapping state. You will probably want to only merge in some state, but in this project all state is set.

### Deploy for production
`npm run build_client` and `npm run build_server`
