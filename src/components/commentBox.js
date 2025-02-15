import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from './../actions/index';
import requireAuth from "./requireAuth";


class CommentBox extends Component {
  state = {
    comment: ""
  };

componentDidMount() {
  this.shouldNavigateAway()
}

componentDidUpdate() {
  this.shouldNavigateAway()
}
 
shouldNavigateAway(){
  if(!this.props.auth){
     this.props.history.push('/')
  }
}


  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComments(this.state.comment)
    this.setState({ comment: "" });
  };

  render() {
    return ( 
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}


export default connect(null,actions)(requireAuth(CommentBox))





