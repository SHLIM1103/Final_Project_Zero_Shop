import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import { Layout, Breadcrumb } from "__common__/index"
import { BlogPagination } from "__board__/index"
import axios from "axios"

const BlogSearchList = ({ location, match }) => {
  const { pathname } = location
  const [boards, setBoards] = useState([])
  useEffect(()=>{
   axios.get(`http://localhost:8080/board/seach`+match.params.id, )
   .then(({data}) => {
    setBoards(data)
   })
   .catch((error) => {
     alert('실패')
     throw error
   })
  },[])

  return (<>
    <MetaTags>
      <title>Flone | Blog Search Result</title>
    </MetaTags>

    <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
    <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Blog</BreadcrumbsItem>

    <Layout headerTop="visible">
      {/* breadcrumb */}
      <Breadcrumb />
      <div className="blog-area pt-100 pb-100 blog-no-sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mr-20">

                {/* blog pagination */}
                <BlogPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>)
}

export default BlogSearchList