import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("getSaludo dede de regresar un Nombre", () => {
    const nombre = "Micharl";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  // getSaludo debe de retornar Hola Carlos si no recibe argumento
  test("getSAludo regresa Hola Carlos", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos!");
  });
});
