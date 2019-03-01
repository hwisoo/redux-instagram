/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import css
// import css from './styles/style.styl'
// import App from './App';
// import components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// import react router


import { Provider } from 'react-redux'
import store from './store'

const router = (
  <Provider store={store}>
 
  <BrowserRouter>
  <Switch>

        <Route path='/' component={PhotoGrid} exact />
   
        <Route path='/app'component={App} />
        <Route path="/view/:code" component={Single} />
  
  </Switch>
  </BrowserRouter> 
 

  </Provider>
)

render(router, document.getElementById('root'))