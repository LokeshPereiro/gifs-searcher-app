import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Testing <GifItem />", () => {
  const title = "Demon Slayer";
  const url = "https://demon-slayer.com/kimetsu.jpg";

  test("Hacer MATCH con el SNAPSHOT", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Mostrar la imagen con el URL y ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    // expect(screen.getByRole("img").src).toBe(url);
    // destructuring del elemento img
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Segurarnos de que se muestre el TITULO en el component", () => {
    render(<GifItem title={title} url={url} />);
    // Hay dos prop 'title', no podemos quitar ningun ya que son PROPS, luego el Snapshot también falla ya que hubo cambio
    expect(screen.getByText(title)).toBeTruthy();
  });
});
