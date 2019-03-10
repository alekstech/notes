import React from "react"

import Wrapper from "../components/wrapper"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-lg">Not found</h1>
      <p>There's nothing here.</p>
    </div>
  </Wrapper>
)

export default NotFoundPage
