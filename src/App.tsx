import React from 'react';
import './App.css';
import CardContainer from './containers/CardContainer';
import Layout from './containers/Layout';

function App() {
  return (
    <div className="app">
        <Layout>
          <CardContainer />
        </Layout>
    </div>
  );
}

export default App;
