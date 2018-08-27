import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Search from './search';

class Routes extends React.Component {
  render() {
    return(
      <Router>
        <ul>
          <li><Link to="/">Search</Link></li>
          <li><Link to="/top-100">Top 100</Link></li>
        </ul>

        <Route exact path='/' component={Search} />
        <Route path='/top-100' component={TopHits} />
      </Router>
    )
  }
}

export default Routes;