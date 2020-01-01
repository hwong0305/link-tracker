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
  width: 375px;
  background: #ddd;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 1vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
`;

export const FormTitle = styled.h3`
  font-family: 'Coda', cursive;
  font-size: 3.6rem;
  line-height: 1em;
  margin-top: 1em;
  margin-bottom: 0.1em;
`;

export const FormInput = styled.input`
  height: 2.5em;
  font-size: 1.6rem;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 0.5em;
  border: solid 1px #333;
  border-radius: 0.2em;
  background: #eee;
  padding: 0.8em;
`;

export const FormButton = styled.button`
  font-size: 1.6rem;
  margin-top: 1em;
  height: 2em;
  background: #ddd;
  border: solid 1px #333;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #fff;
  }
`;
