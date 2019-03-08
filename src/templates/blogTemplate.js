import React from "react"
import { graphql } from "gatsby"

import "./code-blocks.css"
import "./blogPostTemplate.css"
import SEO from "../components/seo"
import Layout from "@/components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={frontmatter.keywords.split(',')}
      />
      <div className="blog-post-container">
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <time
            className="blog-post-date"
            dateTime={frontmatter.date}
          >
            <small>
              {frontmatter.date}
            </small>
          </time>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        keywords
      }
    }
  }
`