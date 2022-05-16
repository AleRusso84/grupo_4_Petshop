const UsersTable = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.user}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.address}</td>
    </tr>
  );
};

export default UsersTable;
