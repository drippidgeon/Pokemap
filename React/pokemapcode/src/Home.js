import React, { useState } from 'react';
import './styles.css';

const Home = () => {
  const [hoverText, setHoverText] = useState('');

  return (
    <div className="home-container">
      <h1></h1>
      <div>
        <img src="assets/Pokemap_blank_cut_out.png" alt="Pokemap" />
      </div>

      {/* Tooltip-Box */}
      {hoverText && <div className="tooltip">{hoverText}</div>}

      {/* Buttons mit Hover-Text */}
      <div className="button-container">
        <form action="GIS_Web_Kanto/index.html">
          <input 
            type="submit" 
            value="Kanto"
            onMouseEnter={() => setHoverText('Die klassische Region, in der alles begann!')}
            onMouseLeave={() => setHoverText('')}
          />
        </form>
        <form action="GIS_Web_Johto/index.html">
          <input 
            type="submit" 
            value="Johto"
            onMouseEnter={() => setHoverText('Entdecke die Heimat von Lugia und Ho-Oh!')}
            onMouseLeave={() => setHoverText('')}
          />
        </form>
        <form action="GIS_Web_Einall/index.html">
          <input 
            type="submit" 
            value="Einall"
            onMouseEnter={() => setHoverText('Eine moderne Region voller Abenteuer!')}
            onMouseLeave={() => setHoverText('')}
          />
        </form>
       
      </div>
       {/* Neuer Info-Button unter den anderen Buttons */}
       <div className="info-button-container">
        <a 
          href="info.html" // Link zur Info-Seite
          className="info-button"
          onMouseEnter={() => setHoverText('Erfahre mehr über die Pokémon-Welt!')}
          onMouseLeave={() => setHoverText('')}
        >
          Hintergrundinformationen
        </a>
      </div>
    </div>
  );
};

export default Home;
