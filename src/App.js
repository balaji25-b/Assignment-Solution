import React, {useState, useEffect, useRef} from 'react'
import MapView from './components/MapView'
import Controls from './components/Controls'
import Metadata from './components/Metadata'
import './App.css'

// Calculates speed between two points using Haversine formula and timestamp difference
function calculateSpeed(prev, curr) {
  if (!prev || !curr) return 0
  const R = 6371e3
  const phi1 = (prev.latitude * Math.PI) / 180
  const phi2 = (curr.latitude * Math.PI) / 180
  const deltaPhi = ((curr.latitude - prev.latitude) * Math.PI) / 180
  const deltaLambda = ((curr.longitude - prev.longitude) * Math.PI) / 180
  const a =
    Math.sin(deltaPhi / 2) ** 2 +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) ** 2
  const d = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const t1 = new Date(prev.timestamp).getTime()
  const t2 = new Date(curr.timestamp).getTime()
  const deltaT = (t2 - t1) / 1000
  return deltaT === 0 ? 0 : (d / deltaT).toFixed(2)
}

function App() {
  // Holds route data from dummy-route.json
  const [routeData, setRouteData] = useState(null)
  // Holds fetch error message, if any
  const [loadingError, setLoadingError] = useState(null)
  // Current index on route for vehicle position
  const [currentIdx, setCurrentIdx] = useState(0)
  // Play/pause state for animation
  const [playing, setPlaying] = useState(false)
  const intervalRef = useRef()

  // Fetch route data on component mount
  useEffect(() => {
    fetch('/dummy-route.json')
      .then(res => {
        if (!res.ok) throw new Error(`Fetch error: ${res.statusText}`)
        return res.json()
      })
      .then(data => {
        setRouteData(data)
        setLoadingError(null)
      })
  }, [])

  // Update vehicle position at fixed intervals when playing
  useEffect(() => {
    if (playing && routeData) {
      intervalRef.current = setInterval(() => {
        setCurrentIdx(idx => (idx < routeData.length - 1 ? idx + 1 : idx))
      }, 1500)
    }
    return () => clearInterval(intervalRef.current)
  }, [playing, routeData])

  const handlePlay = () => setPlaying(true)
  const handlePause = () => setPlaying(false)
  const handleReset = () => {
    setPlaying(false)
    setCurrentIdx(0)
  }

  // Display error message if loading route data failed
  if (loadingError)
    return <div style={{padding: '20px', color: 'red'}}>{loadingError}</div>

  // Display loading message while fetch is ongoing
  if (routeData === null)
    return <div style={{padding: '20px'}}>Loading route data...</div>

  // Handle empty route data edge case
  if (routeData.length === 0)
    return <div style={{padding: '20px'}}>No route data available.</div>

  // Slice route data up to current point for partial polyline
  const routeSoFar = routeData.slice(0, currentIdx + 1)

  // Calculate speed between current and previous points
  const speed =
    currentIdx > 0
      ? calculateSpeed(routeData[currentIdx - 1], routeData[currentIdx])
      : 0

  return (
    <div className="container">
      <h2>Vehicle Movement: Hyderabad Junction → Charminar</h2>
      {/* Map with vehicle and route */}
      <MapView
        route={routeSoFar}
        vehiclePosition={routeData[currentIdx]}
        start={routeData[0]}
        end={routeData[routeData.length - 1]}
      />
      {/* Play, pause, reset controls */}
      <Controls
        playing={playing}
        onPlay={handlePlay}
        onPause={handlePause}
        onReset={handleReset}
        disabled={currentIdx === routeData.length - 1}
      />
      {/* Metadata display: current position, speed, elapsed time */}
      <Metadata
        position={routeData[currentIdx]}
        speed={speed}
        elapsed={
          currentIdx > 0
            ? (new Date(routeData[currentIdx].timestamp) -
                new Date(routeData[0].timestamp)) /
              1000
            : 0
        }
      />
    </div>
  )
}

export default App
