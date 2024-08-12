import { useEffect } from 'react';
import './Nav.css';
import { useState } from 'react';

function Nav () {

  // const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if(window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // },[]);

  return (
    <div className="nav">
      <img 
      className="nav_logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxEBMLbl-8uhton5uDuSIP5zxDa_dMA_9to4B9VAO_ZezcXm_Vy5wBF8&s=10" 
      alt="Netflix" />

      <img 
      className="nav_avatar"
      src="https://www.w3schools.com/images/w3schools_green.jpg" 
      alt="Netflix" />
    </div>
  )
}

export default Nav;