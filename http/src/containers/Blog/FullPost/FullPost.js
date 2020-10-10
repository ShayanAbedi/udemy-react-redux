import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  id = this.props.match.params.id;
  state = {
    loadedPost: null,
  };
  componentDidMount() {
    if (this.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.id)
      ) {
        axios.get(`/posts/${this.id}`).then((response) => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }
  deletePost = () => {
    axios.delete(`/posts/${this.id}`).then((res) => console.log(res));
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePost}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
