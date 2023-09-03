import { Link } from "react-router-dom";
import { Language } from "./Language";
import   "./Header.css"
import { Region } from "./Region";

export function Header() {
  return (
    <header className="site-header">
      <nav className="site-header__nav">
        <div className="container">
          <div className="site-header__wrapper">
            <Link className='site-logo' to="/">namozvaqti.uz</Link>
           <ul className="site-header__list">
            <Language/>
             <Region  />
           </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
