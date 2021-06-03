import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import { Layout, Breadcrumb } from "__common__/index"
import { BlogPostDetail, BlogComment } from "__board__/index"
import axios from "axios"

const BlogDetailPage = ({ location, match }) => {
  const { pathname } = location
  const [boards, setBoards] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:8080/boards/board-number/${match.params.id}`)
      .then(res => {
        setBoards(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])

  return (
    <>
      <MetaTags>
        <title>Flone | Blog Detail</title>
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Blog Post</BreadcrumbsItem>

      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="blog-details-wrapper ml-20">
              {/* blog post */}
              <BlogPostDetail boards={boards} />

              {/* blog post comment */}
              <BlogComment boards={boards} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BlogDetailPage
