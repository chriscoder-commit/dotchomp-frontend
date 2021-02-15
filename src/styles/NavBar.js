import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Nav = styled.nav`
color: pink; 
font-family: 'Lato', sans-serif;
display: flex; 
justify-content: space-around;
`

export const NavLink = styled(Link)`
text-decoration: none;
:hover {
    color: lightblue; 
}`