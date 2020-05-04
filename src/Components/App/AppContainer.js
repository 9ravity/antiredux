import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  /* container안에 state를 만들고, message를 부름 */
  state = {
    message: "Hello",
    /*     stuff: 10, */
    /*     loggedIn: false, */
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message: "Bye",
      });
    }, 2000);
  };

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter></AppPresenter>
      </Store.Provider>
    );
  }
}
/* presenter 안에 있는것들은 스토어에 접근 가능 
    Store.Provider를 만들었지만 아직 value(data)는 없음

    state를 변경하면 render를 다시함.
    setState 
    
*/

export default AppContainer;
