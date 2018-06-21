import React from 'react'
import './GameOver.css';
import { Link } from 'react-router-dom'

const GameOver = () => (
  <div className="overContainer">
    <h1>Game Over! You Suck!</h1>
    <Link to='/'>Try Agian</Link>

  </div>
)

export default GameOver;