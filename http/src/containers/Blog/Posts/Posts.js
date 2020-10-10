import React, { Component } from "react";
import axios from "../../../axios";
import { Link } from "react-router-dom";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const data = response.data.slice(0, 6);
        const updatedPosts = data.map((post) => {
          return {
            ...post,
            author: "Shayan",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePostClick = (id) => {
    this.setState({
      postId: id,
    });
  };

  //! second way we can go to /:id - first way is using 'Link'
  // handlePostClick = (id) => {
  //   this.setState({
  //     postId: id,
  //   });
  //   this.props.history.push("/" + id);
  // };
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Link to={"/" + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.handlePostClick(post.id)}
          />
        </Link>
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
