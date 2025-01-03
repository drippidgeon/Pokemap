import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <form action="GIS_Web_Kanto/index.html">
          <input type="submit" value="Kanto" />
        </form>
      </div>
      <div>
        <form action="GIS_Web_Johto/index.html">
          <input type="submit" value="Johto" />
        </form>
      </div>
      <div>
        <form action="GIS_Web_Einall/index.html">
          <input type="submit" value="Einall" />
        </form>
      </div>
    </div>

  );
};

export default Home;