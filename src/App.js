import React, { useState } from 'react';

import { Table } from './components/table/Table'
import { UserInput } from './components/userInput/UserInput';
import { getLines} from './utilities/util';
import './App.css';


function App() {
  const [lines, setLines] = useState([])
  const [delimiter, setDelimiter] = useState(',')
  const [noOfLines, setNoOfLines] = useState(2)

  //this is blocking operation. Could otherwise be done with backend API with node for eg.
  async function onFileSelect(event) {
    await getLines(event).then(data => setLines(data));
  }

  return (
    <div className="App">
      <UserInput 
        lines={lines}
        onSetDelemiter={(value) => setDelimiter(value)}
        onSetNoOfLines={(value) => setNoOfLines(value)}
        onFileSelect={(event) => onFileSelect(event)}
      />
      <Table lines={lines} delimiter={delimiter} noOfLines={noOfLines}/>
    </div>
  );
}

export default App;
