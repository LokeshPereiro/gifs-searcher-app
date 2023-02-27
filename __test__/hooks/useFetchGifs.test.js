import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

describe("first", () => {
  test("Tiene que devolver el estado inicial", () => {
    // Necesitamos renderHook() para podemos evaluar los distintos estados del mismo. El ciclo de vida de cada estado/hook
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    // El result nos devuelve un obj current con los esdatos
    // console.log(result);
    const { images, isLoading } = result.current;

    // Estados iniciales (no tenemos imagnes, además isLoading es true)
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Tiene que devolver un arreglo de imagenes y isLoading false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // async await
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
