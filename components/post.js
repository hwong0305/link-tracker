const Post = () => {
  const data = [
    {
      Title: 'F-650 Truck Review',
      Link: 'https://www.youtube.com/watch?v=JrHDeSMvnt4',
    },
    {
      Title: 'Dodge Ram SRT-10',
      Link: 'https://www.youtube.com/watch?v=2YKGMtv20cs',
    },
    {
      Title: 'G63 AMG 6X6 Truck',
      Link: 'https://www.youtube.com/watch?v=zrESlrGCALM',
    },
    {
      Title: 'Koenigsegg Agera RS1',
      Link: 'https://www.youtube.com/watch?v=_eXcPKdarLQ',
    },
  ];
  return (
    <div>
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
      <h1>Hello User!</h1>
      <table style={{ marginTop: '3rem' }}>
        <thead>
          <tr>
            {Object.keys(data[0]).map(h => {
              return <th>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map(it => {
            return (
              <tr>
                {Object.entries(it).map(([k, v]) => {
                  return (
                    <td>
                      <span>{k}</span>
                      {k === 'Link' ? <a href={v}>{v}</a> : v}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Post;
