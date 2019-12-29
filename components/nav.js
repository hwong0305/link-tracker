import { Fragment, useContext } from 'react';
import { AuthContext } from '../context/authContest';

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
  // this will be moved into a consumer
  const { loggedIn } = useContext(AuthContext);
  return (
    <StyledNav>
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
            <NavButton>Logout</NavButton>
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
          <NavIconButton type="button">
            <i className="fa fa-bars"></i>
          </NavIconButton>
        </HiddenMenu>
      </div>
    </StyledNav>
  );
};

export default Nav;