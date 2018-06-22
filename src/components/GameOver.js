import React from 'react'
import './GameOver.css';
import { Link } from 'react-router-dom'

const GameOver = () => (
  <div className="overContainer">
    <h1>Game Over!</h1><br />
    <h1>Good try, but learn from your mistakes and try agian! </h1>
    <Link to='/'><span className="bigger">Try Agian</span></Link>

  </div>
)

export default GameOver;