import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putNewContribution } from '../modules/action';
import { Contribution } from '../interfaces';

interface Props {
  _id: string;
}

const PutNewContribution: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
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
    };
    const payload = {
      _id,
      data,
    };

    dispatch(putNewContribution.start(payload));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ひとこと" onChange={handleChange} />
      <button type="submit">達成!</button>
    </form>
  );
};

export default PutNewContribution;
