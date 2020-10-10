import React from 'react';
import { PostData } from '../interfaces';

const Post: React.FC<PostData> = (props) => {
  const { name, age } = props;
  return (
    <div className="post">
      <h2>
        名前 : <span className="username">{name}</span>
      </h2>
      <p>{age}</p>
    </div>
  );
};

export default Post;
