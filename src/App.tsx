import React from 'react';
import './App.scss';
import { Bem } from './shared/bem';
import ContentItem from './shared/ContentItem';
import github from './shared/logos/logo-github.svg';
import linkedin from './shared/logos/logo-linked-in.svg';
import medium from './shared/logos/logo-medium.svg';

const bem = new Bem('container');

const items = [
  {
    title: 'Writing',
    logo: medium,
    link: 'https://medium.com/@stuarttottle'
  },
  {
    title: 'Code',
    logo: github,
    link: 'https://github.com/stottle-uk'
  },
  {
    title: 'Profile',
    logo: linkedin,
    link: 'https://www.linkedin.com/in/stuarttottle/'
  }
];
const App: React.FC = () => {
  return (
    <div className={bem.b()}>
      <div className={bem.e('header')}>
        <h1>Stuart Tottle</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className={bem.e('content')}>
        {items.map(i => (
          <ContentItem key={i.title} item={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
