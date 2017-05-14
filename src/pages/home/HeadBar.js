/**
 * Created by xueyingchen.
 * @flow
 */
import React, {Component} from "react";
import IconButton from "material-ui/IconButton";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";
import VideogameAsset from "material-ui/svg-icons/hardware/videogame-asset";
import FileDownload from "material-ui/svg-icons/file/file-download";
import ActionSearch from "material-ui/svg-icons/action/search";
import Avatar from "material-ui/Avatar";

import "./head-bar.scss";
import avatar from "ASSET/ic_avatar7.jpg";

import HomeDrawer from "./HomeDrawer";

export default class HeadBar extends Component {
  state: { isDrawerOpen: boolean } = {
    isDrawerOpen: false
  };

  openDrawer = () => {
    this.setState({
      isDrawerOpen: true
    });
  };

  closeDrawer = () => {
    this.setState({
      isDrawerOpen: false
    });
  };

  componentWillMount(): void {

  }

  render() {
    const {isDrawerOpen} = this.state;
    return (
      <div className="home-head-bar">
        <div className="head-left" onClick={this.openDrawer}>
          <NavigationMenu color="#fff"/>
          <Avatar src={avatar} size={32} className="avatar"/>
          <div className="name">name</div>
        </div>
        <div className="head-right">
          <HomeDrawer open={isDrawerOpen} close={this.closeDrawer}/>
          <IconButton><VideogameAsset color="#fff"/></IconButton>
          <IconButton><FileDownload color="#fff"/></IconButton>
          <IconButton><ActionSearch color="#fff"/></IconButton>
        </div>
      </div>
    );
  }
}

