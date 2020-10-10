import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FarmDocument } from './interfaces';
import Farm from './components/farm';
import './reset.css';
import './App.css';

const App: React.FC = () => {
  const [farms, setFarms] = useState<FarmDocument[]>();

  // TODO: ローカル環境の判定をしているがちょっと雑
  const hostName = document.location.hostname;
  const api =
    hostName === 'localhost'
      ? 'http://localhost:5000/api/v1/farm/'
      : 'https://faam-app.herokuapp.com/api/v1/farm/';

  useEffect(() => {
    // axios で APIサーバーからファームを全件取得
    axios({
      method: 'get',
      url: api,
    }).then((res) => {
      setFarms(res.data);
    });
  }, []);

  return (
    <section>
      <h1>1行日記 (仮)</h1>
      {farms &&
        farms.map((farm) => (
          <Farm
            key={farm._id}
            _id={farm._id}
            author={farm.author}
            title={farm.title}
            contributions={farm.contributions}
          />
        ))}
    </section>
  );
};

export default App;
