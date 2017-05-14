/**
 * Created by xueyingchen.
 * @flow
 */
import React from "react";
import Drawer from "material-ui/Drawer";
import Avatar from "material-ui/Avatar";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Divider from "material-ui/Divider";

import Message from "material-ui/svg-icons/communication/message";
import Moon from "material-ui/svg-icons/image/brightness-3";
import Home from "material-ui/svg-icons/action/home";
import FileDownload from "material-ui/svg-icons/file/file-download";
import Face from "material-ui/svg-icons/action/face";
import Grade from "material-ui/svg-icons/action/grade";
import Restore from "material-ui/svg-icons/action/restore";
import Supervisor from "material-ui/svg-icons/action/supervisor-account";
import Wallet from "material-ui/svg-icons/action/account-balance-wallet";
import Video from "material-ui/svg-icons/av/video-library";
import Setting from "material-ui/svg-icons/action/settings";
import Color from "material-ui/svg-icons/image/color-lens";

import "./home-drawer.scss";
import avatar from "ASSET/ic_avatar7.jpg";

type PropTypes = {
  open: boolean,
  close: any
}

const pink: string = "#FF80AB",
  lightPink: string = "#F4CFDA";

export default function HomeDrawer({open, close}: PropTypes) {
  return (
    <Drawer
      docked={false}
      open={open}
      width="75%"
    >
      <div className="head">
        <div className="head-left">
          <Avatar src={avatar} className="avatar" size="72"/>
          <div className="vip-name">
            <div className="name">nameGG</div>
            <div className="level">LV2</div>
          </div>
          <div className="vip-tag">正式会员</div>
          <div className="coin">硬币：47</div>
        </div>
        <div className="head-right">
          <SmAvatar icon={<Message/>}/>
          <SmAvatar icon={<Moon/>}/>
        </div>
      </div>
      <div className="body">
        <Menu>
          <MenuItem primaryText="主页" leftIcon={<Home color={pink}/>} onTouchTap={close}
                    style={{color: pink, backgroundColor: "rgb(218, 218, 218)"}}/>
          <MenuItem primaryText="我的大会员" leftIcon={<Face/>}/>
          <MenuItem primaryText="离线缓存" leftIcon={<FileDownload/>}/>
          <Divider/>
          <MenuItem primaryText="稍后再看" leftIcon={<Video/>}/>
          <MenuItem primaryText="我的收藏" leftIcon={<Grade/>}/>
          <MenuItem primaryText="历史记录" leftIcon={<Restore/>}/>
          <MenuItem primaryText="关注的人" leftIcon={<Supervisor/>}/>
          <MenuItem primaryText="我的钱包" leftIcon={<Wallet/>}/>
          <Divider/>
          <MenuItem primaryText="主题选择" leftIcon={<Color/>}/>
          <MenuItem primaryText="设置与帮助" leftIcon={<Setting/>}/>
        </Menu>
      </div>
    </Drawer>
  );
}

const SmAvatar = ({icon}: { icon: any }) =>
  <Avatar size="28" icon={<icon.type {...icon.props}/>}
          backgroundColor={pink} color={lightPink}
          className="sm-avatar"/>;
