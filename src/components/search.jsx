import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null,
    }
  }

  handleLinkSearch = () => {
    const term = this.state.searchTerm;
    debugger
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const classes = this.props;

    return(
      <div>
        <TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          value={this.state.searchTerm}
          onChange={this.handleChange('searchTerm')}
        />

        <Button
          onClick={this.handleLinkSearch}
        >
          Find Link
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Search);