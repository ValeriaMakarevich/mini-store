interface MenuItemProps {
  label: string;
  href: string;
  icon?: string;
  variant?: 'desctop' | 'mobile';
}

export default function MenuItem({ label,href, icon, variant }: MenuItemProps) {
  return (
   <li>
    <a href={href} className={variant == "mobile" ? "flex items-center gap-3" : ""}>
        {icon && variant == "mobile" && <img src={icon} alt="" className="w-6 h-6"/>}
        {label}
    </a>
   </li>
    
  );
}
