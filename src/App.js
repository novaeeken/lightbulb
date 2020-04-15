import React from 'react';
import Status from './components/Status';
import LightSwitch from './components/LightSwitch';
import LightBulb from './components/LightBulb';
import { LightProvider } from './context/LightProvider'
import './App.css';

function App() {
  return (
    <>
      <LightProvider>
        {/* Let op: het LightBulb component is eigenlijk onnodig. Meer bedoeld als inspiratie :) */}
        <LightBulb />
        <Status />
        <LightSwitch />
      </LightProvider>

      <p>Lightbulb css copied from
        <a href="https://codepen.io/joanaborges/details/JeKjwW">
          Joana Pereira.
        </a>
      </p>
    </>
  );
}

export default App;
