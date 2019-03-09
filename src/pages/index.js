import React from "react"
import { Link } from "gatsby"

import Wrapper from "@/components/wrapper"
import SEO from "../components/seo"

const IndexPage = () => (
  <Wrapper>
    <SEO title="Notes" keywords={[`aleks sobieraj`, `blog`, `portfolio`, `web developer`, `notes`, `reference`, `react`, `vue`, `javascript`, `html`, `css`]} />
    <nav className="w-full lg:max-w-md md:max-w-sm p-8">
      <Link
        className="my-2 py-2 block no-underline text-black"
        to="/bash/"
      >
        bash
      </Link>
    </nav>
  </Wrapper>
)

export default IndexPage
