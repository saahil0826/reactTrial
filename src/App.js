import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.js";
import SearchBox from "./components/search-box/search-box.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cities: [],
      searchfield: ""
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ cities: users }));
  }

  render() {
    const { cities, searchfield } = this.state;
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="heading"> Random People Info.org </h1>
        <SearchBox
          placeholder="search persons"
          handleChange={this.handleChange}
        />
        <CardList cities={filteredCities} />
      </div>
    );
  }
}

export default App;
