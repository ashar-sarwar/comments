import React, { Component } from "react";
import CommentBox from "./commentBox";
import CommentList from "./commentList";
import { Switch, Route, Link } from "react-router-dom";
import { changeAuth } from "./../actions/index";
import { connect } from "react-redux";

class App extends Component {
  renderButton = () => {
    if (this.props.auth)
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out </button>
      );
    else
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
  };

  renderHeader() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post a comment</Link>
          </li>
          <li>{this.renderButton()}</li>
        </ul>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderHeader()}
        <Switch>
          <Route path="/post" component={CommentBox} />
          <Route path="/" component={CommentList} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
