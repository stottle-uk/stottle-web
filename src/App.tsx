import React from 'react';
import './App.scss';
import Header from './layout/Header';
import { Bem } from './shared/bem';

const bem = new Bem('app-container');

const App: React.FC = () => {
  return (
    <div className={bem.b()}>
      <header className={bem.e('header')}>
        <Header />
      </header>
      <aside className={bem.e('aside')}>aside</aside>
      <main className={bem.e('main')}>main</main>
      <footer className={bem.e('footer')}>footer</footer>
    </div>
  );
};

export default App;
