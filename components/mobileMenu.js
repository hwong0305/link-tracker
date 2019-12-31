import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';

const MobileModal = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 100;
`;

const MobileMenuDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 40vh;
  width: 100vw;
  z-index: 125;
  background: #403c3c;
  color: #ddd;
  font-size: 2rem;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    font-family: 'Coda';
  }

  a {
    text-decoration: none;
    color: #ddd;
    width: 100%;
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    height: 4em;
    line-height: 2em;
    font-size: 1.8rem;
    border-top: solid 1px #ddd;
  }

  a:last-child {
    border-bottom: solid 1px #ddd;
  }

  a:hover {
    background: #ddd;
    color: #222;
  }

  button {
    background: #403c3c;
    color: #ddd;
    width: 100%;
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    height: 4em;
    font-size: 1.8rem;
    border: none;
    border-top: solid 1px #ddd;
    border-bottom: solid 1px #ddd;
    cursor: pointer;
  }

  button:hover {
    background: #ddd;
    color: #222;
  }
`;

const MobileMenu = ({ click, loggedIn, logout }) => (
  <MobileModal onClick={click}>
    <MobileMenuDiv>
      <h3>Link-Tracker</h3>
      {loggedIn ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <Fragment>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/register">
            <a>Sign Up</a>
          </Link>
        </Fragment>
      )}
    </MobileMenuDiv>
  </MobileModal>
);

export default MobileMenu;
