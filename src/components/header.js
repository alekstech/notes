import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 600,
        padding: `1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <a
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `1rem`
          }}
          href="http://aleks.tech"
        >
          A
        </a>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          notes
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
