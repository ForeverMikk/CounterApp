import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await y fetch", () => {
  test("debe retornar una imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
