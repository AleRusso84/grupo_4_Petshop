import React, { Component } from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de productos",
    valor: 100,
    icono: "fas fa-paw",
}

let amount = {
  color: "success",
  titulo: "Total de Usuarios",
  valor: 5,
  icono: "fa-solid fa-user-check",
  //<FontAwesomeIcon icon="fa-light fa-wine-glass-empty" />
};

let user = {
    color:   "warning",
    titulo: "Total de ...",
    valor: 10,
    icono: "fas fa-chart-bar",
    
}

let cardProps = [productInDataBase,amount,user];
let totC, totU, totP;


class ContentRowMovies extends Component {
  constructor() {
    super();
    this.state = {
      Total: [],
      totalesUsuarios: [],
      totalesProductos: [],
    };
  }
  componentDidMount() {
<<<<<<< HEAD
    fetch("/api/")
=======
    fetch("api/genres")
>>>>>>> 23a47b59ebe3d392ccaa3fbf2cac7223e5ced084
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((totalesC) => {
        this.setState({ Total: totalesC.data });
      })
      .catch((error) => console.log(error));

    fetch("api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((totalesU) => {
        this.setState({ totalesUsuarios: totalesU.data });

      })
      .catch((error) => console.log(error));
    fetch("api/products/")
      .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
      })
      .then((totalesP) => {
        this.setState({ totalesProductos: totalesP.data });
        //console.log(totalesU.prueba);
      })
      .catch((error) => console.log(error));
    
  }
  
  render() {
    return (
      <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
          
          {
            cardProps.map((producto, index) => {
              totC = this.state.Total.length
              totU = this.state.totalesUsuarios.length;
              totP = this.state.totalesProductos.length;
              cardProps[2].valor = totC
              cardProps[1].valor = totU
              cardProps[0].valor = totP;
            return <SmallCard {...producto} key={index} />;
          })
          }
        </div>
      </React.Fragment>
    );
  }
}
export default ContentRowMovies;