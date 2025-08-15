import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [isLoged,setLoged]=useState()
  return (
    <div className="App">
      DAni: {JSON.stringify(isLoged)}
      <button onClick={()=>setLoged(!isLoged)}>cambiar valor</button>
    </div>
  );
}

export default App;
