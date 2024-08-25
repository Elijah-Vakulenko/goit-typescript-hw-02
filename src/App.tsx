import { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { requestImagesByQuery, ImageFromAPI } from "./services/api";

function App() {
  const [images, setImages] = useState<ImageFromAPI[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageFromAPI | null>(null);

  useEffect(() => {
    async function fetchImagesByQuery() {
      try {
        setIsLoading(true);
        const data = await requestImagesByQuery(query, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => prevImages ? [...prevImages, ...data.results] : data.results);
        }
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length > 0) {
      fetchImagesByQuery();
    } else {
      setImages(null); 
    }
  }, [query, page]);

  const onSetSearchQuery = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const addMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: ImageFromAPI) => {
    setModalIsOpen(true);
    setSelectedImage(image); 
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} onImageClick={openModal} />}
      {images && <LoadMoreBtn onClick={addMoreImages} />}
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage} 
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default App;
