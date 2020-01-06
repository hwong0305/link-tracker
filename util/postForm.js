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
  max-width: 780px;
  margin-bottom: 3em;
`;

export const Switch = styled.label`
  display: inline-block;
  width: 48px;
  height: 18px;
  cursor: pointer;
  position: relative;
  background: rgba(255, 50, 50, 0.7);
  border: solid 1px #dfdfdf;
  border-radius: 9px;
  transition: 0.4s;
  --webkit-transition: 0.4s;

  a {
    position: absolute;
    transition: opacity 0.4s;
    --webkit-transition: opacity 0.4s;
    opacity: 1;
  }

  &::after {
    display: inline-block;
    position: absolute;
    left: 1px;
    border: solid 1px #000;
    content: '';
    width: 14px;
    height: 14px;
    background: #dfdfdf;
    border-radius: 50%;
  }

  input:checked + &::after {
    left: 34px;
  }

  input:checked:not(:disabled) + & {
    background: rgba(34, 139, 34, 0.8);
  }

  input:not(:checked) ~ & ~ a {
    display: none;
  }

  input:disabled + & {
    background: #efefef;
    cursor: auto;
  }
`;

export const Checkbox = styled.input`
  display: none;
`;
