import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ articles, onModal }) => {
  return (
    <div>
      <ul>
        {articles.map(article => (
          <li key={article.id} onClick={onModal}>
            <ImageCard urls={article.urls} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
