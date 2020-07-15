import React from "react";
import "./search-box.styles.css";

// class SearchBox extends React.Component {
//   render(){
//     return (
//       <div className ='search'>
//       <input type = 'search'
//         placeholder='search persons'
//         onChange = {e => this.setState({searchfield: e.target.value})}
//         />
//       </div>
//     )
//   }
// }

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
