import React from 'react';
import './App.css';
import { Page } from './components/page'
import { BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exec path="/" component={Page}></Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
