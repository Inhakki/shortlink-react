import React, { Component } from 'react';
import shorts from './shorts.jpg';
import './styles/App.css';
import Routes from './components/routes';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = () => {

};


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <img alt="short shorts logo" src={shorts}/>
            <Typography variant="title" color="inherit">

              Short shorts
            </Typography>

            <p>Url shortener</p>

          </Toolbar>
        </AppBar>

        <div className="page-body">
          <Routes />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
