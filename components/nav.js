import { Fragment, useContext, useState } from 'react';
import { ThreeBars } from 'styled-icons/octicons/ThreeBars';
import { AuthContext } from '../context/authContext';
import MobileMenu from './mobileMenu';

import {
  Brand,
  CollapsingDiv,
  HiddenMenu,
  NavIconButton,
  NavButton,
  NavLink,
  StyledNav,
} from '../util/nav';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { loggedIn, changeLoggedIn, setUser, setToken } = useContext(
    AuthContext
  );
  return (
    <StyledNav>
      {toggle && (
        <MobileMenu
          click={() => {
            setToggle(!toggle);
          }}
        />
      )}
      <Brand>Link Tracker</Brand>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CollapsingDiv>
          {loggedIn ? (
            <NavButton
              onClick={() => {
                changeLoggedIn(false);
                setUser('');
                setToken('');
              }}
            >
              Logout
            </NavButton>
          ) : (
            <Fragment>
              <NavLink href="/register" alt="Sign Up">
                Sign Up
              </NavLink>
              <NavLink href="/login" alt="Login Page">
                Login
              </NavLink>
            </Fragment>
          )}
        </CollapsingDiv>
        <HiddenMenu>
          <NavIconButton
            type="button"
            onClick={() => {
              return setToggle(!toggle);
            }}
          >
            <ThreeBars size="34" />
          </NavIconButton>
        </HiddenMenu>
      </div>
    </StyledNav>
  );
};

export default Nav;
