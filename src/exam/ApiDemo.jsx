import { useState } from 'react';

function ApiDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummy-json.mock.beeceptor.com/posts');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>API Data Table</h1>

      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>

      {data.length > 0 && (
        <table border="1" cellPadding="8" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Link</th>
              <th>Comments</th>
            </tr>
          </thead>

          <tbody>
            {data.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <a href={post.link} target="_blank" rel="noreferrer">
                    Open
                  </a>
                </td>
                <td>{post.comment_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiDemo;