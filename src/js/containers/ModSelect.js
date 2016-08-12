import React from 'react';
import { connect } from 'react-redux';

import { Mod, Clearfix } from '../components';
import { setModifiers } from '../actions';

const mods = [
  {
    name: 'hd',
    text: 'Hidden',
    value: 8,
  },
  {
    name: 'hr',
    text: 'HardRock',
    value: 16,
  },
  {
    name: 'dt',
    text: 'DoubleTime',
    value: 64,
  },
  {
    name: 'fl',
    text: 'Flashlight',
    value: 1024,
  },
  {
    name: 'nf',
    text: 'NoFail',
    value: 1,
  },
  {
    name: 'ez',
    text: 'Easy',
    value: 2,
  },
  {
    name: 'ht',
    text: 'HalfTime',
    value: 128,
  },
  {
    name: 'so',
    text: 'SpunOut',
    value: 4096,
  },
];

@connect(state => ({
  modifiers: state.get('modifiers'),
}), {
  setModifiers,
})
export default class ModSelect extends React.Component {
  handleClick(mod) {
    const modnum = this.props.modifiers ^ mod;
    this.props.setModifiers(modnum);
    this.props.shouldCalculate(true);
  }

  render() {
    return (
      <div className="mod-select">
        {mods.map((mod, index) =>
          <Mod
            key={index}
            onClick={this.handleClick.bind(this)}
            checked={this.props.modifiers & mod.value}
            {...mod}
          />
        )}
        <Clearfix />
      </div>
    );
  }
}
