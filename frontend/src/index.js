import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_en from "./translations/en/global.json"
import global_fr from "./translations/fr/global.json"

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </I18nextProvider>
  </Provider>,

  document.getElementById("root")
);
