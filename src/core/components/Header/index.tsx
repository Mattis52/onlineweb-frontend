import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'App';
import MainSponsor from './MainSponsor';
import HeaderLogo from './HeaderLogo';
import style from './header.less';
import HeaderLogin from './Login'

export const Header = () => (
  <header className={style.header}>
    <div className={style.grid}>
      <HeaderLogo />
      <div className={style.links}>
        <Link to={routes.events}>Arkiv</Link>
        <Link to={routes.career}>Karriere</Link>
        <Link to={routes.resources}>Ressurser</Link>
        <Link to={routes.hobbygroups}>Interessegrupper</Link>
        <Link to={routes.wiki}>Wiki</Link>
        <Link to={routes.webshop}>Webshop</Link>
        <HeaderLogin />
      </div>
      <MainSponsor />
    </div>
  </header>
);

export default Header;
