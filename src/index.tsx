import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return <div>Hello World</div>;
}

const root = createRoot(document.body);
root.render(<App />);
