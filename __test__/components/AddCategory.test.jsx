import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Test <AddCategory />", () => {
  const searchKey = "Gatos";

  test("Leer los valores del Input", () => {
    // onNewSearchingGif --> es una func / prop que es obligatorio
    render(<AddCategory onNewSearchingGif={() => {}} />);

    // Nuestro State lee los valores del input, donde el value=inputValue, por lo que lo que haya escrito el user tendrá que ser idético al value
    // Es decir, lo que se escribe y lo que se guarda en el useState tienen que ser iguales
    const searchInput = screen.getByRole("textbox");
    fireEvent.input(searchInput, { target: { value: searchKey } });
    expect(searchInput.value).toBe(searchKey);
  });

  test("Submit: Se tiene que llamar a la func onNewSearchingGif si el input tiene un valor", () => {
    //    Como saber que esta funcion de verda recogío los datos del input
    const onNewSearchingGif = jest.fn();

    render(<AddCategory onNewSearchingGif={onNewSearchingGif} />);

    const searchInput = screen.getByRole("textbox");
    const formulario = screen.getByRole("form");

    fireEvent.input(searchInput, { target: { value: searchKey } });
    fireEvent.submit(formulario);
    // screen.debug();
    // Despues del submit esperamos que el input esté vacío y/o value=''
    expect(searchInput.value).toBe("");

    expect(onNewSearchingGif).toHaveBeenCalled();
    // expect(onNewSearchingGif).toHaveBeenCalledTimes(2);
    // Ahora si sabemos que se llamo al menos una vez y con el valor del input
    expect(onNewSearchingGif).toHaveBeenCalledWith(searchKey);
  });

  test("onNewSearchingGif no es llamado cuando el input es vaío y/o solo hay un caracter de búsqueda", () => {
    const onNewSearchingGif = jest.fn();
    render(<AddCategory onNewSearchingGif={onNewSearchingGif} />);

    const formulario = screen.getByRole("form");
    fireEvent.submit(formulario);

    // Esto da error ya que se llama al menos una vez..
    // expect(onNewSearchingGif).toHaveBeenCalled(0);
    expect(onNewSearchingGif).not.toHaveBeenCalled();
  });
});
