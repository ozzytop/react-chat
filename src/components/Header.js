import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/" href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/roomChat">Room Chat</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/liveVisitors">Live Visitors</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
    </div>
  );
}

export default Header;