import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from "store";

/* store 안에 있는 state를 사용 */
const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      {/* 알림이 일어나는 것을 확인 */}
      <Store.Consumer>
        {(store) => {
          return Object.keys(store.notifications).map((key) => {
            return (
              <Notification
                key={store.notifications[key].id}
                id={store.notifications[key].id}
                text={store.notifications[key].text}
                seen={store.notifications[key].seen}
              />
            );
          });
        }}
      </Store.Consumer>
    </Flex>
  </Fragment>
);
export default AppPresenter;
