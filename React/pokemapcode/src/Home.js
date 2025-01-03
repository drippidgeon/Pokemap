import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <form action="Kanto_base.html">
          <input type="submit" value="Kanto" />
        </form>
      </div>
      <div>
        <form action="Johto_base.html">
          <input type="submit" value="Johto" />
        </form>
      </div>
      <div>
        <form action="Einall_base.html">
          <input type="submit" value="Einall" />
        </form>
      </div>
    </div>

  );
};
export default Home;