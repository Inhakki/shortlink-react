import React from 'react'
import {
  Grid
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavTabs from './navTabs';
import TopHits from './topHits';
import Search from './search';

class Routes extends React.Component {
  render() {
    return(
      <Router>
        <Grid>
          <div className="sub-header">
            <NavTabs />
            <Grid item xs="8">
              <Route exact path='/' component={Search} />
              <Route path='/top-100' component={TopHits} />
            </Grid>
          </div>
        </Grid>
      </Router>
    )
  }
}

export default Routes;