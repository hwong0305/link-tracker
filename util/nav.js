import styled from 'styled-components';

export const Brand = styled.span`
  font-size: 34px;
  margin-left: 2vw;
  font-family: 'Coda', cursive;
`;

export const StyledNav = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 70px;
  background: #403c3c;
  color: #ccc;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.a`
  display: inline-block;
  line-height: 35px;
  height: 35px;
  width: 90px;
  color: #ccc;
  border: solid 1px #ccc;
  background: inherit;
  margin: 0 1vw 0 1vw;
  border-radius: 0.5vw;
  font-family: sans-serif;
  font-size: 16px;
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
  height: 35px;
  width: 90px;
  color: #ccc;
  border: solid 1px #ccc;
  background: inherit;
  margin: 0 1vw 0 1vw;
  border-radius: 0.5vw;
  font-size: 16px;
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
  visibility: hidden;
  width: 0;
  color: #ccc;

  @media (max-width: 700px) {
    visibility: visible;
    width: 50px;
  }
`;
