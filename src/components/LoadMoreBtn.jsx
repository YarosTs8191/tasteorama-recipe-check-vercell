export default function LoadMoreBtn({ onClick, disabled, hidden }) {
  if (hidden) return null;
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
}
