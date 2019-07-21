import React from 'react';
import { Bem } from '../shared/bem';

const bem = new Bem('app-slide-menu');

interface HeaderSideProps {
  isVisible: boolean;
  children: React.ReactChild;
  toggleMenu: () => void;
}

const HeaderSide: React.FC<HeaderSideProps> = ({ isVisible, toggleMenu, children }) => (
  <div
    className={bem.b({
      'is-visible': isVisible
    })}
    onTouchMove={toggleMenu}
  >
    <div className={bem.e('content')}>{children}</div>
    <div className={bem.e('close')} onClick={toggleMenu} />
  </div>
);

export default HeaderSide;
