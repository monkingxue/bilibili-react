import React, {Component} from "react";

export default class NotFound extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <div>404 NOT FOUND</div>;
  }
}

