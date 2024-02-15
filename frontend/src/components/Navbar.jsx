import React from "react";
import { Box, ListItem, styled } from "@mui/material";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
const Item = styled(List)`
  display: flex;
  justify-content: space-evenly;
  background-color: black;
`;
const Itemlist = styled(ListItem)`
  justify-content: center;
  color: white;
  font-size: 22px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const NavLink = styled(Link)`
text-decoration:none;
color: inherit;
`


const Navbar = () => {
  return (
    <Box>
      <Item>
      <Itemlist> <NavLink to='/'>Home </NavLink> </Itemlist>
        <Itemlist><NavLink to='/add'> Add Members </NavLink></Itemlist>
        <Itemlist><NavLink to='/all'>All Members</NavLink></Itemlist>
      </Item>
    </Box>
  );
};

export default Navbar;
