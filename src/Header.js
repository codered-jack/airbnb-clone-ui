import React from "react";
import "./Header.css";
import { Search as SearchIcon } from "@material-ui/icons";
import {
  Language as LanguageIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      />
      <div class="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div class="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
