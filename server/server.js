// https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

// configure express and import basic node and expressjs packages
import express from 'express';
import path from 'path';
const app = express();


// configure database using mongoose package.
import config from './config/config';
import mongoose from 'mongoose';
mongoose.connect(config.mongoURL);
console.log("\n\n mongo server running on ", config.mongoURL);


// configure ejs, views folder and public file path for server rendering.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('../public'));


// import react libraries, client routes.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../client/routes';
import NotFoundPage from '../client/notFoundPage/components/NotFoundPage';


// configure server-side rendering for both react and express pages.
app.get('*', (req, res) => {
	match( { routes: routes, location: req.url },
		(err, redirectLocation, renderProps) => {
			if (err) {
				return res.status(500).send(err.message)
			}

			if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
			}

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }
      // render the index template with the embedded React markup
      return res.render('index', { markup });

		});
});

// start the application server
const port = config.port;
const env = process.env.NODE_ENV || 'production';

app.listen(port, err => {
  if (err) return console.error(err);
  console.info(`\n application server running on http://localhost:${port} [${env}]`);
});