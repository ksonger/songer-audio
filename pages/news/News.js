import React from "react";
import { Post } from '../../components/News/Post'
import { posts } from '../../api'

class News extends React.Component {


  render() {
    return (
      <>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </>
    )
  }
}

export default News