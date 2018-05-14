/* global window */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import configureStore from '../shared/store/'
import { App } from '../shared/components'

// const state = window.clientAppConfig.state
const client = new ApolloClient({
  uri: `${window.location.origin}/graphql`
})

const store = configureStore

const ClientApp = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>

    )

export default ClientApp
