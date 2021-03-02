import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Pruebas sobre el componente Counter App", () => {
  //En este caso usamos el let para que el wrapper sea una variable global
  let wrapper = shallow(<CounterApp value={5} />);

  //Esta instruccion se va a inicializar cada que se realice una prueba
  beforeEach(() => {
    wrapper = shallow(<CounterApp value={5} />);
  });

  test("debe mostrar Correctamente <CounterApp />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el valo por defecto como 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const valorPordefecto = wrapper.find("p").text().trim();

    expect(valorPordefecto).toBe("100");
  });

  test("debe de incrementar con el boton de +1", () => {
    // El .at(0) es para indicarle el indice del elemento que estas buscando
    // En este caso se busca el primer boton de 3
    wrapper.find("button").at(0).simulate("click");

    const counterText = wrapper.find("p").text().trim();

    expect(counterText).toBe("6");
  });

  test("debe de reducir el valor con el boton de -1", () => {
    wrapper.find("button").at(2).simulate("click");

    const counterText = wrapper.find("p").text().trim();

    expect(counterText).toBe("4");
  });

  test("debe de regresar el valor por defecto con el boton reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("p").text().trim();

    expect(counterText).toBe("105");
  });
});
