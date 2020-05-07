import React from 'react';
import './title.scss';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      span: props.span
    };
  }

  render() {
    const { title, span } = this.state;
    return (
      <div>
        <h2 className="title">
          {title}
          <span className="span">{span}</span>
        </h2>
        <div className="underlineTitle">&nbsp;</div>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired
};
