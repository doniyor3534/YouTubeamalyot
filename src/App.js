import React, { useContext } from 'react';
import './App.css';
import { DataContext } from './Components/DataContext';
import YouTube from './YouTube/YouTube';







function App() {
  const {root}=useContext(DataContext)
  
  return (
    <div className={root ? 'app root activeroot' : 'app root '}>
         <YouTube/>
    </div>
  );
}

export default App;
