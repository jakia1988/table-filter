import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import App from '../components/App';
import Home from '../components/HomeComponent';
import ClaimComponent from '../components/ClaimComponent';

const Root = ({ store }) => (
    <Provider store={store}>
    <Router>
    <App>
      <Switch>
         <Route path="/" exact component={Home} />   
         <Route path="/care" exact component={ClaimComponent} />      
      </Switch>
    </App>
    </Router>
    </Provider>
  )
export default Root