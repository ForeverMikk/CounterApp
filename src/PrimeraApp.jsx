import React from "react";
import PropTypes from "prop-types";
//Functional Componets

//Aqui estamos usando desestructuracion para mandar
// el valor de las props del index,js a este componente
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <prev>{JSON.stringify(saludo, null,4)}</prev> */}
      <p>{subtitulo}</p>
    </>
  );
};

/*Ejemplo para definir proptypes(propiedades) como obligatiros*/
PrimeraApp.propTypes = {
  /*Aqui Estamos definiendo el tipo de variable que va a ser 
    la pripiedad y decir que es requerida */
  saludo: PropTypes.string.isRequired,
};

/*Aqui es para definir los valores por defecto de las props*/
PrimeraApp.defaultProps = {
  subtitulo: "Soy un Subtitulo",
};
export default PrimeraApp;
