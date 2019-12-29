import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #403f3f;
`;

export const Card = styled.div`
  display: flex;
  width: 35vw;
  background: #ddd;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 1vw;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
`;

export const FormTitle = styled.h3`
  font-family: 'Coda', cursive;
  font-size: 3rem;
  line-height: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
  height: 2.5rem;
  font-size: 1.2rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border: solid 1px #333;
  border-radius: 0.2rem;
  background: #eee;
  padding: 0.4rem;
`;

export const FormButton = styled.button`
  font-size: 1.2rem;
  margin-top: 1rem;
  height: 4vh;
  background: #ddd;
  border: solid 1px #333;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #fff;
  }
`;
