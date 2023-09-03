import { NavLink } from "react-router-dom";
export const Language = () => {
  return (
    <>
      <li className="site-hader__item">
        <NavLink
          className="site-header__lang"
          activeClassName="active"
          to="uz"
          exact
        >
          uz
        </NavLink>
      </li>
      <li className="site-hader__item">
        <NavLink
          className="site-header__lang"
          activeClassName="active"
          to="ru"
        >
          ру
        </NavLink>
      </li>
      <li className="site-hader__item">
        <NavLink
          className="site-header__lang"
          activeClassName="active"
          to="en"
        >
          en
        </NavLink>
      </li>
    </>
  );
};
