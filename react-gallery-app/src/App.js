import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import axios from 'axios'

// Component Import
import Search from './components/search.js'
import Nav from './components/nav.js'
import PhotoContainer from './components/photoContainer.js';

import apiKey from './config.js'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchedPhotos: []
    }
  }

  componentDidMount() {
    axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&safe_search=1&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => {
        console.log(response)
        this.setState({
          searchedPhotos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search />
          <Nav />
          <Route path="/" render={ () => <PhotoContainer tag="PlaceholderTag" results={this.state.searchedPhotos} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
