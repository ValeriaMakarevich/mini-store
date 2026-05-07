import CartIcon from "../../Icon/CartIcon";
import SearchIcon from "../../Icon/SearchIcon";
import UserIcon from "../../Icon/UserIcon";

interface HeaderActionProps {
  className?: string;
}

export default function HeaderAction({ className = "" }: HeaderActionProps) {
  return (
    <ul
      className={`flex gap-3 lg:gap-5 ml-2 lg:ml-8${className} hidden lg:flex`}
    >
      <li>
        <SearchIcon className="w-5 h-5" />
      </li>
      <li>
        <UserIcon className="w-5 h-5" />
      </li>
      <li className="flex">
        <CartIcon className="w-5 h-5" />
      </li>
    </ul>
  );
}
