import styled from 'styled-components';

export const Brand = styled.span`
  font-size: 3.4rem;
  margin-left: 2vw;
  font-family: 'Coda', cursive;
`;

export const StyledNav = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 7rem;
  background: #403c3c;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.a`
  display: inline-block;
  line-height: 2.5em;
  height: 2.5em;
  width: 6em;
  color: #ccc;
  border: solid 1px #ccc;
  background: inherit;
  margin: 0 1vw 0 1vw;
  border-radius: 0.5vw;
  font-family: sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #ddd;
    font-weight: bold;
  }
`;
export const NavButton = styled.button`
  height: 2.5em;
  width: 6em;
  color: #ccc;
  border: solid 1px #ccc;
  background: inherit;
  margin: 0 1vw 0 1vw;
  border-radius: 0.5vw;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #ddd;
    font-weight: bold;
  }
`;

export const NavIconButton = styled.button`
  border: none;
  background: inherit;
  color: #ccc;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #ddd;
  }
`;

export const CollapsingDiv = styled.div`
  margin-right: 1vw;

  @media (max-width: 700px) {
    visibility: hidden;
    width: 0;
  }
`;

export const HiddenMenu = styled.div`
  display: none;
  width: 0;
  color: #ccc;
  width: 40px;

  @media (max-width: 700px) {
    display: block;
  }
`;
