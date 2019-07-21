import React, { useState } from 'react';
import { Bem } from '../shared/bem';
import HeaderSide from './HeaderSide';

const bem = new Bem('app-header');

const bemHeaderSide = new Bem('app-header-side');

const Header: React.FC = () => {
  const [isMenuVisible, setMenu] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenu(!isMenuVisible);
  };

  return (
    <div className="w-100 h-100">
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
        <HeaderSide isVisible={isMenuVisible} toggleMenu={toggleMenu}>
          <div className={bemHeaderSide.b()}>
            <div className={bemHeaderSide.e('header')}>
              <button onClick={toggleMenu}>
                <span className="close" />
              </button>
            </div>
            <div className={bemHeaderSide.e('main')}>main</div>
          </div>
        </HeaderSide>
      </div>
    </div>
  );
};

export default Header;
