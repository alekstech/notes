import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import '@/components/fadeTransition.css'


class FadeTransition extends Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}

export default FadeTransition