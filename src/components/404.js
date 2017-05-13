// @flow
import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./404.scss";
import bilibili from "./404.png";

export default class NotFound extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="not-found">404 NOT FOUND</div>
          <img src={bilibili}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

