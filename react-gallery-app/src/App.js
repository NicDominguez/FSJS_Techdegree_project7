import React from 'react';

// Component Import
import Search from './components/search.js'
import Nav from './components/nav.js'
import PhotoContainer from './components/photoContainer.js';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
