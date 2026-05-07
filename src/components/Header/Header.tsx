import { useState } from "react";
import Container from "../Container/Container";
import HeaderAction from "./HeadetAction";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Header(){
  const [isMenuOpen, setIsOpenMenu ] = useState(false)

    return (
      <header className="flex w-full">
        <Container className="flex items-center mt-3">
          <button onClick={() => setIsOpenMenu(true)} className="lg:hidden w-5 h-5">
            <img src="icons8-меню.svg" alt="бургер-кнопка мобильного меню"  />
          </button>
          <Logo className = "mt-auto"/>
          <Menu className="ml-80 lg:ml-115" />
          <HeaderAction className="ml-16 lg:ml-24" />
        </Container>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsOpenMenu(false)} />
      </header>
    );
}