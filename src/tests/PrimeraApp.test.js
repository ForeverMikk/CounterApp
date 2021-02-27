//En esta prueba ya vamos a trabajar sobre un componente de React
import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
// import { render } from "@testing-library/react";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  // ESTA ES LA FORMA DE HACER PRUBAS POR DEAULT
  //   test('debe de mostrar el mensaje "Hola soy Goku"', () => {
  // const saludo = "Hola, soy Goku";
  //Puedes hacerlo de esta manera o con desestructuracion
  // const wrapper = render(<PrimeraApp saludo={saludo} />);
  // wrapper.getByText();
  // const { getByText } = render(<PrimeraApp saludo={saludo} />);
  // expect(getByText(saludo)).toBeInTheDocument();
  //   });
  // eSTA ES LA FORMA DE HACER PRUEBAS CON ENZYNE
  test("debe mostrar <Primer<App />", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subtitulo = "Soy un Subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
