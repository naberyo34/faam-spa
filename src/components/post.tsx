import React, { useState } from 'react';
import axios from 'axios';
import { Contribution } from '../interfaces';

interface PostProps {
  _id: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { _id } = props;
  const [description, setDescription] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDescription(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 現在の時刻を取得
    const date = new Date().toJSON();
    const data: Contribution = {
      date,
      description,
    } 

    // [PUT] axios で 対象のファームにコントリビューションを追加
    axios({
      method: 'put',
      // url: `http://localhost:5000/api/v1/farm/${_id}/contribution`,
      url: `https://faam-app.herokuapp.com/api/v1/farm/${_id}/contribution`,
      data,
    }).then((_res) => {
      alert('送信に成功しました');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ひとこと" onChange={handleChange} />
      <button type="submit">送信</button>
    </form>
  );
};

export default Post;
