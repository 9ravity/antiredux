import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  /* container안에 state를 만들고, message를 부름 */
  /*   state = {
    message: "Hello",
        stuff: 10, 
       loggedIn: false, 
  }; */

  /*   componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message: "Bye",
      });
    }, 2000);
  }; */

  constructor(props) {
    super(props);

    this._changeMessage = () => {
      if (this.state.message === "hello") {
        this.setState({
          message: "Bye Bye",
        });
      } else {
        this.setState({
          message: "hello",
        });
      }
    };

    this.state = {
      message: "hello",
      changeMessage: this._changeMessage,
    };
  }
  /* constructor 사용 state를 바꾸는 함수를 만들고, provideer안에 넣기위함
    provider에 포함 시키고 싶은 함수는 반드시 constructor안에 있어야함
  */

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
