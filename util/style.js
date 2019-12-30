export const PostStyle = () => {
  return (
    <style jsx>
      {`
        h1 {
          text-align: center;
        }
        table {
          border-collapse: collapse;
          text-align: left;
          width: 100%;
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
        @media (max-width: 760px) {
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
            margin-bottom: 40px;
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
      `}
    </style>
  );
};