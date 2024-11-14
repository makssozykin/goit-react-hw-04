import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <ImageCard urls={article.urls} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
