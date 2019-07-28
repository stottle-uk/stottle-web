import React from 'react';
import './App.scss';
import Header from './layout/Header';
import { Bem } from './shared/bem';

const bem = new Bem('app-container');

const App: React.FC = () => {
  const items = Array.from({ length: 5 }, (v, i) => i).map(i => <div>{i}</div>);

  return (
    <div className={bem.b()}>
      <Header className={bem.e('header')} />
      <main className={bem.e('body')}>
        <aside className={bem.e('aside')}>
          <div>{items}</div>
        </aside>
        <section className={bem.e('main')}>
          <div>{items}</div>
        </section>
      </main>
      <footer className={bem.e('footer')}>footer</footer>
    </div>
  );
};

export default App;
