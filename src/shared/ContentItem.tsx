import React from 'react';
import { Bem } from './bem';

const bem = new Bem('content-item');

interface ContentItem {
  title: string;
  logo: string;
  link: string;
}

interface OwnProps {
  item: ContentItem;
}

const ContentItem: React.FC<OwnProps> = ({ item }) => (
  <a
    className={bem.b()}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className={bem.e('header')}>{item.title}</h3>
    <div className={bem.e('body')}>
      <img src={item.logo} alt={item.title} />
    </div>
  </a>
);

export default ContentItem;
