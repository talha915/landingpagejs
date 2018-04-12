import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckList from './CheckList';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import BannerBody from './components/BannerBody';
import BannerFooter from './components/BannerFooter';
import InternetPage from './components/InternetPage';
import Evolution from './components/Evolution';
import PC from './components/PC';
import Ad from './components/Ad.jsx';
class App extends Component {
   car={
    model: '1897'
  }
  constructor(props){
    super(props);
    this.state={
      id: 1,
      name: 'ABC'
    }
  }
  render() {
    console.log("this.props.state",this.state);
    <CheckList contacts={this.state.name} carmodel={this.car.model}/>
    return (
      <div className="App">
        <Header/>
        <Navigation/>
        <Banner/>
        <BannerBody/>
        <BannerFooter/>
        <InternetPage/>
        <Evolution/>
        <PC/>
        <Ad/>
        <Banner/>
      </div>
    );
  }
}

export default App;
