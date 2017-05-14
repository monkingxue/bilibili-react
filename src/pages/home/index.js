/**
 * Created by xueyingchen.
 * @flow
 */
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import "./home.scss";

// import avatar from "ASSET/ic_avatar7.jpg";
import HeadBar from "./HeadBar.js";

class Home extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount(): void {

  }

  render() {
    return (
      <div className="home">
        <HeadBar/>
      </div>
    );
  }
}

export default connect(
  () => ({})
)(Home);
