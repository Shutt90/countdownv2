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

  // function animateHand() : any {
  //   document.getElementById('hand').activeElement;
  // }


  return (
    <div className="app">
        <Layout>
          <div className="clock">
              <img alt="clock" className="clock_face" src="/clockface.png"></img>
              <img id="hand" alt="hand on clock" className="clock_hand" src="/clockhand.png"></img>
            </div>
          <CardContainer />
          <div className="flex space-between">
            <Screen value={targetNum}/>
            <SumsContainer />

          </div>
          <div className="flex">
            <Button onClick={() => {
              setTargetNum(generateNums(1000));
              // animateHand();
            }}

              content="Try me" />
          </div>

        </Layout>
    </div>
  );
}

export default App;
