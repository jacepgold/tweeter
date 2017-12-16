import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

class Newtweet extends Component {
 // let input;

 state = {tweet: ''}

 handleSubmit = (e) => {
   e.preventDefault();

   // this.props.dispatch({ type: 'ADD_TWEET', tweet.value })
 }

 handleChange = (e) => {
   this.setState({tweet: e.target.value})
 }

render() {

  return (
    <div>
      <h3>Add A Tweet</h3>
      <form onSubmit={ this.handleSubmit }>
        <input value={this.state.tweet} onChange={this.handleChange} />
      </form>
    </div>
  )
}
}


export default connect()(Newtweet);
