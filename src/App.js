import React from 'react';
import Search from "./components/search/search.component";
import CardList from "./components/cardList/cardList.component";
import Loader from 'react-loader-spinner'


import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      countryData: [],
      searchItem: ""
    }
  }

  componentDidMount(){
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
    .then(response => response.json())
    .then(data => {
      this.setState({countryData: data});
    });
  }

  handleSearch = (e) =>{
    this.setState({searchItem: e.target.value});
  }

  render(){
    const filterData = this.state.countryData.filter(countries => {
      console.log(countries.country.toLowerCase().includes(this.state.searchItem.toLowerCase()));
      return countries.country.toLowerCase().includes(this.state.searchItem.toLowerCase())});
    return (
      <div className="App">
        <header className="App-header">
        {
          this.state.countryData.length === 0 ? <Loader type="CradleLoader" color="#00BFFF" height={100} width={100} timeout={3000}/> : (
            <React.Fragment>
              <Search handleSearch={this.handleSearch}/>
              <CardList countryData={filterData}/>
          </React.Fragment>   
          )
        }
        </header>
      </div>
    );
  }
}

export default App;
