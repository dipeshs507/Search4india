const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            
            <th>Title</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.title}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default Table;