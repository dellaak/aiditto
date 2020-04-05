import styled from "styled-components";
import { Link as NLink } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

export const NavBar = styled(AppBar)`
height:100px;
background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
flex-direction:row;
`

export const NavLogo = styled.img`
width:250px;

`

export const LinkSection = styled.div`
display:flex;
flex:1;
justify-content:space-around;
align-self:center;

`


export const NavLink = styled(NLink)`
color:#1772a2;
text-decoration:none;
font-size:20px;
font-weight:500;
`

