/**
 * Wrapper component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {Component} from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./wrapper.css"

export const NavbarContext = React.createContext('peekaboo');

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = (e) => {
      e.stopPropagation()
      this.setState(state => ({
        navbarOpen: !state.navbarOpen
      }));
    };

    this.state = {
      navbarOpen: false,
      toggleNavbar: this.toggleNavbar,
    };
  }

  render () {
    return (
      <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <div className="h-screen flex flex-col">
              <NavbarContext.Provider value={this.state}>
                <Header siteTitle={data.site.siteMetadata.title} />
              </NavbarContext.Provider>
              <main className="h-full mt-16 overflow-y-auto scrolling-touch flex flex-col items-center">
                {this.props.children}
              </main>
            </div>
          )}
        />
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
