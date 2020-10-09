import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    postId: null,
    error: null,
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
      .catch(() => {
        this.setState({ error: "CAN'T FETCH POSTS!!!!!" });
      });
  }

  handlePostClick = (id) => {
    this.setState({
      postId: id,
    });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.handlePostClick(post.id)}
        />
      );
    });
    return (
      <div>
        <section className="Posts">
          {!this.state.error ? posts : this.state.error}
        </section>
        <section>
          <FullPost id={this.state.postId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
