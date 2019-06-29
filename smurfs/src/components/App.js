import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf, deleteSmurf, updateSmurf} from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state ={
    name: '',
    age: '',
    height: ''
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  changeHandler = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    let smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(smurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  deleteHandler = id => {
    this.props.deleteSmurf(id)
  }

  updateHandler = id => {
    let updatedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.updateSmurf(id, updatedSmurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit = {this.submitHandler}>
          <input 
            name = "name"
            placeholder = "name"
            value = {this.state.name}
            onChange = {this.changeHandler}
          />
          <input 
            name = "age"
            placeholder = "age"
            value = {this.state.age}
            onChange = {this.changeHandler}
          />
          <input 
            name = "height"
            placeholder = "height"
            value = {this.state.height}
            onChange = {this.changeHandler}
          />
          <button>SUBMIT!</button>
        </form>
        <div className = "mapOverArray">
          {this.props.smurfs.map(smurf => {
            return(
              <div key = {Math.random()}>
                <h1>{smurf.name}</h1>
                <h3>{smurf.age}</h3>
                <h3>{smurf.height}</h3>
                <button onClick = {() => this.deleteHandler(smurf.id)}>X</button>
                <button onClick = {() => this.updateHandler(smurf.id)}>Update</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf, updateSmurf })(App);
