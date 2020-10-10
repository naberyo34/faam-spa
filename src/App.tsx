import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostData } from './interfaces';
import Post from './components/post';
import Form from './components/form';
import './reset.css';
import './App.css';

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>();

  useEffect(() => {
    // axios で APIサーバーから投稿一覧を取得
    axios({
      method: 'get',
      // url: 'http://localhost:5000/api/v1/posts/',
      url: 'https://faam-app.herokuapp.com/api/v1/posts/',
    }).then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return (
    <section>
      <h1>Expressで作ったRESTful APIを叩くスレ</h1>
      {posts &&
        posts.map((post) => (
          <Post key={post.id} name={post.name} age={post.age} />
        ))}
      <Form />
    </section>
  );
};

export default App;
