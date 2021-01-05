import React from "react";
import s from "./Settings.module.css";

const Settings = (props) => {
  return (
  <div className={s.content}>
    <div className={s.hoodie}>Hoodie</div>
    <div>Sweatshirt</div>
    <div>Pants</div>
    <div>Accesories</div>
  </div>);
};

export default Settings;
