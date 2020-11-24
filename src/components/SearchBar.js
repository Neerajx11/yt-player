import React from "react";
import "../style/style.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui search-bar" style={{ height:'7vh' }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field nav">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/512px-YouTube_dark_logo_2017.svg.png"
              alt=""
            />
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
