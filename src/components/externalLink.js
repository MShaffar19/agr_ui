import React, { Component, PropTypes } from 'react';

class ExternalLink extends Component {
  render() {
    return (
      <span>
        <a
          href={this.props.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {this.props.children || this.props.href}
        </a>
        <i
          className="fa fa-external-link"
          style={{margin: '0 3px'}}
        />
      </span>
    );
  }
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default ExternalLink;