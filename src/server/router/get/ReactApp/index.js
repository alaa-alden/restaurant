import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import config from '../../../config'


// thing in there
import createStore from '../../../../shared/store'
import { App } from '../../../../shared/components'
import template from '../template'


function reactRouteHandler(req, res) {
  // for apollo
  const client = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: `http://localhost:${process.env.PORT || config.internalPort}/graphql`,
      fetch,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  })

 // for redux
  const store = createStore
  const context = {}
  const reactApp = renderToString(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </ApolloProvider>
    )
  const state = store.getState()
  const helmet = Helmet.rewind()
  res.send(template(helmet, reactApp, state))
}


export default reactRouteHandler
