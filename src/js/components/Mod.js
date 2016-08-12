import React from 'react';
import classNames from 'classnames';

export default class Mod extends React.Component {
  handleClick() {
    this.props.onClick(this.props.value);
  }

  render() {
    const name = `mod-${this.props.name}`;
    return (
      <div className={classNames('mod', name)}>
        <input
          type="checkbox"
          ref="checkbox"
          id={name}
          onClick={this.handleClick.bind(this)}
          checked={this.props.checked}
        />
        <label htmlFor={name}>{this.props.text}</label>
      </div>
    );
  }
}
