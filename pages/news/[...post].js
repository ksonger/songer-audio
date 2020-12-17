import React from "react";
import {useRouter} from 'next/router'
import PostContainer from "../../components/News/PostContainer";

const NewsPost = () => {

  const router = useRouter()
  let id, slug
  if (router.query.post) {
    id = router.query.post[0]
    slug = router.query.post[1]
  }

  return (
    <PostContainer id={id} slug={slug}/>
  )

}

export default NewsPost