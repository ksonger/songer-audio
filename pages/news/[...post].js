import React, {useState} from "react";
import {useRouter} from 'next/router'
import {Col} from 'antd'
import PostContainer from "../../components/News/PostContainer";
import classNames from "classnames";
import styles from "./News.module.scss";
import {styleState} from "../../utils/formFactor";

const NewsPost = () => {

  const router = useRouter()
  let id, slug
  if (router.query.post) {
    id = router.query.post[0]
    slug = router.query.post[1]
  }

  const [breakpoint] = useState('sm')

  return (
    <PostContainer id={id} slug={slug}/>
  )

}

export default NewsPost