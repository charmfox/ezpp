import React from 'react';
import classNames from 'classnames';


export default class Mod extends React.Component {
  render() {
    const name = `mod-${this.props.name}`;
    return (
      <div className={classNames('mod', name)}>
        <input type="checkbox" id={name} value={this.props.value} />
        <label htmlFor={name}>{this.props.text}</label>
      </div>
    );
  }
}
