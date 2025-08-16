export default function ScrollSection({
  children,
  className = '',
  sticky = false,
  minHeight = 'min-h-screen',
}) {
  const baseClasses = `relative w-full ${minHeight}`;
  const stickyClasses = sticky ? 'sticky top-0' : '';

  return <div className={`${baseClasses} ${stickyClasses} ${className}`}>{children}</div>;
}
