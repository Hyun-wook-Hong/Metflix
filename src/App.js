import React from 'react';
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

// 4/30 routing fix
// 대신 App.js에는 함수형 컴포넌트 생성

// exact prop은 이 path가 아니면 무시하겠다는 뜻임.

function App(){
  return <HashRouter>
          <Navigation />
          <Route path="/" exact={true} component={ Home }/>
          <Route path="/about" component={ About }/>
        </HashRouter> ;
}

export default App;