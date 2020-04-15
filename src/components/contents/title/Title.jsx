import React from 'react';
import './title.scss';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  render() {
    return (
      <div>
        <h2 className="title">
          {this.state.title}
          <span className="span">{this.props.span}</span>
        </h2>
        <div className="underlineTitle"></div>
      </div>
    );
  }
}
