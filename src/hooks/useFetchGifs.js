import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (search) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImgs = await getGifs(search);
    setImages(newImgs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
