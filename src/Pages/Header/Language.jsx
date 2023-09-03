import { NavLink } from "react-router-dom";
export const Language = () => {
  return (
    <>
      <li className="site-hader__item">
        <NavLink
          className="site-header__lang"
          
          to="uz"
        >
          uz
        </NavLink>
      </li>
      <li className="site-hader__item">
        <NavLink
          className="site-header__lang"
          
          to="ru"
        >
          ру
        </NavLink>
      </li>
      <li className="site-hader__item">
        <NavLink
          className="site-header__lang"
          
          to="en"
        >
          en
        </NavLink>
      </li>
    </>
  );
};
