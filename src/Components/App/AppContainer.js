import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  render() {
    return (
      <Store.Provide>
        <AppPresenter></AppPresenter>
      </Store.Provide>
    );
  }
}
/* presenter 안에 있는것들은 스토어에 접근 가능 */

export default AppContainer;
