import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Engine from './Test.js';
import Start from './Start.js';
import GameOver from './GameOver.js';
 
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route path='/play' component={Engine}/>
        <Route path='/gameover' component={GameOver}/>
      </Switch>
    </main>
  )
  
  export default Main;