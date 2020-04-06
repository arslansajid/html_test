import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './index.css';
import Drawer from '@material-ui/core/Drawer';
import SvgLogo from "../SvgLogo" 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Header">
            {/* <Navbar className="d-lg-flex d-md-flex d-none" light expand="md">
                    <Nav className="mr-auto ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink >About</NavLink>
                        </NavItem>
                        <svg viewBox="0 65 300 200">
                            <use xlinkHref={`${require('../../assets/images/logo.svg')}#logo`}></use>
                        </svg>
                        <div>
                        <SvgLogo
                            width={"300px"}
                            fill={'#fff'}
                        />
                        </div>
                        <NavItem>
                            <NavLink href="/components/">Service</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink >Contact</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar> */}
        
            <div className="nav-container d-lg-flex d-md-flex d-none">
                <div className="nav-wrapper">
                    <a>HOME</a>
                    <a>ABOUT</a>
                    <SvgLogo
                        width={"300px"}
                        fill={'#fff'}
                    />
                    <a>HOME</a>
                    <a>ABOUT</a>
                </div>
            </div>
            
            {/* for mobiles only */}
            <div className="mobile-header d-none">
                <div className="nav-wrapper-mobile">
                    <SvgLogo
                        width={"300px"}
                        fill={'#fff'}
                    />
                    <div className="mr-4" onClick={() => toggle()}>
                        <img src={require("../../assets/images/burger.png")} alt="logo" />
                    </div>
                </div>
            </div>

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
