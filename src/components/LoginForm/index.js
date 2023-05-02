// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {name: '', pawrd: '', error: false, namerror: false}

  getname = event => {
    const val = event.target.value
    if (val === '') {
      this.setState({namerror: true})
    } else {
      this.setState({name: val, namerror: false})
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {name, pawrd} = this.state
    if (name !== 'rahul' && pawrd === '') {
      this.setState({error: true})
    } else if (name !== 'rahul' && pawrd !== 'rahul@2021') {
      this.setState({error: true})
    } else {
      const userDetails = {username: name, password: pawrd}
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      if (response.ok === true) {
        this.onSubmitSuccess()
      }
    }
  }

  getpassword = event => {
    const val = event.target.value
    if (val === '') {
      this.setState({paserr: true})
    } else {
      this.setState({pawrd: val, paserr: false})
    }
  }

  render() {
    const {error, namerror, paserr} = this.state
    return (
      <div className="Login">
        <div className="imgCard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
            className="sideimage"
          />
        </div>
        <form className="loginCard" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="loginlogo"
            alt="website logo"
          />
          <label className="labelClass" htmlFor="userName">
            USERNAME
          </label>
          <input
            id="userName"
            onBlur={this.getname}
            className="inputField"
            type="text"
            placeholder="Username"
          />
          {namerror && <p className="errormsg">Required*</p>}
          <label className="labelClass" htmlFor="password">
            PASSWORD
          </label>
          <input
            id="password"
            className="inputField"
            onBlur={this.getpassword}
            type="password"
            placeholder="password"
          />
          {paserr && <p className="errormsg">Required*</p>}
          <button type="submit" className="sbmtbtn">
            Login
          </button>
          {error && (
            <p className="errormsg">*Username and Password did't match</p>
          )}
        </form>
      </div>
    )
  }
}
export default LoginForm
