import { useState,useEffect } from "react";
import logo from "../../Assests/Logonetflix.png"
import avatar from "../../Assests/Netflix-avatar.png"

const Header = () => {
  const [nav , showNav] = useState(false);


 useEffect(() => {
    window.addEventListener("scroll",()=> {
      if(window.scrollY > 100){
        showNav(true)
      }else showNav(false)
    });
  },[])

  return (
    <div className={`header__container ${nav && "nav__black"}`}>
      <div className="header__content">
        <img className="header__img logo" src={logo} alt="logo" />
        <img className="header__img avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
export default Header;