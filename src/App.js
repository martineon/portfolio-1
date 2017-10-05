import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';
import { connect } from 'react-redux'
import { fetchUsers, addUser, deleteUsers } from './redux/actions'

class App extends Component {
  constructor(){
    super()
    this.state = {
      first: '',
      last: '',
      born: 0
    }
  }
  componentDidMount(){
    this.props.fetchUsers()
  }

  handleInputChange = (e) =>{
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveFunc = (e) => {
    e.preventDefault()
    let required = ['first', 'last', 'born'];
    let isValide = true;
    required.forEach(item => {
        if (this.state[item] === '') isValide = false
    })
    if (!isValide) return swal('Must!', 'fill all inputs', 'error')
    const { first, last, born } = this.state
    this.props.addUser(first, last, born)
    this.setState({ first: '', last: '', born: '' })
  }
  deleteUser = (x) => {
    this.props.deleteUsers(x)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hot Dog Status</h1>
        <input type="text" name="first" value={this.state.first} onChange={this.handleInputChange}/>
        <input type="text" name="last" value={this.state.last} onChange={this.handleInputChange}/>
        <input type="text" name="born" value={this.state.born} onChange={this.handleInputChange}/>
        <button onClick={this.saveFunc}>Save</button>
        {this.props.usersList ? this.props.usersList.users.map((x) => {
          return <li key={x.id} onClick={() => this.deleteUser(x.id)}> ID: {x.id} => Name: {x.first}</li>
        }): ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fetchUsers, addUser, deleteUsers })(App);