import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import { Layout, Breadcrumb } from "__common__/index"
import { BlogCommentUpdate } from "__board__/index"
import axios from "axios"

const BlogCommentUpdatePage = ({ location, match }) => {
  const { pathname } = location
  const [replies, setReplies] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8080/replies/select/` + match.params.id)
      .then(({ data }) => {
        setReplies(data)
      })
      .catch(error => {
        alert("실패")
        throw error
      })
  }, [])

  return (
    <>
      <MetaTags>
        <title>Flone | update</title>
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Blog Post</BreadcrumbsItem>

      <Layout headerTop="visible">
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <BlogCommentUpdate replies={replies} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BlogCommentUpdatePage
