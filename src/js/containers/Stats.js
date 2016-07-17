import React from 'react';
import { Clearfix } from '../components';

export default class Stats extends React.Component {
  render() {
    return (
      <div className="stats">
        <div className="numeric">
          <label htmlFor="accuracy">Accuracy</label>
          <input type="text" id="accuracy" value="100.0" pattern="" />
        </div>
        <div className="numeric">
          <label htmlFor="combo">Combo<span className="hint">(empty = FC)</span></label>
          <input type="text" id="combo" value="" />
        </div>
        <div className="numeric">
          <label htmlFor="misses">Misses</label>
          <input type="text" id="misses" value="0" />
        </div>
        <Clearfix />
      </div>
    );
  }
}
