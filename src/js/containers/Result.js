import React from 'react';
import { connect } from 'react-redux';
import { PPCalculator, Beatmap } from 'osu-pp-calculator';

import {
  ResultBox,
} from '../components';

import { setPP } from '../actions';

@connect(state => ({
  beatmap: state.get('beatmap'),
  accuracy: state.get('accuracy'),
  modifiers: state.get('modifiers'),
  combo: state.get('combo'),
  misses: state.get('misses'),
  shouldCalculate: state.get('shouldCalculate'),
}), { setPP })
export default class Extension extends React.Component {

  componentWillMount() {
  }

  calculate(props) {
    try {
      // These two can throw errors, let's be careful!
      const beatmap = Beatmap.fromOsuParserObject(this.props.beatmap);
      const pp = PPCalculator.calculate(
        beatmap,
        props.accuracy,
        props.modifiers,
        props.combo,
        props.misses
      );
      console.log(pp);

      this.props.setPP(pp);
      this.props.setCalculating(false);
    } catch (err) {
      console.error(err);
      this.props.displayError(err);
    }
  }

  willReceiveProps(props) {
    console.log(props);
    this.props.setCalculating(true);
    if (props.shouldCalculate) {
      this.calculate(props);
    }
  }

  render() {
    return (
      <ResultBox />
    );
  }
}
