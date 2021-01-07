import { graphql, useStaticQuery } from "gatsby"

import React from "react"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}. Made with&nbsp;
        <span className="heart">&nbsp;❤&nbsp;</span> &&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </span>
      <span>
        Theme and Layout by <a href="https://github.com/surudhb">surudhb</a>
      </span>
    </div>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
