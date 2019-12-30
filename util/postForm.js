import styled from 'styled-components';

export const PostInput = styled.input`
  height: 2rem;
  font-size: 0.8rem;
  width: 70%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border: solid 1px #333;
  border-radius: 0.2rem;
  background: #eee;
  padding: 0.4rem;
`;

export const PostButton = styled.button`
  font-size: 0.8rem;
  width: 25%;
  margin-top: 1rem;
  height: 3vh;
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

export const PostForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;