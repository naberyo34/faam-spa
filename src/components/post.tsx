import React, { useState } from 'react';

const Post: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 途中

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ひとこと" />
      <button type="submit">送信</button>
    </form>
  );
};

export default Post;
