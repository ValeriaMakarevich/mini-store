import { navItems } from "../../config/menu";
import CartIcon from "../../Icon/CartIcon";
import UserIcon from "../../Icon/UserIcon";
import MenuItem from "./MenuItem";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed lg:hidden flex flex-col items-center text-2xl gap-9 top-0 left-0 h-full bg-white  inset-0 ${!isOpen ? "hidden" : ""}`}
    >
      <button onClick={onClose}>
        <img
          className="w-8 h-8 absolute top-1 left-4 p-2"
          src="icons8-удалить (1).svg"
          alt="кнопка закрыть меню "
        />
      </button>
      <input
        className="text-base bg-gray-100 py-4 px-2 w-9/10"
        type="text"
        name=""
        id=""
        placeholder="Например: Apple iphone 15"
      />
      <nav>
        <ul className="flex flex-col text-2xl gap-9">
          {navItems.map((item) => (
            <MenuItem key={item.label} {...item} variant="mobile" />
          ))}
        </ul>
      </nav>
      <ul className="flex flex-col gap-7 mt-12">
        <li className="flex items-center gap-3">
          <UserIcon className="w-5 h-5" /> Личный кабинет
        </li>
        <li className="flex items-center gap-3">
          <CartIcon className="w-5 h-5" /> Корзина: (0)
        </li>
      </ul>
    </div>
  );
}
