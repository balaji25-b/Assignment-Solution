import React from 'react'
import './index.css'

/**
 * Metadata component shows current coordinate,
 * timestamp, speed in m/s, and elapsed simulation time.
 */
function Metadata({position, speed, elapsed}) {
  return (
    <div className="metadata">
      <div>
        <strong>Coordinates: </strong>
        {position.latitude.toFixed(6)}, {position.longitude.toFixed(6)}
      </div>
      <div>
        <strong>Timestamp: </strong>
        {new Date(position.timestamp).toLocaleString()}
      </div>
      <div>
        <strong>Speed: </strong>
        {speed} m/s
      </div>
      <div>
        <strong>Elapsed Time: </strong>
        {elapsed} seconds
      </div>
    </div>
  )
}

export default Metadata
