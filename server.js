/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

const falcorExpress = require('falcor-express');
const Router        = require('falcor-router');
const bodyParser    = require('body-parser');
const _             = require('underscore');
let data            = {
  usersById: {
    '1': {
      first_name: 'Bob',
      last_name: 'Slob'
    },
    '2': {
      first_name: 'Jane',
      last_name: 'Pain'
    }
  },

  todosById: {
    '1': {
      title: 'foo',
      completed: false,
      // user: { $type: 'ref', value: ['usersById', 1] }
    },
    '2': {
      title: 'boo',
      completed: true,
      // user: { $type: 'ref', value: ['usersById', 2] }
    }
  },

  names: [],

  todos: [
    { $type: 'ref', value: ['todosById', 1] },
    { $type: 'ref', value: ['todosById', 2] }
  ]
}

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  function buildRefPathSetResults(resource, index, attrs) {
    const attributes = _.isArray(attrs) ? attrs : [attrs];

    return _.reduce(attributes, (memo, attr) => {
      return memo.concat({
        path:  [resource, index],
        value: data[resource][index]
      });
    }, []);
  }

  function buildPathSetResults(resource, index, attrs) {
    const attributes = _.isArray(attrs) ? attrs : [attrs];

    return _.reduce(attributes, (memo, attr) => {
      return memo.concat({
        path:  [resource, index, attr],
        value: data[resource][index][attr]
      });
    }, []);
  }

  app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
    return new Router([
      {
        route: "todos.add",
        call: (callPath, args) => {
          const title = args[0];
          const id = _.random(1,10000);

          _.extend(data.todosById, {[id]: {title: title, completed: false}});
          data.todos.push({$type: 'ref', value: ['todosById', id]});

          return [
            {
              path: ['todos', data.todos.length - 1],
              value: {$type: "ref", value: ["todosById", id]}
            },
            {
              path: ['todosLength'],
              value: data.todos.length
            }
          ]
        }
      },
      {
        route: "todosLength",
        get: function(pathSet) {
          const [resource, attrs] = pathSet;

          return [{
            path: ['todosLength'], value: data['todos'].length
          }];
        }
      },
      {
        route: "todos[{integers:indices}]",
        get: function(pathSet) {
          const [resource, range, attrs] = pathSet;

          return _.flatten(_.map(pathSet.indices, (index) => {
            return buildRefPathSetResults(resource, index, attrs);
          }));
        }
      },
      {
        route: "todosById[{integers:ids}]['title']",
        get: function(pathSet) {
          const [resource, range, attrs] = pathSet;

          return _.flatten(_.map(pathSet.ids, (index) => {
            return buildPathSetResults(resource, index, attrs);
          }));
        }
      }
    ]);
  }));

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
