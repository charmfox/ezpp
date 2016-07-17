import React from 'react';

import { Mod, Clearfix } from '../components';

export default class ModSelect extends React.Component {
  render() {
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
        value: 32,
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

    return (
      <div className="mod-select">
        {mods.map((mod, index) => <Mod key={index} {...mod} />)}
        <Clearfix />
      </div>
    );
  }
}
