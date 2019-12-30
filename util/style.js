import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
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
    margin-top: 3rem;
    margin-bottom: 4rem;
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
  }
  table td span {
    background: #eee;
    color: dimgrey;
    display: none;
    font-size: 10px;
    font-weight: bold;
    padding: 5px;
    position: absolute;
    text-transform: uppercase;
    top: 0;
    left: 0;
  }
  tbody tr:hover {
    background: #eee;
  }
  table td .mobile__link {
    display: none;
  }
  @media (max-width: 760px) {
    table {
      margin-bottom: 6rem;
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
      flex-wrap: wrap;
    }
    table td {
      border: 1px solid;
      margin: 0 -1px -1px 0;
      padding-top: 35px;
      position: relative;
      width: 50%;
    }
    table td span {
      display: block;
    }
  }
  @media (max-width: 550px) {
    table td .desktop__table__link {
      display: none;
    }

    table td .mobile__link {
     display: inline-block;
    }
  }
`;
