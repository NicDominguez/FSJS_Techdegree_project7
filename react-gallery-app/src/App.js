import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import axios from 'axios'

// Component Import
import Search from './components/search.js'
import Nav from './components/nav.js'
import PhotoContainer from './components/photoContainer.js';
import ErrorRoute from './components/errorRoute'

import apiKey from './config.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedPhotos: [],
      tag: "",
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => {
        this.setState({
          searchedPhotos: response.data.photos.photo,
          tag: query,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    this.setState({ loading: true });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch} isLoading={this.state.loading}/>
          <Nav onSearch={this.performSearch}/>

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/cats" />} />
            <Route exact path="/search/:tag" render={() => <PhotoContainer tag={`${this.state.tag}`} results={this.state.searchedPhotos} isLoading={this.state.loading}/> } />
            <Route componenet={ErrorRoute} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
