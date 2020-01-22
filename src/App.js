import React from 'react';
import { Amount } from './Amount';
import { Controls } from './Controls';
import "./styles.css";

function App() {

  return (
    <div className="app-container">
      <Amount />
      <div className="separator" />
      <Controls />
    </div>
  )
}

export { App };