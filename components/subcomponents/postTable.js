import PostData from './postData';

const Table = ({ headers, data, setData, token }) => (
  <table>
    <thead>
      <tr>
        {headers.map((h, i) => (
          <th key={i}>{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((post, index) => (
        <PostData
          key={index}
          id={post.Id}
          title={post.Title}
          link={post.Link}
          data={data}
          setData={setData}
          index={index}
          shared={post.Shared}
          token={token}
        ></PostData>
      ))}
    </tbody>
  </table>
);
export default Table;
