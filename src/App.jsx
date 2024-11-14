import { useEffect, useState, useMemo } from 'react';
import { fetchImages } from './services/api';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results, total_pages } = await fetchImages(query, page);
        if (total_pages === 0) return;
        setArticles(prevArticles => [...prevArticles, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const isActive = useMemo(
    () => (totalPages === page ? true : false),
    [totalPages, page]
  );
  const handleSubmitQuery = query => {
    setArticles([]);
    setQuery(query);
    setPage(1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmitQuery} />
      {isLoading && <Loader />}

      {articles.length > 0 && !isLoading && !error && (
        <LoadMoreBtn onLoadMore={handleLoadMore} isActive={isActive} />
      )}
      <ImageGallery articles={articles} />
      {error && <ErrorMessage />}
    </>
  );
}

export default App;
