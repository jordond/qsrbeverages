/**
 * A Simple node server written in ES6 intended to launch an express server.
 *
 * The root route is sent the angular html, with the static directory set to
 * 'static/`, compiled angular files should be located in 'static/dist`.
 * Ensure that they have been compiled by running `npm build`
 */

import * as path from 'path';
import * as http from 'http';
import * as fs from 'fs';

import Express from 'express';
import PrettyError from 'pretty-error';
import favicon from 'serve-favicon';
import compression from 'compression';
import morgan from 'morgan';

const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);

/**
 * Setup config object
 */
const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

const config = Object.assign({
  title: 'QSR Beverages',
  port: process.env.PORT,
  dir: {
    static: path.join(__dirname, '..', 'public')
  }
}, environment);

/**
 * Setup the application
 */
app.use(compression());
app.use(Express.static(config.dir.static));
app.use(favicon(path.join(config.dir.static, 'favicon.ico')));

if (config.isProduction) {
  app.use(morgan('short', {
    skip: (req, res) => res.statusCode < 400
  }));
} else {
  app.use(morgan('dev'));
}

/**
 * Routes
 */

app.route('/')
  .get((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(path.join(config.dir.static, 'index.html'))
      .pipe(res);
  });

/**
 * Start the server
 */
if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.info('==>    ERROR: Error listening on port :%s', config.port);
      console.error(pretty.render(err));
    } else {
      console.info('\n==>     ✅ OK %s is running on http://localhost:%s.', config.title, config.port);
    }
  });
} else {
  console.error('==>    ERROR: No PORT environment variable was specified');
}
