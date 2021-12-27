import React from 'react';
import './App.scss';
import Content from './content/Content';

const App: React.FC = () => (
  <div className="container">
    <div className="header">
      <h1>Stuart Tottle</h1>
      <h2>Software Engineer</h2>
    </div>
    <div className="content">
      <Content />
    </div>
  </div>
);

export default App;
