import React from 'react';
import './App.scss';
import { Bem } from './shared/bem';
import Content from './shared/Content';

const bem = new Bem('container');

const App: React.FC = () => (
  <div className={bem.b()}>
    <div className={bem.e('header')}>
      <h1>Stuart Tottle</h1>
      <h2>Software Engineer</h2>
    </div>
    <div className={bem.e('content')}>
      <Content />
    </div>
  </div>
);

export default App;
