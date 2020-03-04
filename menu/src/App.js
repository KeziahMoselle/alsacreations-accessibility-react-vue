import React, { useState, useEffect } from 'react'

export default function App() {
  // Our menu can be expanded or not
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    console.clear()
    console.log(
      `is menu expanded ? ${isExpanded ? 'YES' : 'NO'}`
    )
    console.log(
      `The menu is ${
        !isExpanded ? 'no longer' : 'now'
      } tabbable`
    )
  }, [isExpanded])

  return (
    <header>
      <div className="space-between">
        <h1>Brand</h1>

        <button
          id="menu-btn"
          aria-label="Menu"
          aria-expanded={isExpanded}
          aria-controls="menu"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span aria-hidden="true">≡</span>
        </button>
      </div>

      <nav
        id="menu"
        aria-hidden={!isExpanded}
        aria-labelledby="menu-btn"
      >
        <a href="#test">Link</a>
        <a href="#test">Link</a>
        <a href="#test">Link</a>
        <a href="#test">Link</a>
        <a href="#test">Link</a>
        <a href="#test">Link</a>
      </nav>
    </header>
  )
}
