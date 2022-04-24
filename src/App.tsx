import React, { useState } from 'react';
import {motion} from 'framer-motion';
import './App.css';
import CardContainer from './containers/CardContainer';
import Layout from './containers/Layout';
import SumsContainer from './containers/SumsContainer';
import Button from './components/Button';
import Screen from './components/Screen';
import generateNums from './helpers/generateNums';

function App() {
  const [targetNum, setTargetNum] = useState<number>(0)
  const [handAnimation, setHandAnimation] = useState<boolean>(false)
  const [handDeg, setHandDeg] = useState<number>(0)
  
  const hand = {
    initial: {
    },
    animate: {
      transform: `rotate(${handDeg}deg)`,
      transition: {
        ease: 'linear',
        duration: 30,
        transitionEnd: {
          rotate: `rotate(0deg)`,
        },
      }
    },
  }

  return (
    <div className="app">
        <Layout>
          <div className="clock">
              <img alt="clock" className="clock_face" src="/clockface.png"></img>
              <motion.img
              variants={hand}
              initial="initial"
              animate={handAnimation ? "animate" : ""}
              onTransitionEnd={(e) => {
                setHandAnimation(false);
                setHandDeg(0);
              }  }
              id="hand"
              style={{ transformOrigin: 'center bottom' }}
              alt="hand on clock"
              className="clock_hand"
              src="/clockhand.png"/>
            </div>
          <CardContainer />
          <div className="flex space-between">
            <Screen value={targetNum}/>
            <SumsContainer />

          </div>
          <div className="flex">
            <Button onClick={() => {
              setTargetNum(generateNums(1000));
              setHandAnimation(true);
              setHandDeg(180);
            }}

              content="Try me" />
          </div>

        </Layout>
    </div>
  );
}

export default App;
