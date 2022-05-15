const ProductsTable = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>${props.price.toLocaleString("es-AR")}</td>
      <td>{props.discount}%</td>
      <td>{props.category}</td>
      <td>
        <img
          src={`http://localhost:3030/images/products/${props.image}`}
          style={{ width: "100px" }}
          alt={props.name}
        />
      </td>
    </tr>
  );
};

export default ProductsTable;
