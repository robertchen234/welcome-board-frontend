import React, { Component } from "react";
import PostIt from "./PostIt";
import NewPostForm from "./NewPostForm";

class ModShowPage extends Component {
  state = {
    mod_posts: this.props.mod_id
  };

  showPostArray = () => {
    let posts = this.props.postArray.filter(post => {
      return post.mod_id == this.props.mod_id;
    });

    return (
      <div className="post-array-container">
        {posts.map(post => {
          return (
            <div key={post.id} className="content-wrapper">
              <PostIt post={post} currentUser={this.props.currentUser} deleteHandler={this.props.deleteHandler} />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const show = { display: this.props.loggedInUser ? "block" : "none" };
    console.log(this.props);
    return (
      <div className="ui">
        <h1 className="mod-name">{`Mod ${this.props.mod_id}`}</h1>
        <div className="post-container">{this.showPostArray()}</div>
        <div style={show}>
          <NewPostForm addPost={this.props.addPost} mod={this.props.mod_id} />
        </div>
      </div>
    );
  }


}

export default ModShowPage;
