import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import store from './redux/index';
import { Provider } from 'react-redux';
import RouteConfig from './routeConfig/RouteConfig'
import { matchPath } from 'react-router'
import serialize from 'serialize-javascript'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server.get("/api/news", (req, res) => {
  res.json([
    {
      id: 1,
      upvotes: 250,
      title: "Fianto Duri, the complete tutorial",
      author: "rubeush",
      data: Date.now() - 10000000
    }, {
      id: 2,
      upvotes: 300,
      title: "Fianto Duriiiiii, the complete tutorial",
      author: "rubeush",
      data: Date.now() - 10000010
    },
    {
      id: 3,
      upvotes: 100,
      title: "Fianto Duriiiiiiizzziiiiii, the complete tutorial",
      author: "rubeush",
      data: Date.now() - 10000005
    }
  ])
});
server
.disable('x-powered-by')
.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
.get('/*', (req, res) => {
    const currentRoute = RouteConfig.find(item => matchPath(req.url, item))
    const requestInitData = currentRoute.component.requestInitData && currentRoute.component.requestInitData(req.url)
    Promise.resolve(requestInitData).then((initData) => {
    const context = { initData };
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
        <html lang="">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            <title>众记</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${ assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : '' }
            ${ process.env.NODE_ENV === 'production' ? `<script src="${assets.client.js}" defer></script>` :
            `<script src="${assets.client.js}" defer crossorigin></script>` }
            <script>window.__initialData__ =${serialize(initData)}</script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>`
      );
    }
  })
});

export default server;
