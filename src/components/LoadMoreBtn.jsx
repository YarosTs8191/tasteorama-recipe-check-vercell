import clsx from 'clsx';
import s from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({
  onClick,
  hidden = false,
  disabled = false,
  isLoading = false,
  fullWidth = true,
  children = 'Load more',
  className,
}) {
  if (hidden) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading ? 'true' : 'false'}
      className={clsx(s.root, fullWidth && s.fullWidth, className)}
    >
      {isLoading && <span className={s.spinner} aria-hidden="true" />}
      <span>{isLoading ? 'Loading…' : children}</span>
    </button>
  );
}
