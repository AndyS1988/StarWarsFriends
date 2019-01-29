import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';

const particleOpt = {
    particles: {
      number: {
        value: 230,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    interactivity: {
          events: {
              onhover: {
                  enable: true,
                  mode: "repulse"
              },
              onresize: {
                enable: true,
                density_auto: true,
              }
          }
      }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      searchfield: ''
    }
  }
    
  componentDidMount() {
    fetch("https://swapi.co/api/people/?page=1")
    .then(resp => resp.json())
    .then(people => this.setState({ friends: people.results}))
  }

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  } 

  render() {
    const { friends, searchfield } = this.state;
    const filteredFriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !friends.length ?
      <h1 className="aquaTxt">Loading</h1> :
     (
      <div className="app">
        <header>
          <h1 className="aquaTxt">StarWarsFriends</h1>
          <p className="aquaTxt">Search for your favourite Star Wars Character</p>
          <SearchBox searchChange={this.onSearchChange}/>
        </header>
        <main className="list">
          <CardList friends = { filteredFriends } />
        </main>
        <Particles params={particleOpt} />
        <Particles params={particleOpt} />
      </div>
    );
  }
}

export default App;
