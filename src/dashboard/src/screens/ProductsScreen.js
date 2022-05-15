import { Component } from "react";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ProductsTable from "../components/Tables/ProductsTable";
import "../App.css";

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: "",
          name: "",
          description: "",
          price: "",
          discount: "",
          image: "",
          product_category: {
            name: "",
          },
          detail: "",
        },
      ],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3030/api/products");
    const responseJSON = await response.json();
    const products = responseJSON.data;
    console.log(products);

    this.setState({
      productList: products,
    });
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Lista de productos</h1>
                </div>
                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.productList.map((product) => (
                        <ProductsTable
                          id={product.id}
                          name={product.name}
                          description={product.description}
                          price={product.price}
                          discount={product.discount}
                          category={product.categoryProductos_id.name}
                          image={product.image}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsScreen;
