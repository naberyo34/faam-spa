import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FarmDocument } from './interfaces';
import Farm from './components/farm';
import Post from './components/post';
import New from './components/new';
import './reset.css';
import './App.css';

const App: React.FC = () => {
  const [farms, setFarms] = useState<FarmDocument[]>();

  useEffect(() => {
    // [GET] axios で APIサーバーからファームを全件取得
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/v1/farm/',
      // url: 'https://faam-app.herokuapp.com/api/v1/farm/',
    }).then((res) => {
      setFarms(res.data);
    });
  }, []);

  return (
    <section>
      {farms &&
        farms.map((farm) => (
          <React.Fragment key={farm._id}>
            <Farm
              _id={farm._id}
              author={farm.author}
              title={farm.title}
              contributions={farm.contributions}
            />
            <Post _id={farm._id} />
          </React.Fragment>
        ))}
      <New />
    </section>
  );
};

export default App;
