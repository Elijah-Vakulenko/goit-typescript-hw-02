import axios from "axios";

const accessKey = "GlfM3-88yWSKTry7LxAZpnGQ87Jbs5FmaIxlagwEScU";
const apiUrl = "https://api.unsplash.com/";

export interface ImageFromAPI {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}

interface ResponseFromAPI {
  results: ImageFromAPI[];
  total: number;
  total_pages: number;
}

export const requestImages = async (): Promise<ResponseFromAPI> => {
  const { data } = await axios.get<ResponseFromAPI>(
    `${apiUrl}/search/photos?client_id=${accessKey}`
  );
  return data;
};

export const requestImagesByQuery = async (
  query: string = "",
  page: number = 1
): Promise<ResponseFromAPI> => {
  const { data } = await axios.get<ResponseFromAPI>(
    `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
  );
  return data;
};
