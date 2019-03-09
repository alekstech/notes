import React from "react"
import { Link } from "gatsby"

import Wrapper from "@/components/wrapper"
import SEO from "../components/seo"

const IndexPage = () => (
  <Wrapper>
    <SEO title="notes" keywords={[`aleks sobieraj`, `blog`, `portfolio`, `web developer`, `notes`, `reference`, `react`, `vue`, `javascript`, `html`, `css`]} />
    <nav className="w-full lg:max-w-md md:max-w-sm p-8">
      <Link
        className="my-4 py-2 pl-2 block no-underline text-black border-b border-teal-lighter rounded-b-lg"
        to="/bash-snippets/"
      >
        bash snippets
      </Link>
      <Link
        className="my-4 py-2 pl-2 block no-underline text-black border-b border-teal-lighter rounded-b-lg"
        to="/git-snippets/"
      >
        git snippets
      </Link>
      <Link
        className="my-4 py-2 pl-2 block no-underline text-black border-b border-teal-lighter rounded-b-lg"
        to="/diffie–hellman/"
      >
        Diffie–Hellman
      </Link>
    </nav>
  </Wrapper>
)

export default IndexPage
