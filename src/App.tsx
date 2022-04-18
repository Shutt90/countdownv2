import React from 'react';
import './App.css';
import CardContainer from './containers/CardContainer';
import Layout from './containers/Layout';
import SumsContainer from './containers/SumsContainer';
import Button from './components/Button';
import Screen from './components/Screen';

function App() {
  return (
    <div className="app">
        <Layout>
          <CardContainer />
          <div className="flex">
            <Screen/>
          </div>
          <SumsContainer />
          <div className="flex">
            <Button content="Try me" />
          </div>
        </Layout>
    </div>
  );
}

export default App;
