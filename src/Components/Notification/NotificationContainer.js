import React, { Component } from "react";
import NotificationPresenter from "./NotificationPresenter";

class NotificationContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <NotificationPresenter id={1} {...this.props} {...this.state} />;
  }
}

export default NotificationContainer;
