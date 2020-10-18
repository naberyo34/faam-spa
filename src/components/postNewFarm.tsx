import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewFarm } from '../modules/action';
import { PostFarm } from '../interfaces';

const PostNewFarm: React.FC = () => {
  const dispatch = useDispatch();
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

    dispatch(postNewFarm.start(data));
  };

  return (
      <form onSubmit={handleSubmit} className="form postNewFarm">
        <input
          type="text"
          placeholder="新規作成"
          onChange={handleChange}
          className="form__text form__text--ml"
        />
        <button type="submit" className="form__button">
          作成!
        </button>
      </form>
  );
};

export default PostNewFarm;
