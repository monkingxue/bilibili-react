import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class NotFound extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>404 NOT FOUND</div>
      </MuiThemeProvider>
    );
  }
}

