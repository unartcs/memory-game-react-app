import { useEffect, useRef, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Score from './components/Score';
function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  useEffect(()=>{
    console.log('Score is ' + score.current)
  },[score])
  return (
    <div className="App">
      <h1>Horror Villians memory game</h1>
      <Score score={score} highScore={highScore}/>
      <CardList score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
    </div>
  );
}

export default App;
