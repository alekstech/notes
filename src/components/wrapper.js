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

export const WrapperContext = React.createContext();

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
              <WrapperContext.Provider value={this.state}>
                <Header siteTitle={data.site.siteMetadata.title} />
                <main className="h-full mt-16 flex flex-col items-center focus:outline-none" tabIndex="-1">
                  {this.props.children}
                </main>
              </WrapperContext.Provider>
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
