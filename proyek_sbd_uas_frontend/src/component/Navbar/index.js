import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';
import logo_web from '../../assets/NavbarAsset/logo_web_white.png'
import logo_Valo from '../../assets/NavbarAsset/valo_logo_white.png'
import logo_PUBG from '../../assets/NavbarAsset/pubg_logo_white.png'
import logo_ML from '../../assets/NavbarAsset/ml_logo_white.png'
import logo_Add from '../../assets/NavbarAsset/add-account.png'
import "./index.css"
import { FaBold } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to ='/'>
        <img src={logo_web} alt='logo' className='logo-web'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavBtnLink to='/HomeValoPages'>
          <img src={logo_Valo} alt='Valo' />
          </NavBtnLink>
          <NavBtnLink to='/HomePUBGPages'>
          <img src={logo_PUBG} alt='PUBG' />
          </NavBtnLink>
          <NavBtnLink to='/HomeMLPages'>
          <img src={logo_ML} alt='ML' />
          </NavBtnLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/SignUpPages'><img src={logo_Add} alt='ML' />Add Your Own Data</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}
export default Navbar;
