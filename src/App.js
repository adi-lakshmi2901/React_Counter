// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Even from './components/Even';
import Odd from './components/Odd';
import Buttons from './components/Buttons';
// import {Even}
export default function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      {count%2===0 ? <Even /> : <Odd/>} 
      
      <Buttons increment={()=>setCount(count+1)}  decrement={()=>setCount(count-1)}  reset={()=>setCount(count*0)}/>
      
    </div>
  );
}


