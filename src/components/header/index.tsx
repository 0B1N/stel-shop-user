import styled from "styled-components";
import HamburgerIcon from "components/Icon/HamburgerIcon";

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <img src="/logo.png" alt="logo" className="header__logo" />

      <HamburgerIcon className="header__hamburger" />
    </header>
  );
}

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .header__logo {
    width: 129px;
    object-fit: cover;
  }
`;
