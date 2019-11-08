import React, { useState } from 'react';
import { Bem } from '../shared/bem';
import Header from './Header';

const bem = new Bem('app-container');
const bemHeader = new Bem('app-header');

interface HeaderSideProps extends React.HTMLProps<HTMLDivElement> {}

const HeaderSide: React.FC<HeaderSideProps> = ({ children }) => {
  const [isMenuVisible, setMenu] = useState<boolean>(false);
  const asideClass = bem.e('aside', {
    'is-visible': isMenuVisible
  });
  const toggleMenu = () => {
    setMenu(!isMenuVisible);
  };

  return (
    <div className={bem.b()}>
      <Header className={bem.e('header')} toggleMenu={toggleMenu} />
      <main className={bem.e('main')}>
        <div className={asideClass}>manu </div>
        <div className={bem.e('content')}>{children}</div>
      </main>
      <footer className={bem.e('footer')}>footer</footer>
    </div>
  );
};

export default HeaderSide;
