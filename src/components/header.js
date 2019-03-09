import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {WrapperContext} from '@/components/wrapper';
import ALogo from '@/images/ALogo.png';

class Header extends Component {
  render () {
    return (
      <WrapperContext.Consumer>
        {({navbarOpen, toggleNavbar}) =>
          <header 
            className={"fixed pin-t z-10 w-full flex flex-col bg-transparent " + (navbarOpen ? 'h-screen' : '')}
            onClick={toggleNavbar}
          >
            <nav
              className="w-full min-h-16 h-16 flex items-center justify-between flex-wrap bg-teal-lighter"
            >
              <div className="h-full flex items-center flex-no-shrink text-white mr-6">
                <a
                  href="https://aleks.tech/"
                  className="block h-full flex px-4 py-2 border rounded border-teal-lighter items-center lg:mt-0 text-black hover:text-yellow-lightest focus:border-pink-dark focus:outline-none">
                  <img 
                    className="fill-current h-8 w-8 mb-0"
                    src={ALogo} 
                    alt="A"
                  >
                  </img>
                </a>
              </div>
              <div 
                className="block lg:hidden">
                <button 
                  className="flex items-center mx-4 px-3 py-2 text-black border rounded border-teal-light hover:text-yellow-lightest hover:border-yellow-lightest focus:border-pink-dark focus:outline-none" 
                  aria-label="Toggle menu"
                  onClick={toggleNavbar}
                >
                  <svg 
                    className="fill-current h-3 w-3" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div className="hidden lg:block mx-2">
                <a
                  href="https://aleks.tech/portfolio"
                  className="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black font-sans hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4">
                  projects
                </a>
                <a
                  href="https://aleks.tech/skills" 
                  className="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black font-sans hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4">
                  skills
                </a>
                <a
                  href="https://aleks.tech/tech" 
                  className="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black font-sans hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4"
                >
                  tech
                </a>
                <Link
                  to="/"
                  className="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black font-sans hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4"
                >
                  notes
                </Link>
                <a
                  href="https://aleks.tech/contact" 
                  className="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black font-sans hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
                  contact
                </a>
              </div>
            </nav>
            {navbarOpen &&
              <div className="lg:hidden w-full h-full max-h-screen flex flex-col">
                <div className="flex flex-col items-center overflow-y-auto bg-teal-lighter ">
                  <a
                    href="https://aleks.tech/portfolio"
                    className="font-sans no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
                    projects
                  </a>
                  <a
                    href="https://aleks.tech/skills" 
                    className="font-sans no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
                    skills
                  </a>
                  <a
                    href="https://aleks.tech/tech" 
                    className="font-sans no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
                    tech
                  </a>
                  <Link
                    to="/"
                    className="font-sans no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
                    notes
                  </Link>
                  <a
                    href="https://aleks.tech/contact" 
                    className="font-sans no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 mb-4 lg:mb-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
                    contact
                  </a>
                </div>
                <div className="h-0 flex-shrink flex-grow bg-teal-lighter opacity-50" />
              </div>
            }
          </header>
        }

      </WrapperContext.Consumer>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
