import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NavbarTogglerCP(props) {
  const [collapsed, setCollapsed] = useState(true);


  const toggleNavbar = () => setCollapsed(!collapsed);



  return (
    <div>
      <Navbar color="dark" light>
        <NavbarBrand href="/" className="me-auto text-white">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className=''>
            <NavItem>
              <NavLink href="https://redblock.com.br" className='text-white'>
                Redblock
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTogglerCP;