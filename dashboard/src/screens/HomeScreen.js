import { Component } from "react";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import DataCardSmall from "../components/DataCard/DataCardSmall/DataCardSmall";
import DataCardBig from "../components/DataCard/DataCardBig/DataCardBig";
import "../App.css";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
      smallCardsValues: [
        {
          title: "Productos en DB",
          value: "n/a",
          color: "primary",
          icon: "fa-clipboard-list",
        },
        {
          title: "Total de productos",
          value: "n/a",
          color: "success",
          icon: "fa-dollar-sign",
        },
        {
          title: "Cantidad de usuarios",
          value: "n/a",
          color: "warning",
          icon: "fa-user-check",
        },
      ],
      bigCardsValues: [
        {
          title: "Productos por categoría",
          value: "",
          image: "",
        },
        {
          title: "Último producto cargado",
          value: "",
          image: "",
        },
      ],
    };
  }
  async queryProductsAPI(endpoint) {
    const response = await fetch(
      `api/products/${endpoint}`
    );
    return await response.json();
  }
  async queryUsersAPI(endpoint) {
    const response = await fetch(`api/users/${endpoint}`);
    return await response.json();
  }

  async getProductsCount() {
    const countResponse = await this.queryProductsAPI("count");
    return countResponse.count;
  }

  async getProductsTotalPrice() {
    const countResponse = await this.queryProductsAPI("total-price");
    return countResponse.totalPrice;
  }

  async getProductsCategories() {
    const countResponse = await this.queryProductsAPI("");
    const productsCategories = countResponse.meta.countByCategory;
    const perrosCount = `Perros: ${productsCategories.perros} `;
    const gatosCount = `Gatos: ${productsCategories.gatos} `;
    const avesCount = `Aves: ${productsCategories.aves} `;
    const pecesCount = `Peces: ${productsCategories.peces} `;
    const totalCountArray = [
      perrosCount,
      gatosCount,
      avesCount,
      pecesCount,
    ];
    const productCategoryList = totalCountArray.map((item) => <li>{item}</li>);

    return productCategoryList;
  }

  async getLastProduct() {
    const countResponse = await this.queryProductsAPI("");
    const lastProduct = countResponse.data[countResponse.data.length - 1];
    const lastProductName = `Product: ${lastProduct.name},`;
    const lastProductDescription = `Description: ${lastProduct.description}`;
    const lastProductPrice = `Price: $${lastProduct.price}`;
    const lastProductArray = [
      lastProductName,
      lastProductDescription,
      lastProductPrice,
    ];

    const lastProductList = lastProductArray.map((item) => <li>{item}</li>);
    return lastProductList;
  }

  async getLastProductImage() {
    const countResponse = await this.queryProductsAPI("");
    const lastProduct = countResponse.data[countResponse.data.length - 1];
    const lastProductImage = `images/products/${lastProduct.image}`;
    return lastProductImage;
  }

  async getUsersCount() {
    const countResponse = await this.queryUsersAPI("count");
    return countResponse.count;
  }

  async updateData() {
    const smallCardsValues = [
      {
        title: "Products in Data Base",
        value: (await this.getProductsCount()).toString(),
        color: "primary",
        icon: "fa-clipboard-list",
      },
      {
        title: "Amount in products",
        value:
          "$ " + (await this.getProductsTotalPrice()).toLocaleString("es-AR"),
        color: "success",
        icon: "fa-dollar-sign",
      },
      {
        title: "Users quantity",
        value: (await this.getUsersCount()).toString(),
        color: "warning",
        icon: "fa-user-check",
      },
    ];

    const bigCardsValues = [
      {
        title: "Productos por categoría",
        value: await this.getProductsCategories(),
        image: "",
      },
      {
        title: "Último producto cargado",
        value: await this.getLastProduct(),
        image: (await this.getLastProductImage()).toString(),
      },
    ];

    this.setState({
      smallCardsValues,
      bigCardsValues,
    });
  }

  componentDidMount() {
    this.updateData();
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
                  <h1 className="h3 mb-0 text-gray-800">
                    MarkPet Dashboard
                  </h1>
                </div>
                <div className="row">
                  {this.state.smallCardsValues.map((elem, index) => {
                    return (
                      <DataCardSmall
                        key={index}
                        title={elem.title}
                        value={elem.value}
                        icon={elem.icon}
                        color={elem.color}
                      />
                    );
                  })}
                </div>
                <div className="row">
                  {this.state.bigCardsValues.map((elem, index) => {
                    return (
                      <DataCardBig
                        key={index}
                        title={elem.title}
                        value={elem.value}
                        image={elem.image}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
