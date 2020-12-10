import Logo from './Logo';
import AddArticleButton from './AddArticleButton';
import UserMenu from './UserMenu';

function Header() {
    return (
      <div className="header">
        <Logo />
        <AddArticleButton />
        <UserMenu />
      </div>
    );
  }
  
  export default Header;
  