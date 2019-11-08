import React from 'react';
import { Bem } from '../shared/bem';

const bem = new Bem('app-header');

interface HeaderProps {
  className: string;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, toggleMenu }) => {
  return (
    <header className={className}>
      <div className={bem.b()}>
        <button className={bem.e('menu-aside')} onClick={toggleMenu}>
          <span className="burger">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div className={bem.e('content')}>content</div>
        <button className={bem.e('menu-aside')}>Y</button>
      </div>
    </header>
  );
};

export default Header;
