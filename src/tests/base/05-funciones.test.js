import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-Funcones", () => {
  test("Debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("Debe retornar un objeto con un valor que ingresemos", () => {
    const nombre = "Michael";

    // const userTestActive = {
    //   uid: "ABC567",
    //   username: nombre,
    // };

    const userActive = getUsuarioActivo(nombre);

    // expect(userActive).toEqual(userTestActive);
    expect(userActive).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
