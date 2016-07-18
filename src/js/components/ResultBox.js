import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

@connect(state => ({
  calculating: state.get('calculating'),
  pp: state.get('pp'),
}))
export default class ResultBox extends React.Component {
  render() {
    const resultClasses = classNames(
      'result',
      {
        'hidden': this.props.calculating,
      }
    );
    return (
      <div className="result-wrapper">
        <div className={resultClasses}>
          {`That's about ${Math.round(this.props.pp)}pp.`}
        </div>
      </div>
    );
  }
}
