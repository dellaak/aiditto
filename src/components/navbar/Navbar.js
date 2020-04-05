import React from 'react'
import S from "../../elements/styledComponents"


const Navbar = () => {


  const userNavLinks = [
    { path: '/', text: 'Home' },
    { path: '/', text: 'About' },
    { path: '/', text: 'Provider' },
    { path: '/', text: 'Requestor' },
    { path: '/', text: 'Contact us' },
  ];

  return (
    <S.NavBar position="static" >
      <S.NavLogo src="/images/aidittologo.png" alt="navbarlogo" />
      <S.LinkSection>
        {userNavLinks.map(navLink => {
          return <S.NavLink to={navLink.path}>{navLink.text}</S.NavLink>;
        })}
      </S.LinkSection>
    </S.NavBar>
  )
}

export default Navbar;