import React, { useCallback, useState } from "react"
import { Link } from "react-router-dom"

const BlogListButton = () => {
  const [search, setSearch] = useState({
    brdTitle: ""
  })
  const { brdTitle } = search
  const onChange = useCallback(e => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  })

  return (
    <div className="blog-top mb-50 mt-25">
      {localStorage.getItem("user") != null ? (
        <button>
          <Link to="/blog-write">게시글 작성</Link>
        </button>
      ) : (
        ""
      )}

      <form className="blog-search-form" action="#">
        <input type="text" placeholder="검색어를 입력하세요" onChange={onChange} />
        <button onClick={`/blog-search/${search}`}>
          <i className="pe-7s-search" />
        </button>
      </form>
    </div>
  )
}

export default BlogListButton
