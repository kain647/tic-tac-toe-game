import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./tic-tak-toe";
import Cpu from "./tic-tak-toe/cpu";
import PlayerGame from "./tic-tak-toe/player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="cpu-game" element={<Cpu />} />
        <Route path="player-game" element={<PlayerGame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
