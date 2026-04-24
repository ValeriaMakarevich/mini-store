import Container from "../Container/Container";
import HeaderAction from "../HeaderAction/HeadetAction";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

export default function Header(){
    return (
      <header className="flex">
        <Container className="flex items-center mt-3">
          <Logo />
          <Menu />
          <HeaderAction />
        </Container>
      </header>
    );
}