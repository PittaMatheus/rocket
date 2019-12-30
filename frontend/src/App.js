import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <img className="imgLogo" src={logo} alt="Logo do clube"></img>
      <div className="content">
        <p>
          Entre e descubra seus talentos abelha rainha <strong>palmeiras</strong> mundial 51
       </p>
        <form>
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="fla email" />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
