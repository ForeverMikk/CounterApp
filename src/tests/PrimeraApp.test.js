//En esta prueba ya vamos a trabajar sobre un componente de React
import React from "react";
import { render } from "@testing-library/react";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  test('debe de mostrar el mensaje "Hola soy Goku"', () => {
    const saludo = "Hola, soy Goku";

    //Puedes hacerlo de esta manera o con desestructuracion
    // const wrapper = render(<PrimeraApp saludo={saludo} />);
    // wrapper.getByText();

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
