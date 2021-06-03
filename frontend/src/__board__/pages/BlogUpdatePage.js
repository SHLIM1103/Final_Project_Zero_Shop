import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import { Layout, Breadcrumb } from "__common__/index"
import { BlogComment, BlogPostUpdate } from "__board__/index"
import axios from "axios"

const BlogUpdatePage = ({ location, match }) => {
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
        <title>Flone | Blog Update</title>
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Blog Edit</BreadcrumbsItem>

      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
                  <BlogPostUpdate boards={boards} />

                  {/* blog post comment */}
                  <BlogComment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BlogUpdatePage
