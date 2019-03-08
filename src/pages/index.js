import React from "react"
import { Link } from "gatsby"

import Layout from "@/components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Notes" keywords={[`aleks sobieraj`, `blog`, `portfolio`, `web developer`, `notes`, `reference`, `react`, `vue`, `javascript`, `html`, `css`]} />
    <Link to="/bash/">bash</Link>
  </Layout>
)

export default IndexPage
