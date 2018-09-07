import React from 'react';
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    }
  }

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
        />
      </div>
    )
  }
}

export default withStyles(styles)(Search);