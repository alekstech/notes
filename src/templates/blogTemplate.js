import React from "react"
import { graphql } from "gatsby"

import "./code-blocks.css"
import SEO from "../components/seo"
import Wrapper from "@/components/wrapper"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Wrapper>
      <SEO
        title={frontmatter.title}
        keywords={frontmatter.keywords.split(',')}
      />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="lg:max-w-md md:max-w-sm max-w-full p-4"
      />
      <time
        className="pb-4"
        dateTime={frontmatter.date}
      >
        <small>
          {frontmatter.date}
        </small>
      </time>
    </Wrapper>
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