/**
 * Created by xueyingchen.
 * @flow
 */
import React, {Component, PropTypes} from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import AccountBox from "material-ui/svg-icons/action/account-box";
import LockOutline from "material-ui/svg-icons/action/lock-outline";
import LockOpen from "material-ui/svg-icons/action/lock-open";
import RaisedButton from "material-ui/RaisedButton";

import "./login.css";
import ic22 from "ASSET/ic_22.png";
import ic33 from "ASSET/ic_33.png";
import ic22Hide from "ASSET/ic_22_hide.png";
import ic33Hide from "ASSET/ic_33_hide.png";

import {login} from "ACTION/login.js";

import InputField from "./InputField";

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state: { isShowPassword: boolean, account: string, password: string } = {
    isShowPassword: false,
    account: "",
    password: ""
  };

  togglePasswordShow = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    });
  };

  changeTextField = (target: string) => (event: Event | string) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({
        [target]: event.target.value
      });
    }
  };

  loginAccount = () => {
    this.props.login({
      account: this.state.account,
      password: this.state.password
    });
    browserHistory.replace("/home");
  };

  render() {
    const {isShowPassword, account, password} = this.state;
    return (
      <div className="login">
        <AppBar className="app-bar"
                title={<span className="bar-font">登陆</span>}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={null}
        />
        <div className="head-bar">
          <img src={isShowPassword ? ic22 : ic22Hide} alt="..."/>
          <img src={isShowPassword ? ic33 : ic33Hide} alt="..."/>
        </div>
        <div className="input">
          <InputField floatingLabelText="请输入您的 bilibili 账号"
                      icon={<AccountBox/>} type="text" onChange={this.changeTextField("account")}/>
          <InputField floatingLabelText="请输入您的密码"
                      icon={isShowPassword ? <LockOpen/> : <LockOutline/>}
                      toggle={this.togglePasswordShow.bind(this)}
                      type={isShowPassword ? "text" : "password"}
                      onChange={this.changeTextField("password")}/>
        </div>
        <div className="login-btn">
          <RaisedButton label="登陆" backgroundColor="#FF80AB"
                        fullWidth="true" labelColor="#fff"
                        labelStyle={{fontWeight: "lighter"}}
                        disabled={!(account && password)}
                        onTouchTap={this.loginAccount}/>
        </div>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  {login}
)(Login);


