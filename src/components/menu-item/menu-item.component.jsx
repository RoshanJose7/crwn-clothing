import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  const menuStyles = { backgroundImage: `url(${imageUrl})` };
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      style={size === "large" ? { height: "380px" } : {}}
    >
      <div className="background-img" style={menuStyles} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
