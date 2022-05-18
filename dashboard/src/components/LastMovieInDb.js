import React from 'react';
import { useState, useEffect } from "react";

function LastMovieInDb(){
const [lastProduct, setLastProduct] = useState([]);
    useEffect(() => {
        fetch("api/products/lastProduct")
          .then(response => response.json())
          .then(data => {
            setLastProduct(data.data);
          });
      }, []);
    
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4 border border-info">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-primary">Ultimo producto</h5>
                    </div>
                    <div className="card-body ">
                        <div className="text-center">
                            {lastProduct.length === 0 && <p>Cargando...</p>}
                            <h3 className='card-title'>{lastProduct.name}</h3>
                            <div className='card-subtitle'>Precio: ${lastProduct.price}</div>
                            <div className='card-text'>Descripción: {lastProduct.description}</div>
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={`/images/productos/${lastProduct.imagen}`} alt="Imagen Producto"/>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }

export default LastMovieInDb;
