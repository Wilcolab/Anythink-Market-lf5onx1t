import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import I18n from "redux-i18n";
import { translations } from "./translations/translations";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </I18n>
  </Provider>,

  document.getElementById("root")
);
