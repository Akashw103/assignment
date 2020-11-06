import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComment, faSearch, faUserFriends } from '@fortawesome/free-solid-svg-icons'


class Navbar extends Component {
 
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  container = React.createRef();
  state = {
    open: false,
  };
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };


  render() {
    
    return (
      <div className="navbar">
        <div className="container" ref={this.container}>
          <button type="button" class="button" onClick={this.handleButtonClick}>
            ☰
          </button>
          {this.state.open && (
            <div class="dropdown">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          )}
        </div>
        <div className="Brand">
          <img src="/logo.png" width="46" height="46" className="logo" alt="logo"/>
          <h2 className="brand-name">Advancing For Humanity</h2>
        <div>
          <input type="text" className="searchForm" 
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleInputChange}
          /> <button className="search"><FontAwesomeIcon  icon={faSearch} /></button>
        </div>
        </div>
        <div className="star">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <FontAwesomeIcon className="icon"  icon={faBell} />
          <FontAwesomeIcon className="icon" icon={faComment} />
        </div>   
      </div>
    );
  }
}

export default Navbar;