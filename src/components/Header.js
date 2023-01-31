import { useState } from "react";

import { AboutMeView } from "./views/AboutMeView";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header>
      <nav>
        <div id="logo-name">
          <Link to="/"> &lt;Petar Belyanov&gt;</Link>
        </div>
        <div id="navigation">
          <Link to="/"> &lt;Home&gt;</Link>

          <Link to="/aboutMe"> &lt;About Me&gt;</Link>
          <Link to="/prevExp"> &lt;Previous Experience&gt;</Link>
          <Link to="/projects"> &lt;Projects&gt;</Link>
          <Link to="/contacts"> &lt;Contacts&gt;</Link>
        </div>
      </nav>
    </header>
  );
}
