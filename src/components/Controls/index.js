import React from 'react'
import './index.css'

/**
 * Controls component for play, pause, and reset buttons.
 * Allows user to control the vehicle simulation.
 */
function Controls({playing, onPlay, onPause, onReset, disabled}) {
  return (
    <div className="controls">
      <button type="button" onClick={onPlay} disabled={playing || disabled}>
        Play
      </button>
      <button type="button" onClick={onPause} disabled={!playing}>
        Pause
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  )
}

export default Controls
