import { PostStyle } from '../util/style';

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
      <PostStyle />
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
