export default function Container({ children, className }) {
  return <div className={`mx-60 ${className}`}>{children}</div>;
}
