import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";
import FullPost from "./FullPost/FullPost";
import "./Blog.css";

//* LAZY LOADING
const AsyncComponent = asyncComponent(() => {
  //! Dynamic Import Syntax
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: false,
  };
  login = () => {
    this.setState({
      auth: true,
    });
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="home-active"
                  activeStyle={{ borderBottom: "1px solid red" }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  activeStyle={{ borderBottom: "1px solid blue" }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* with Switch only the first route that matches the given path will be loaded - THE ORDER MATTERS   */}
          {this.state.auth ? (
            <Route path="/" exact component={Posts} />
          ) : (
            <div>
              <h1 style={{ color: "red" }}>YOU NEED TO LOGIN!!!</h1>
              <button onClick={this.login}>Login</button>
            </div>
          )}
          <Redirect from="/hi" to="/" />
          {/* <Route path="/new-post" component={NewPost} /> */}
          {/* //* LAZY LOADING */}
          <Route path="/new-post" component={AsyncComponent} />
          <Route path="/:id" exact component={FullPost} />
          {/* <Route render={() => <h1>Not Found </h1>} /> //! This will
          catch any unknown route */}
        </Switch>

        {/* <Route path="/new-post" exact render={() => <h1>New Posts</h1>} /> */}
      </div>
    );
  }
}

export default Blog;
