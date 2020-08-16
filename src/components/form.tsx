import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form: React.FC = () => {
  const [id, setId] = useState<number>();
  const [username, setUsername] = useState<string>('名無しさん');
  const [text, setText] = useState<string>();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert('本文が入力されていません');
      return;
    }

    axios({
      method: 'post',
      // url: 'http://localhost:5000/api/v1/posts/',
      url: 'https://faam-app.herokuapp.com/api/v1/posts/',
      data: {
        id,
        username,
        text,
      },
    }).then((res) => {
      console.log(res.data);
      alert('送信に成功しました');
    });
  };

  useEffect(() => {
    // TODO: やり方が汚い 現在の投稿数を取得して投稿IDを +1 にしている
    axios({
      method: 'get',
      // url: 'http://localhost:5000/api/v1/posts/',
      url: 'https://faam-app.herokuapp.com/api/v1/posts/',
    }).then((res) => {
      setId(res.data.length + 1);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="名前" onChange={handleChangeName} />
      <input type="text" placeholder="本文" onChange={handleChangeText} />
      <input type="submit" placeholder="送信" />
    </form>
  );
};

export default Form;
