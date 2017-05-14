// @flow
import React, {Component} from "react";
import {browserHistory} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class Root extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount(): void {
    const redirectUrl: string = localStorage.user ? "/home" : "/login";
    browserHistory.replace(redirectUrl);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

