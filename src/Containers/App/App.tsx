import React, { useState, ChangeEvent }from 'react';
import './App.css';

import { parse, isBipartite } from '../../Modules/Graph';
import type { AdjacencyList } from '../../Modules/Graph';

function App() {
  const [ inputValue, setInputValue ] = useState('');
  
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  }

  const evaluateGraph = () => {
    const adjList: AdjacencyList = parse(inputValue);
    const res = isBipartite(adjList);
    console.log(res);
  }

  return (
    <main className="App">
      <h1>Red-Blue</h1>
      <textarea value={inputValue} onChange={handleInputChange} />
      <button onClick={evaluateGraph}>Check</button>
    </main>
  );
}

export default App;
