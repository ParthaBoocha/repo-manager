import React from 'react';
import { Box, Text } from "gestalt";
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from './logo.svg';
import Logout from './Logout';

const Header = () => {
    return (
        <header>
          <Box color="darkGray" height={40} alignItems="center" direction="row" display="flex" paddingX={12}>
            <Box paddingX={1}>
              <img src={logo} className="Logo" alt="logo" />
            </Box>
            <Box paddingX={1}>
              <Text bold color="white">Repo Manager</Text>
            </Box>
            <Box paddingX={3} flex="grow">
              <NavLink to='/repos' className='Nav-Link' activeClassName='Nav-Link-Active'>Repos</NavLink>
              <Logout />
            </Box>
          </Box>
        </header>
    );
};

export default Header;