import React from 'react';
import { connect } from 'react-redux';
import { PPCalculator, Beatmap } from 'osu-pp-calculator';

import {
  ResultBox,
} from '../components';
import {
  setPP,
  setCalculating,
  setShouldCalculate,
  displayError,
} from '../actions';
import debug from '../debug';

@connect(state => ({
  beatmap: state.get('beatmap'),
  accuracy: state.get('accuracy'),
  modifiers: state.get('modifiers'),
  combo: state.get('combo'),
  misses: state.get('misses'),
  shouldCalculate: state.get('shouldCalculate'),
}), {
  setPP,
  setCalculating,
  displayError,
  setShouldCalculate,
})
export default class Result extends React.Component {
  componentDidMount() {
    this.props.setCalculating(true);
    if (this.props.shouldCalculate) {
      this.calculate(this.props);
    }
  }

  componentWillReceiveProps(props) {
    this.props.setCalculating(true);
    if (props.shouldCalculate) {
      this.calculate(props);
    }
  }

  calculate(props) {
    try {
      // These two can throw errors, let's be careful!
      const beatmap = Beatmap.fromOsuParserObject(props.beatmap);
      const pp = PPCalculator.calculate(
        beatmap,
        props.accuracy,
        props.modifiers,
        props.combo,
        props.misses
      );

      debug('PP calculated', pp);

      this.props.setPP(pp);
      this.props.setShouldCalculate(false);
      this.props.setCalculating(false);
    } catch (err) {
      debug('Couldn\'t calculate PP.', err);
      this.props.displayError(err);
    }
  }

  render() {
    return (
      <ResultBox />
    );
  }
}
