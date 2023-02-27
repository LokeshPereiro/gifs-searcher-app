import { render, screen } from "@testing-library/react";
import { GifGridItems } from "../../src/components/GifGridItems";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Testing al comp <GigGridItems />", () => {
  const search = "One Love";

  test("Tiene que enseñar el loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGridItems search={search} />);
    expect(screen.getByText(search));
    expect(screen.getByText("GIFs Loading..."));
    screen.debug();
  });
  //   Mock del custom hook, es decir, simular que nos llegan los datos
  test("Cargar items de la llamada a la api mediante el useFetchGifs", () => {
    const gifs = [
      {
        id: "idabc1233x",
        title: "Cats",
        url: "https://giphy.com/gifs/cats.jpg",
      },
      {
        id: "idabc128dg3x",
        title: "Dragon",
        url: "https://giphy.com/gifs/dragon.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGridItems search={search} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
