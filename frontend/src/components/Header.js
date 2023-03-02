import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/topbar_logo.png";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const LoggedOutView = ({ t }) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          {t("header.sign-in")}
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          {t("header.sign-up")}
        </Link>
      </li>
    </ul>
  );
};

const LoggedInView = (props) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/editor" className="nav-link">
          <i className="ion-compose"></i>&nbsp;{props.t("header.new-item")}
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/settings" className="nav-link">
          <i className="ion-gear-a"></i>&nbsp;{props.t("header.settings")}
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

function Header(props) {
  const [t, i18n] = useTranslation("global");
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{ padding: "0.5rem 2rem" }}
    >
      <Link to="/" className="navbar-brand">
        <img alt="logo" src={logo} />
      </Link>

      {props.currentUser ? (
        <LoggedInView currentUser={props.currentUser} t={t} />
      ) : (
        <LoggedOutView currentUser={props.currentUser} t={t} />
      )}
      <LanguageSelector i18n={i18n} t={t} />
    </nav>
  );
}

export default Header;
