import React, {Component} from "react"

import Wrapper from "@/components/wrapper"
import SEO from "@/components/seo"

class DiffieHelman extends Component {
  state = {
    date: '2019-03-08',
    title: 'Diffie-Hellman',
    keywords: [`diffie`, `hellman`],
    shared: 1,
    diffie: 15,
    hellman: 10
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render () {
    const {diffie, hellman, shared} = this.state
    return (
      <Wrapper>
        <SEO title={this.state.title} keywords={this.state.keywords} />
        <div
          className="lg:max-w-md md:max-w-sm max-w-full p-4 font-serif"
        >
          <h1>Diffie–Hellman key exchange</h1>
          <p>Start with a number that both sides know. Call it the shared secret.</p>
          <input
            type="number"
            name="shared"
            value={shared}
            onChange={this.handleChange}
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-teal-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <p>Each side picks their own private secret number.</p>
          <input
            type="number" 
            name="diffie"
            value={diffie}
            onChange={this.handleChange}
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-teal-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <input
            type="number" 
            name="hellman"
            value={hellman}
            onChange={this.handleChange}
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-teal-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <p>Multiply private numbers by the shared numbers.</p>
          <input
            type="number" 
            aria-label="hellman times shared"
            value={hellman * shared}
            readOnly
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <input
            type="number" 
            aria-label="diffie times shared"
            value={diffie * shared}
            readOnly
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <p>Exchange the products.</p>
          <input
            type="number" 
            aria-label="diffie times shared"
            value={diffie * shared}
            readOnly
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <input
            type="number" 
            aria-label="hellman times shared"
            value={hellman * shared}
            readOnly
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <p>Multiply by the private secret.</p>
          <input
            type="number" 
            aria-label="diffie times shared times hellman"
            value={diffie * shared * hellman}
            readOnly
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <input
            type="number" 
            aria-label="hellman times shared times diffie"
            value={hellman * shared * diffie}
            readOnly
            className="mb-2 py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none" />
          <p>Your numbers match, allowing you to verify each other's identity.</p>
          <p>And you never had to reveal your secret to one another.</p>



        </div>
        <time
          className="pb-4"
          dateTime={this.state.date}
        >
          <small>
            {this.state.date}
          </small>
        </time>
      </Wrapper>
    )
  }
}


export default DiffieHelman
