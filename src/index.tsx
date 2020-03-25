import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StoreContext } from "redux-react-hook";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/store";

import { ConfigProvider } from "antd";
import en_GB from "antd/lib/locale-provider/en_GB";

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={en_GB}>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
