const LoadMoreBtn = ({ onLoadMore, isActive }) => {
  return (
    <>
      <button type="button" onClick={() => onLoadMore()} disabled={isActive}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
