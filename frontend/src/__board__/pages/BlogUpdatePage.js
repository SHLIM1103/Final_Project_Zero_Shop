import PropTypes from "prop-types"
import React from "react"
import MetaTags from "react-meta-tags"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import { Layout, Breadcrumb } from "__common__/index"
import { BlogSidebar, BlogComment, BlogPostUpdate } from "__board__/index"

const BlogUpdatePage = ({ location }) => {
  const { pathname } = location

  return (<>
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
                <BlogPostUpdate />

                {/* blog post comment */}
                <BlogComment />
              </div>
            </div>
            <div className="col-lg-3">
              {/* blog sidebar */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>)
}

BlogUpdatePage.propTypes = {
  location: PropTypes.object
}

export default BlogUpdatePage