import React, { useState, ChangeEvent } from 'react';
import Layout from '../Layout/Layout';
import ExternalLink from '../../Components/ExternalLink';
import './App.css';

import { evaluateGraph } from '../../Modules/Graph';
import type { Result } from '../../Modules/Graph';

function App() {
  const [ inputValue, setInputValue ] = useState('');
  const [ result, setResult ] = useState<Result|null>(null);
  const [ error, setError ] = useState<string|null>(null);
  
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(null);
    setError(null);
    setInputValue(event.target.value);
  }

  const handleCheckClick = () => {
    try {
      const res = evaluateGraph(inputValue);
      setResult(res);
    } catch (err: any) {
      setError(err.message as string);
    }
  }

  return (
    <Layout title="Red-Blue Graph">
      <div className="intro">
        <p>
          This small webapp checks whether a provided graph is connected
          and red-blue colorable.
        </p>
        <p>
          Graph theory related readings:
          1) <ExternalLink href="https://en.wikipedia.org/wiki/Bipartite_graph">
            bipartite graph
          </ExternalLink>;
          2) <ExternalLink href="https://en.wikipedia.org/wiki/Connectivity_(graph_theory)">
            connected graph
          </ExternalLink>;
        </p>
      </div>
      <div className="form">
        <p><strong>Enter a graph by providing some paths:</strong></p>
        <ul>
          <li>a word is node</li>
          <li>a dash is and edge</li>
          <li>a comma or a new line a separation between paths</li>
        </ul>
        <textarea
          rows={8}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleCheckClick}>Check</button>
        {
          result !== null &&
          <div className={`result ${result[0] && result[1] ? 'success' : 'fail' }`}>
            The graph entered
            { result[0] === false && " is NOT red-blue colorable - analysis aborted" }
            { (result[0] === true && result[1] === false) && " is at least partially red-blue colorable, but NOT connected - analysis aborted" }
            { (result[0] && result[1]) && " is red-blue colorable and connected" }
          </div>
        }
        {
          error !== null &&
          <div className="error" onClick={() => { setError(null); }}>
            {error}
          </div>
        }
      </div>
    </Layout>
  );
}

export default App;
