import React from 'react';
import { FarmDocument } from '../interfaces';

const Farm: React.FC<FarmDocument> = (props) => {
  const { author, title, contributions } = props;
  return (
    <div>
      <h2>
        {author}さんの一言日記「{title}」
      </h2>
      <ul>
        {contributions &&
          contributions.map((contribution) => (
            <li>
              {contribution.date}: {contribution.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Farm;
