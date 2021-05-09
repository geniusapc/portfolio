import React from 'react';
import Routes from './routes/Routes';
import './App.css';

const App:React.FC = ()=> {
  return ( 
    <div className="App">
      <header className="App-header">
          <Routes />
      </header>
    </div>
  );
}

export default App;
