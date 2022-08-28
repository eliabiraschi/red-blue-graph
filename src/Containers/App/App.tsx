import React, { useState, ChangeEvent } from 'react';
import Layout from '../Layout/Layout';
import ExternalLink from '../../Components/ExternalLink/ExternalLink';
import Result from '../../Components/Result/Result';
import ErrorBox from '../../Components/ErrorBox/ErrorBox';
import { evaluateGraph } from '../../Modules/Graph';
import type { Result as ResultType } from '../../Modules/Graph';
import './App.css';

function App() {
  const [ inputValue, setInputValue ] = useState('');
  const [ result, setResult ] = useState<ResultType|null>(null);
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
          This small webapp checks whether a provided graph is <ExternalLink href="https://en.wikipedia.org/wiki/Connectivity_(graph_theory)">
            connected
          </ExternalLink> and <ExternalLink href="https://en.wikipedia.org/wiki/Bipartite_graph">
            red-blue colorable
          </ExternalLink>.
        </p>
      </div>
      <div className="form">
        <p><strong>Enter a graph by providing some paths with the following format:</strong></p>
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
        <Result value={result} />
        <ErrorBox message={error} onClick={() => { setError(null); }} />
      </div>
    </Layout>
  );
}

export default App;
