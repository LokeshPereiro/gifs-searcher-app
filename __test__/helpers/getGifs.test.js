import { getGifs } from "../../src/helpers/getGifs";

describe("Testing <getGifs />", () => {
  test("Comprobar que la funcion cumple con su tarea, es decir, nos devuele un arreglo con los resultados", async () => {
    const gifs = await getGifs("Cats");
    // console.log(gifs);
    // No sabemos cuantos resultados puede devolvernos, pero siempre devolverá un arreglo con algun elemento
    expect(gifs.length).toBeGreaterThan(0);

    // Cómo deberiamos de recibir el obj con los resultados
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      // Aqui se podría evaluar de que la url de la imagen tenga 'https://' (includes, startsWith)
      url: expect.any(String),
    });
  });
});
