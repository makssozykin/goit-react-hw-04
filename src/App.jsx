import { useEffect, useState } from 'react';
import { fetchImages } from './services/api';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (query === '') return;
    const getData = async () => {
      try {
        const { results, total_pages } = await fetchImages(query, page);
        setTotalPages(total_pages);
        setArticles(prevArticles => [...prevArticles, ...results]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [query, page]);

  const handleSubmitQuery = query => {
    setArticles([]);
    setQuery(query);
    setPage(1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmitQuery} />
      {articles.length > 0 && (
        <button onClick={() => setPage(prev => prev + 1)}>Load more</button>
      )}
      <ImageGallery articles={articles} />
    </>
  );
}

export default App;
