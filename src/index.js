import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/button';
import ClassButton from './components/class_button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <h1>This is my react class six</h1>
    </div>
    <Button />
    <ClassButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

