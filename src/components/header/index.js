import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './index.css';
import Drawer from '@material-ui/core/Drawer';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Header">
            <Navbar className="d-lg-flex d-md-flex d-none" light expand="md">
                    <Nav className="mr-auto ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink >About</NavLink>
                        </NavItem>
                        <svg className="desktop-logo" viewBox="0 65 300 200">
                            <use xlinkHref={`${require('../../assets/images/logo.svg')}#logo`}></use>
                        </svg>
                        <NavItem>
                            <NavLink href="/components/">Service</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink >Contact</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>

            {/* for mobiles only */}
            <Navbar className="mobile-header d-none" color="faded" light>
                <svg className="mobile-logo" preserveAspectRatio="none" viewBox="0 0 300 200" >
                    <use xlinkHref={`${require('../../assets/images/logo.svg')}#logo`}></use>
                </svg>
                <div onClick={() => toggle()}>
                    <img src={require("../../assets/images/burger.png")} alt="logo" />
                </div>
            </Navbar>

            <Drawer anchor={"right"} open={isOpen} onClose={() => toggle()} className="sidebar">
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/components/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Service</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >Contact</NavLink>
                    </NavItem>
                </Nav>
            </Drawer>
        </div>
    );
}

export default Header;
