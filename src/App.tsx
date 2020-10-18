import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from './modules/reducers';
import { getAllFarms } from './modules/action';
import Farm from './components/farm';
import PutNewContribution from './components/putNewContribution';
import PostNewFarm from './components/postNewFarm';
import './reset.css';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const farms = useSelector((state: State) => state.farms);

  useEffect(() => {
    dispatch(getAllFarms.start());
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
            <PutNewContribution _id={farm._id} />
          </React.Fragment>
        ))}
      <PostNewFarm />
    </section>
  );
};

export default App;
