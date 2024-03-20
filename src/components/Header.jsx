import Search from "./Search";
import Cart from "./Cart";
import Account from "./Account";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__row">
          <div className="header__left">
            <p className="header__title">Буше</p>
          </div>
          <div className="header__right">
            <Search />
            <Account />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
