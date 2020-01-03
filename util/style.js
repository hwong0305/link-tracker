import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Coda';
    src: url('/static/fonts/Coda-Regular.ttf');
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
  }
  h1 {
    text-align: center;
  }
  table {
    border-collapse: collapse;
    text-align: left;
    width: 100%;
    margin-top: 3em;
  }
  table tr {
    border-bottom: 1px solid;
  }
  table th {
    text-transform: uppercase;
  }
  table th,
  table td {
    padding: 10px 20px;
    font-size: 1.4rem;
    min-height: 42px;
  }
  table td span {
    background: #eee;
    color: dimgrey;
    display: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5em;
    position: absolute;
    text-transform: uppercase;
    top: 0;
    left: 0;
  }
  tbody tr:hover {
    background: #eee;
  }
  table td .mobile {
    display: none;
  }
  td.del {
    display: flex;
  }
  .deleteButton{
    color: rgba(255, 50, 50, 0.7);
    border: none;
    background: inherit;
    padding: 0;
    height: 1.4rem;
    cursor: pointer;
    line-height: 1.4rem;
    font-size: 1.4rem;
    text-align:left;
  }
  .postFormLabel{
    font-size: 1.4rem;
    select {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      margin-left: 1em;
      font-size: 1.4rem;
      width: 100px;
    }
  }
  @media (max-width: 760px) {
    table {
      margin-bottom: 6em;
    }
    table thead {
      left: -9999px;
      position: absolute;
      visibility: hidden;
    }
    table tr {
      border-bottom: 0;
      display: flex;
      flex-direction: row;
    }
    table td {
      border: 1px solid;
      margin: 0 -1px -1px 0;
      padding-top: 35px;
      position: relative;
      width: 33.3%;
    }
    table td span {
      display: block;
    }
    table td .desktop {
      display: none;
    }
    table td .mobile {
     display: inline-block;
    }
  }
`;
