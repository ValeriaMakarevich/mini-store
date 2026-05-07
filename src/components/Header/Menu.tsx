import { navItems } from "../../config/menu";
import MenuItem from "./MenuItem";

export default function Menu({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Основная навигация" className="hidden lg:flex">
      <ul className={`flex gap-11 text-sm ${className}`}>
        {navItems.map((item) => (
          <MenuItem key={item.label} {...item} variant="desctop" />
        ))}
      </ul>
    </nav>
  );
}
