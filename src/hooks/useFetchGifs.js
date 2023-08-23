import { useState, useEffect } from "react";
import { getApiGifs } from "../helpers/getApiGifs";

export const useFetchGifs = (searchKey) => {
  const [imagesGifs, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagesGifs = async () => {
    const newImgGifs = await getApiGifs(searchKey);
    setImages(newImgGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagesGifs();
  }, []);

  return {
    gifs: imagesGifs,
    isLoading: isLoading,
  };
};
