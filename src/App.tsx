import React, { useState } from 'react';
import './App.css';
import CardContainer from './containers/CardContainer';
import Layout from './containers/Layout';
import SumsContainer from './containers/SumsContainer';
import Button from './components/Button';
import Screen from './components/Screen';
import generateNums from './helpers/generateNums';

function App() {
  const [targetNum, setTargetNum] = useState<number>(0)

  return (
    <div className="app">
        <Layout>
          <CardContainer />
          <div className="flex space-between">
            <Screen value={targetNum}/>
            <SumsContainer />
          </div>
          <div className="flex">
            <Button onClick={() => setTargetNum(generateNums(1000))} content="Try me" />
          </div>
        </Layout>
    </div>
  );
}

export default App;
