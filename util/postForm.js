import styled from 'styled-components';

export const PostInput = styled.input`
  height: 3rem;
  font-size: 1.4rem;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border: solid 1px #333;
  border-radius: 0.5rem;
  background: #eee;
  padding: 0.6rem;
`;

export const PostButton = styled.button`
  font-size: 1.4rem;
  width: 25%;
  min-width: 60px;
  margin-top: 1rem;
  height: 3vh;
  min-height: 25px;
  background: #ddd;
  border: solid 1px #333;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #fff;
  }
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
