import React, { useState } from 'react'
import Stats from './Stats'
import Game from './Game'

export default function App() {
  const [health, setHealth] = useState(100)
  const updateHealth = (points) => {
    setHealth(health + points)
  }

  return (
    <div>
      <h3>Stats:</h3><Stats healthPoints={health} />
      <h3>Game:</h3><Game updateHealth={updateHealth} />
    </div>
  )
}
