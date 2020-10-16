import React, { useState } from 'react';
import axios from 'axios';
import { PostFarm } from '../interfaces';

const New: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      alert('名前を入力してね');
      return;
    }

    // 新しいファームを作成
    const data: PostFarm = {
      // TODO: ユーザーを取得する
      author: 'ryo watanabe',
      title,
      contributions: [],
    };

    // [POST] axios で ファームを追加
    axios({
      method: 'post',
      url: `http://localhost:5000/api/v1/farm/`,
      // url: `https://faam-app.herokuapp.com/api/v1/farm/`,
      data,
    }).then((_res) => {
      alert('送信に成功しました');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="新しい農場名を入れてね"
        onChange={handleChange}
      />
      <button type="submit">作成!</button>
    </form>
  );
};

export default New;
