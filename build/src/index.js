import React  from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todoApp } from './reducers/reducers.js'
import { App } from './components/container.js'

export const store = createStore(todoApp);

ReactDOM.render(
  <Provider store= { store } > 
    <App />
  </Provider>,
  document.getElementById('root')
)

