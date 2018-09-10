import React from 'react';
import {
  withRouter
} from 'react-router-dom'
import {
  Tabs,
  Tab
} from '@material-ui/core';

class NavTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      routes: ["/", "/top-100"]
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(this.state.routes[value])
  };

  render() {
    const { value } = this.state;

    return(
      <Tabs value={value} onChange={this.handleChange}>
        <Tab label="Search"/>
        <Tab label="Top 100"/>
      </Tabs>
    )
  }
}

export default withRouter(NavTabs);