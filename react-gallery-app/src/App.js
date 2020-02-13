import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

// Component Import
import Search from './components/search.js'
import Nav from './components/nav.js'
import PhotoContainer from './components/photoContainer.js';
import ErrorRoute from './components/errorRoute'

import apiKey from './config.js'

const navItems =['Airplanes', 'Dogs', 'Birds']

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedPhotos: [],
      query: "",
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  componentDidUpdate() {
    window.onpopstate = (e) => {
      console.log(window.location.href)
      let stringParts = window.location.href.split('/');
      let searchedText = stringParts[stringParts.length - 1];
      if (searchedText.length > 0) {
        this.performSearch(searchedText)
      } else {
        this.performSearch(navItems[0])
      }
        
    }
  }

  performSearch = (query = navItems[0]) => {
    this.setState({query: query})
    axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => {
        this.setState({
          searchedPhotos: response.data.photos.photo,
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
          <Nav onSearch={this.performSearch} navItems={navItems}/>

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/" />} />
            <Route exact path="/search" render={() => <PhotoContainer results={this.state.searchedPhotos} isLoading={this.state.loading} onSearch={this.performSearch} />} />
            <Route path={`/search/:query`} render={() => <PhotoContainer results={this.state.searchedPhotos} isLoading={this.state.loading} onSearch={this.performSearch} /> } />
            <Route component={ErrorRoute} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
