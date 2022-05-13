
import React, { useEffect } from "react";

function NotFound() {

  useEffect(() => {
    window.location.href = "http://localhost:3030/404";
  }, []);

  return (
    <div>
      <h2>Redireccionando...</h2>
    </div>
  );
}


export default NotFound;