// Write your JS code here
import './index.css'
import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <nav className="navContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="navimg"
        />
        <ul className="items">
          <li className="navitems">Home</li>
          <li className="navitems">Products</li>
          <li className="navitems">Cart</li>
          <button type="button" className="logoutbtn">
            Logout
          </button>
        </ul>
      </nav>
    )
  }
}

export default Header
