import React, {useState} from "react";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from 'reactstrap';
import {NavLink as RouterNavLink, NavLink as RouterLink} from "react-router-dom"
import style from "./Header.module.css"
import LoginButton from "../LoginButton/LoginButton";
import {useAuth0} from "@auth0/auth0-react";
import * as PropTypes from "prop-types";

function FontAwesomeIcon(props) {
    return null;
}

FontAwesomeIcon.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string
};

function Header(props) {
    const {appTitle, logo, navItems, authNavItems} = props;
    const [isOpen, setIsOpen] = useState(false);
    const {
        user,
        isAuthenticated,
        logout,
    } = useAuth0();
    const toggle = () => setIsOpen(!isOpen);

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });

    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink exact={item.exact}
                            to={item.url}
                            className="nav-link">
                    {item.text}
                </RouterLink>
            </NavItem>
        )
    });


    const authItemList = authNavItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink exact={item.exact}
                            to={item.url}
                            className="nav-link">
                    {item.text}
                </RouterLink>
            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>
            <Navbar expand="md" dark>
                    <NavbarBrand className="me-5">
                        <RouterLink to="/">
                            <img className={style.logo} src={logo} alt=""/>
                            <span className={style.title}>{appTitle}</span>
                        </RouterLink>
                    </NavbarBrand>

                    <NavbarToggler className="me-2" onClick={toggle}/>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mx-5 mx-md-0" navbar>
                            {itemList}
                        </Nav>
                        {/*
                         {isAuthenticated && (
                            <Nav className="mx-5 mx-md-0" navbar>
                                {authItemList}
                            </Nav>
                        )}
                        */}



                        {!isAuthenticated ? (
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <LoginButton/>
                                </NavItem>
                            </Nav>
                        ) : (
                            <Nav className="ms-auto" navbar>
                                <NavItem className="mx-5">
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret id="profileDropDown">
                                            <img
                                                src={user.picture}
                                                alt="Profile"
                                                className="nav-user-profile rounded-circle"
                                                width="45"
                                            />
                                        </DropdownToggle>
                                        <DropdownMenu className={style.dropdownMenuRight}>
                                            <DropdownItem header>{user.name}</DropdownItem>
                                            <DropdownItem
                                                tag={RouterNavLink}
                                                to="/profile"
                                                className="dropdown-profile"
                                                activeClassName="router-link-exact-active"
                                            >
                                                <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                                            </DropdownItem>
                                            <DropdownItem
                                                id="qsLogoutBtn"
                                                onClick={() => logoutWithRedirect()}
                                            >
                                                <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                                                out
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                </NavItem>
                            </Nav>


                        )}

                    </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;