import React, { Component } from 'react';

//import 'react-virtualized/styles.css'
import { Grid } from 'react-virtualized';
import './App.css';

// Grid data as an array of arrays
const list = [
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['fuk u steven', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  // And so on...
];

function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[rowIndex][columnIndex]}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Grid
        cellRenderer={cellRenderer}
        columnCount={list[0].length}
        columnWidth={140}
        height={300}
        rowCount={list.length}
        rowHeight={50}
        width={500}
      />
    );
  }
}

export default App;
