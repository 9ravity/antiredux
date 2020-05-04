import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      {/* 알림이 일어나는 것을 확인 */}
      <Notification text={"HelloWorld"} seen={false}></Notification>
    </Flex>
  </Fragment>
);
export default AppPresenter;
