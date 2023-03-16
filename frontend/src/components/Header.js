import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/topbar_logo.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLanguage } from "redux-i18n";

const mapStateToProps = (state) => ({
  lang: state.i18nState.lang,
});

const LoggedOutView = (props, context) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          {context.t("sign-in")}
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          {context.t("sign-up")}
        </Link>
      </li>
    </ul>
  );
};

const LoggedInView = (props, context) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/editor" className="nav-link">
          <i className="ion-compose"></i>&nbsp;{context.t("new-item")}
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/settings" className="nav-link">
          <i className="ion-gear-a"></i>&nbsp;{context.t("settings")}
        </Link>
      </li>

      <li className="nav-item">
        <Link to={`/@${props.currentUser.username}`} className="nav-link">
          <img
            src={props.currentUser.image}
            className="user-pic pr-1"
            alt={props.currentUser.username}
          />
          {props.currentUser.username}
        </Link>
      </li>
    </ul>
  );
};

const SelectLanguage = (props, context) => {
  const [lang, setLang] = useState(props.currentLang);
  const handleChange = (e) => {
    setLang(e.target.value);
    props.dispatch(setLanguage(e.target.value));
  };

  return (
    <div>
      <label>&nbsp;{context.t('Language')}&nbsp;</label>
      <select id="set-language" value={lang} onChange={handleChange}>
        <option value="en">{context.t("english")}</option>
        <option value="fr">{context.t("french")}</option>
      </select>
    </div>
  );
};

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ padding: "0.5rem 2rem" }}
      >
        <Link to="/" className="navbar-brand">
          <img alt="logo" src={logo} />
        </Link>

        {this.props.currentUser ? (
          <LoggedInView currentUser={this.props.currentUser} />
        ) : (
          <LoggedOutView currentUser={this.props.currentUser} />
        )}
        <SelectLanguage
          dispatch={this.props.dispatch}
          currentLang={this.props.lang}
        />
      </nav>
    );
  }
}

Header.contextTypes = {
  t: PropTypes.func,
};

LoggedOutView.contextTypes = {
  t: PropTypes.func,
};

LoggedInView.contextTypes = {
  t: PropTypes.func,
};

SelectLanguage.contextTypes = {
  t: PropTypes.func,
};

export default connect(mapStateToProps)(Header);
