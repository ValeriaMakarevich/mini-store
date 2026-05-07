export default function SearchIcon({className = "w-5 h-5"}:{className: string}){
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(39, 39, 39, 1)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    );
}