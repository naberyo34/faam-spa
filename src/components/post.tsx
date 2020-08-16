import React from 'react';
import { PostData } from '../interfaces';

const Post: React.FC<PostData> = (props) => {
  const { id, username, text } = props;
  return (
    <div className="post">
      <h2>
        {id} 名前 : <span className="username">{username}</span> 2020/08/17(月)
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default Post;
