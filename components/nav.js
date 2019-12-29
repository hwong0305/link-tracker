import styled from 'styled-components';

const Brand = styled.span`
  font-size: 1.7rem;
  margin-left: 2rem;
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 5vh;
  background: #403c3c;
  color: #ccc;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Nav = () => {
  return (
    <StyledNav>
      <Brand>Link Tracker</Brand>
    </StyledNav>
  );
};

export default Nav;
