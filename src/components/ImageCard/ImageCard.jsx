const ImageCard = ({ urls }) => {
  return (
    <div>
      <img src={urls.small} alt="photo" />
    </div>
  );
};

export default ImageCard;
